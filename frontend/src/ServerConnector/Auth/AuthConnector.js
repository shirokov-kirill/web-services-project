import PageType from "../../Header/BodyCommunicating/PageType";

class AuthConnector{

    #isAuthorized

    constructor(){
        this.#isAuthorized = false;
    }

    authorize(login, password, next){
        fetch("http://localhost:3001/auth", {
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