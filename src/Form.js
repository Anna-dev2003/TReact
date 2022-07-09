import React from "react";


export class From extends React.Component{

    state = {
        name: "",
        surname: "",
        error: ""
    }

    checkValues = ({name, surname}) => {
        if(name.length >= 3 && surname.length >= 3){
            return true
        }else{
            return false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let isValid = this.checkValues(this.state)
        const {name, surname} = this.state;
       
        if(isValid){
            this.setState({error: "", name: "", surname: ""})
            return alert(`Добро пожаловать - ${name} ${surname}`);
        }else{
            this.setState({error:  "С твоими данными что то не так ;("})
            alert("С твоими данными что то не так ;(")
        }
    }

    changeName = (event) => {
        this.setState({ name: event.target.value})
    }
    
    changeSurName = (event) => {
        this.setState({ surname: event.target.value})
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input placeholder="Name" name="name" value={this.state.name} onChange={this.changeName}/>
                </div>
                <div>
                    <input placeholder="Surname" name="surName"  value={this.state.surname} onChange={this.changeSurName}/>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    }
}
