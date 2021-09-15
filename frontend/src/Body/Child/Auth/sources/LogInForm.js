import React from 'react'
import './LogInForm.css'

class LogInForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            login: "",
            password: ""
        }
        this.onLoginChangeHandler = this.onLoginChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    }

    render(){
        return(
            <div className="LogInForm">
                <div>
                    <h2>
                        Login
                    </h2>
                    <input className="enterField loginField" name="login" onChange={() => this.onLoginChange(this.onLoginChangeHandler)}/>
                </div>
                <div>
                    <h2>
                        Password
                    </h2>
                    <input className="enterField passwordField" type="password" name="password" onChange={() => this.onPasswordChange(this.onPasswordChangeHandler)}/>
                </div>
                <button className="confirmButton" onClick={() => this.onConfirmClick(this.props)}>
                    Confirm.
                </button>
          </div>
        );
    }

    onLoginChange = (handler) => {
        console.log(handler);
        handler(document.querySelector('.loginField').value);
    }

    onLoginChangeHandler = function(value){
        this.setState({login: value});
    }
    
    onPasswordChange = (handler) => {
        handler(document.querySelector('.passwordField').value)
    }

    onPasswordChangeHandler = function(value){
        this.setState({password: value});
    }
    
    onConfirmClick = (props) => {
        props.serverConnector.authorize(this.state.login, this.state.password, props.next);
        this.setState({login: '', password: ''});
        let updateFront = document.getElementsByClassName('enterField');
        for (const element of updateFront) {
            element.value = '';
        }
    }
}

export default LogInForm;