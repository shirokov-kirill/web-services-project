import './Body.css'
import PageType from '../Header/BodyCommunicating/PageTypes';

function Body(){
    return(
        <div className="main-body">
        </div>
    );
}

Body.modify = function(type){
    switch(type){
        case PageType.AUTH:
            Body.modifyToAuth();
            break;
        case PageType.DISCOUNTS:
            Body.modifyToDiscounts();
            break;
        case PageType.LIST:
            Body.modifyToList();
            break;
        case PageType.MINING:
            Body.modifyToMining();
            break;
        default:
            return;
    }
}

Body.modifyToAuth = function(){

}

Body.modifyToMining = function(){

}

Body.modifyToDiscounts = function(){

}

Body.modifyToList = function(){

}

export default Body;