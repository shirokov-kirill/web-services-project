import './App.css';
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import ConnectionManager from './ServerConnector/ConnectionManager';
import React from 'react';
import PageType from './Header/BodyCommunicating/PageType';

class App extends React.Component{

  #connectionManager

  constructor(){
    super();
    this.#connectionManager = new ConnectionManager();
    this.state = {pageType: PageType.LIST};
    this.handleButtonClickOrAuth = this.handleButtonClickOrAuth.bind(this);
  }

  handleButtonClickOrAuth(type){
    if(this.#connectionManager.canAccess(type)){
      this.setState({pageType: type});
    } else {
      this.setState({pageType: PageType.AUTH});
    }
  }

  render(){
    return (
      <div className="App">
        <Header handleButtonClick={this.handleButtonClickOrAuth}/>
        <Body connectionManager={this.#connectionManager} pageType={this.state.pageType} handleAuth={this.handleButtonClickOrAuth}/>
      </div>
    );
  }
}

export default App;
