import './Header.css'
import Button from './Buttons/Button'
import Body from '../Body/Body.js'
import PageType from './BodyCommunicating/PageTypes.js'

function Header(props){
    return(
        <header>
            <div className="main-menu">
                <Button className="list-button" text="Каталог" onClick={listButtonOnClick}/>
                <Button className="discounts-button" text="Акции" onClick={discountsButtonOnClick}/>
                <Button className="mining-button" text="Заработать" onClick={miningButtonOnClick}/>
            </div>
            <Button className="auth-button" text="Авторизация" onClick={authButtonOnClick}/>
        </header>
    )
}

listButtonOnClick = function(){
    Body.modify(PageType.LIST)
}

discountsButtonOnClick = function(){
    Body.modify(PageType.DISCOUNTS)
}

miningButtonOnClick = function(){
    Body.modify(PageType.MINING)
}

authButtonOnClick = function(){
    Body.modify(PageType.AUTH)
}

export default Header;