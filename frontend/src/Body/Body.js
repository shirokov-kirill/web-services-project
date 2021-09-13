import './Body.css'
import PageType from '../Header/BodyCommunicating/PageTypes';

function Body(){
    return(
        <div className="main-body">
        </div>
    );
}

let body = document.querySelector('.main-body');

Body.modify = function(type){
    switch(type){
        case PageType.AUTH:
            modifyToAuth();
            break;
        case PageType.DISCOUNTS:
            modifyToDiscounts();
            break;
        case PageType.LIST:
            modifyToList();
            break;
        case PageType.MINING:
            modifyToMining();
            break;
        default:
            return;
    }
}

modifyToAuth = function(){
    
}

modifyToMining = function(){

}

modifyToDiscounts = function(){

}

modifyToList = function(){

}

export default Body;