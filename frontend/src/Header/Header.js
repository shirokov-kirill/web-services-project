import './Header.css'
import Button from './Buttons/Button'
import Body from '../Body/Body'
import PageType from './BodyCommunicating/PageType.js'
import React from 'react'

class Header extends React.Component{

    constructor(props){
        super(props);
        this.listButtonOnClick = this.listButtonOnClick.bind(this);
        this.discountsButtonOnClick = this.discountsButtonOnClick.bind(this);
        this.authButtonOnClick = this.authButtonOnClick.bind(this);
        this.miningButtonOnClick = this.miningButtonOnClick.bind(this);
    }

    render(){
        return(
            <header>
                <div className="main-menu">
                    <Button className="list-button" text="Каталог" onClick={this.listButtonOnClick}/>
                    <Button className="discounts-button" text="Акции" onClick={this.discountsButtonOnClick}/>
                    <Button className="mining-button" text="Заработать" onClick={this.miningButtonOnClick}/>
                </div>
                <Button className="auth-button" text="Авторизация" onClick={this.authButtonOnClick}/>
            </header>
        )
    }

    listButtonOnClick = function(){
        this.props.handleButtonClick(PageType.LIST);
    }
    
    discountsButtonOnClick = function(){
        this.props.handleButtonClick(PageType.DISCOUNTS);
    }
    
    miningButtonOnClick = function(){
        this.props.handleButtonClick(PageType.MINING);
    }
    
    authButtonOnClick = function(){
        this.props.handleButtonClick(PageType.AUTH);
    }
}

export default Header;