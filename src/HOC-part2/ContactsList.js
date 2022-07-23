
import React from "react";
import { loaderHOC } from "./LoaderHOC";

class ContactsList extends React.Component{

    render(){
        // console.log(this.props.contacts)
        const {contacts} = this.props

        return (
            <div>
                {contacts.map((user) => (
                    <div key={user.id}>
                        <h2>
                            {user.name}
                        </h2>
                        <p>
                            <img src={user.photo}></img>
                        </p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ContactsList

