import AuthConnector from "./Auth/AuthConnector";
import MiningConnector from "./Mining/MiningConnector";
import DiscountsConnector from "./Discounts/DiscountsConnector"
import ListConnector from "./List/ListConnector";
import PageType from "../Header/BodyCommunicating/PageType";

class ConnectionManager{

    #authConnector
    #miningConnector
    #discountsConnector
    #listConnector


    constructor(){
        this.#authConnector = new AuthConnector();
        this.#miningConnector = new MiningConnector();
        this.#discountsConnector = new DiscountsConnector();
        this.#listConnector = new ListConnector();
    }

    authorize(login, password, next){
        this.#authConnector.authorize(login, password, next);
    }

    isAuth(){
        return this.#authConnector.isAuthorized();
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
        }
    }
}

export default ConnectionManager;