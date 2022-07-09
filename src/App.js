

import React from 'react' 
import './App.css';

import './index.css'

import { UserCard } from './UserCard.js';
import { UserCardText } from './UserCardText.js';
import { From } from './Form.js'
import { TryLCMeth } from './TryLCMeth.js'



class App extends React.Component{

  state = {name: 'Ann', surName: 'Kat', age: '18'}
  
  render(){
    return <div className="container">
        <TryLCMeth/>
       <UserCard data={this.state} />
       <UserCardText data={this.state}/>
       <From/>
    </div>
  };
}


export default App;
