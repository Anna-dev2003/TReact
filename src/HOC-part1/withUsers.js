import React from "react";


export const withUsers = (WrappedComponent) => {
    return class extends React.Component{
        state = {users: []}

        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => {
                  this.setState({
                    users: result
                  })
            });
        }
        render(){
            return <WrappedComponent {...this.props} {...this.state}/>
        }
    }
}