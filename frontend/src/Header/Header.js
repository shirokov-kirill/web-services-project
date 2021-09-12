import './Header.css'
import Button from './Buttons/Button'

function Header(props){
    return(
        <header>
            <div className="main-menu">
                <Button className="list-button" text="Каталог"/>
                <Button className="discounts-button" text="Акции"/>
                <Button className="mining-button" text="Заработать"/>
            </div>
            <Button className="auth-button" text="Авторизация"/>
        </header>
    )
}

export default Header;