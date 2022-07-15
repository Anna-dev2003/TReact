import React from "react";

// import '../App.css'


export class Refs extends React.Component{

    squareRef = React.createRef()

    componentDidMount(){
        setTimeout(() => this.squareRef.current.style.transform = `translateX(200px)`, 2000)
    }

    render(){
        return <>
            <div className="square" ref={this.squareRef} style={{transition: `1s`}}>

            </div>
        </>
    }
}