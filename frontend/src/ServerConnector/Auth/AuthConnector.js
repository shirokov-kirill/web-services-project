import PageType from "../../Header/BodyCommunicating/PageType";
import User from "../User/User";

class AuthConnector{

    #isAuthorized

    constructor(){
        this.#isAuthorized = false;
    }

    authorize(login, password, next, user){
        fetch("http://localhost:8000/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({login: login.toString(), password: password.toString()}),
        })
        .then(ans => ans.json()).then(answer => {
            if(answer.status === 'OK'){
                this.#isAuthorized = true;
                user.updateUserLoggedIn(answer.id, answer.name, answer.token, answer.age, answer.cash);
            }
            if(this.#isAuthorized){
                next(PageType.LIST);
            }
        });
    }

    isAuthorized(){
        return this.#isAuthorized;
    }
}

export default AuthConnector;