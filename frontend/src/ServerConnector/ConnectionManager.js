import AuthConnector from "./Auth/AuthConnector";
import MiningConnector from "./Mining/MiningConnector";
import DiscountsConnector from "./Discounts/DiscountsConnector"
import ListConnector from "./List/ListConnector";
import PageType from "../Header/BodyCommunicating/PageType";
import User from './User/User'

class ConnectionManager{

    #authConnector
    #miningConnector
    #discountsConnector
    #listConnector
    #user


    constructor(){
        this.#user = new User();
        this.#authConnector = new AuthConnector();
        this.#miningConnector = new MiningConnector();
        this.#discountsConnector = new DiscountsConnector();
        this.#listConnector = new ListConnector();
    }

    authorize(login, password, next){
        this.#authConnector.authorize(login, password, next, this.#user);
    }

    isAuth(){
        return this.#user.isAuthorized();
    }

    canAccess(type){
        switch(type){
            case PageType.AUTH:
                return true;
            case PageType.DISCOUNTS:
                return true;
            case PageType.LIST:
                return true;
            case PageType.MINING:
                return this.isAuth();
            case PageType.PROFILE:
                return this.isAuth();
        }
    }
}

export default ConnectionManager;