import React from "react";

export const DataContext = React.createContext()


// GetAlbum.contextType = DataContext;

export class DataProvider extends React.Component{

	state = {
        isLoaded: false,
        items: [],
        albumsCount: '',
        featuredAlbums: [],
    }

    changeCount = (e) => {
        this.setState({albumsCount: e.target.value})
    }

    handleForm = (e) => {
        e.preventDefault()

        if(!this.state.albumsCount){
            this.setState({featuredAlbums: []})
            return
        }

        let cut = this.state.items.slice(0, +this.state.albumsCount)
        this.setState({featuredAlbums: cut,  albumsCount: ''})
    }

    componentDidMount(){
        this.getData()
    }


    getData() {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result,
                })
            })
    }

    
    render(){
        const {items, albumsCount, featuredAlbums} = this.state
        const {changeCount, handleForm} = this
        return ( <DataContext.Provider value={{items, albumsCount, featuredAlbums, changeCount, handleForm}}>
            {this.props.children}
        </DataContext.Provider>
        )
    }
}

