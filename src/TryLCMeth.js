import React from "react";

export class TryLCMeth extends React.Component{

    constructor(props){
        super(props);
        this.state = {title: 'Hallo!'};
        
    }

    componentDidMount(){
        document.title = this.state.title
    }

    componentDidUpdate(){
        document.title = this.state.title
    }

    render(){
        return <div>
            <div>
                Hi everyone!
            </div>
            <div className="indent">
                <button onClick={() => {
                    this.setState({
                        title: 'Guten tag!'
                    })
                }}>
                    Click me
                </button>
            </div>
        </div>
    }

}