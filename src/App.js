import React from "react";

export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(res => res.json())
            .then((result) => {

                this.setState({
                    isLoaded: true,
                    items: result,
                })
            }, (error) =>{
                this.setState({
                    isLoaded: true,
                    error,
                })
            })
    }

    render(){

        const {error, isLoaded, items} = this.state;
        console.log(items)
        if(error){
            return <div>Error</div>
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <ul>
                    {items.map((album) => (
                        <li key={album.id}>
                            Album`s ID:{album.id} ----- Album`s index:{items.indexOf(album)} ----- Album`s name:{album.title}
                        </li>
                        )
                    )}
                </ul>
            )
        }
    }
}