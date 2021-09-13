import AuthConnector from "./Auth/AuthConnector";
import MiningConnector from "./Mining/MiningConnector";
import DiscountsConnector from "./Discounts/DiscountsConnector"
import ListConnector from "./List/ListConnector";

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
}

export default ConnectionManager;