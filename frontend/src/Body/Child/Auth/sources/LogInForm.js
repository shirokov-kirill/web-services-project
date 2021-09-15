import './LogInForm.css'

function LogInForm(props){
    return(
        <div className="LogInForm">
            <div>
                <h2>
                    Login
                </h2>
                <input className="enterField" name="login" onChange={LogInForm.onLoginChange}/>
            </div>
            <div>
                <h2>
                    Password
                </h2>
                <input className="enterField" type="password" name="password" onChange={LogInForm.onPasswordChange}/>
            </div>
            <button className="confirmButton" onClick={() => LogInForm.onConfirmClick(props)}>
                Confirm.
            </button>
      </div>
    );
}

LogInForm.state = {
    login: "",
    password: ""
}

LogInForm.onLoginChange = function(event){
    LogInForm.state.login = event.target.value
}

LogInForm.onPasswordChange = function(event){
    LogInForm.state.password = event.target.value;
}

LogInForm.onConfirmClick = function(props){
    props.serverConnector.authorize(LogInForm.state.login, LogInForm.state.password, props.next);
    LogInForm.setState({login: '', password: ''});
    let updateFront = document.getElementsByClassName('enterField');
    for (const element of updateFront) {
        element.value = '';
    }
}

export default LogInForm;