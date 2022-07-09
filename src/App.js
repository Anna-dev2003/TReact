

import React from 'react' 
import './App.css';


const Home = (props) => {
  return <div>Home page</div>;
};

const News  = (props) => {
  return <div>News  page</div>;
};

const CallBack  = (props) => {
  return <div>CallBack page</div>;
};

const Contacts = (props) => {
  return <div>Contacts page</div>;
};

class App extends React.Component{

  state = {currentPage: 'home'}

  renderPage = () => {

    let current = this.state.currentPage;


    if(current === 'home'){
      return <Home/>
    }else if(current === 'news'){
      return <News/>
    }else if(current === 'callback'){
      return <CallBack/>
    }else if(current === 'contacts'){
      return <Contacts/>
    }

  }
  

  change = (event) => {

    this.setState({currentPage: event.target.id})
  }


  render(){
    return <div> 
      <div className='nav'>
        <span id='home' onClick={this.change} className='nav-item'>
          Home
        </span>
        <span id='news' onClick={this.change} className='nav-item'>
          News
        </span>
        <span id='callback' onClick={this.change} className='nav-item'>
          CallBack
        </span>
        <span id='contacts' onClick={this.change} className='nav-item'>
          Contacts
        </span>
      </div>
      <div className='inf'>{this.renderPage()}</div>
        
    </div>
  };
}


export default App;
