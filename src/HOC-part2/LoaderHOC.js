import React from "react";
import ContactsList from "./ContactsList";


export class LoaderHOC extends React.Component{

    state = {contacts: [], isLoaded: false}

    componentDidMount(){
        fetch('https://api.randomuser.me/?nat=us,gb&results=10')
            .then((response) => response.json())
            .then((result) => this.filterContacts(result.results))
            .then((contacts) => this.withDelay(3000)(contacts))
            .then((contacts) => {
                // console.log(contacts)
                this.setState({
                    contacts: contacts,
                    isLoaded: true
                })
            })
    }

    filterContacts(contacts){

        // console.log(contacts)
        const contactsArr = contacts.map((contact) => {
            const {name: {first, last}, picture: {thumbnail: photo}, id: {value: id} } = contact

            return{
                name: `${first} ${last}`,
                photo,
                id,
            }
            // console.log(first, last, photo, id)
        })

        return contactsArr
    }

    withDelay = (delay) => (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, delay);
    });
};

    render(){
        if(this.state.isLoaded === true){
            return <ContactsList contacts={this.state.contacts}/>
        }else{
            return <p>Loading...</p>
        }

    }
}