import AuthStatus from './AuthStatus'

class User{
    status
    id
    name
    token
    age
    cash

    constructor(){
        this.status = AuthStatus.LOGGEDOUT;
        this.id = 0;
        this.name = "";
        this.token = "";
        this.age = 0;
        this.cash = 0;
    }

    updateUserLoggedIn(id, nm, token, age, cash){
        this.status = AuthStatus.AUTHORIZED;
        this.id = id;
        this.name = nm;
        this.token = token;
        this.age = age;
        this.cash = cash;
    }

    updateUserLoggedOut(){
        this.status = AuthStatus.LOGGEDOUT;
    }

    isAuthorized(){
        return this.status === AuthStatus.AUTHORIZED;
    }

}

export default User;