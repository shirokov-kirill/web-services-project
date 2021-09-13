import './Header.css'
import Button from './Buttons/Button'
import Body from '../Body/Body.js'
import PageType from './BodyCommunicating/PageTypes.js'

function Header(props){
    return(
        <header>
            <div className="main-menu">
                <Button className="list-button" text="Каталог" onClick={Header.listButtonOnClick}/>
                <Button className="discounts-button" text="Акции" onClick={Header.discountsButtonOnClick}/>
                <Button className="mining-button" text="Заработать" onClick={Header.miningButtonOnClick}/>
            </div>
            <Button className="auth-button" text="Авторизация" onClick={Header.authButtonOnClick}/>
        </header>
    )
}

Header.listButtonOnClick = function(){
    Body.modify(PageType.LIST)
}

Header.discountsButtonOnClick = function(){
    Body.modify(PageType.DISCOUNTS)
}

Header.miningButtonOnClick = function(){
    Body.modify(PageType.MINING)
}

Header.authButtonOnClick = function(){
    Body.modify(PageType.AUTH)
}

export default Header;