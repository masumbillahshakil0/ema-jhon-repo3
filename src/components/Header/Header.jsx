import './Header.css'
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Order-review">Order</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Log-in">Log-in</a>
            </div>
        </div>
    );
};

export default Header;