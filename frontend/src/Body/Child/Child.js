import React from 'react';
import PageType from '../../Header/BodyCommunicating/PageType';
import './Child.css'
import Auth from './Auth/Auth'
import List from './List/List'
import Mining from './Mining/Mining'
import Discounts from './Discounts/Discounts'
import Profile from './Profile/Profile';

class Child extends React.Component{
    constructor(props){
        super(props);    
    }

    render(){
        switch(this.props.screen){
            case PageType.AUTH:
                return(
                    <Auth serverConnector={this.props.serverConnector} handleAuthConfirmation={this.props.handleAuthConfirmation}/>
                );
            case PageType.LIST:
                return(
                    <List serverConnector={this.props.serverConnector}/>
                );
            case PageType.MINING:
                return(
                    <Mining serverConnector={this.props.serverConnector}/>
                );
            case PageType.DISCOUNTS:
                return(
                    <Discounts serverConnector={this.props.serverConnector}/>
                );
            case PageType.LIST:
                return(
                    <Profile serverConnector={this.props.serverConnector}/>
                );
            default:
                return(
                    <div>

                    </div>
                );
        }
    }
}

export default Child;