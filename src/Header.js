import "./Header.css"

const Header = () => {

    return (
        <div className="header">
            <div className="left-section">
                <img className="hamburger-icon" src='/icons/hamburger-menu.svg' alt="" />
                <div className="app-logo-container">
                    <img className="oasis-icon" src='/oasis.png' alt="" />
                    <span className="logo-name">Oasis</span>
                </div>
            </div>
            <div className="middle-section">
                <input className="search-bar" type="search" placeholder="Search"></input>
                <button className="search-button" placeholder="Search">
                    <img className="search-icon" src='/icons/search.png'></img>
                </button>
            </div>
            <div className="right-section">
                <img className="cart-icon" src='/icons/cart.png' alt="" />
                <img className="notification-icon" src='/icons/notification.png' alt="" />
                <img className="user-icon" src='/images/user.png' alt="" />
            </div>
        </div>
    )
}

export default Header;