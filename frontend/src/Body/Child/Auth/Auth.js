import React from 'react';
import './Auth.css'
import LogInForm from './sources/LogInForm.js'

class Auth extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="App-1">
                <LogInForm serverConnector = {this.props.serverConnector} next = {this.props.handleAuthConfirmation}/>
            </div>
        );
    }
}

export default Auth;