import React from 'react'
import '../Style/Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar_conatiner">
                    <div className="navbar-left">
                        <img src="https://homapi.com/logo.png" alt="Logo" className="navbar-logo" />
                    </div>
                    <div className="navbar-right">
                        <ul className="navbar-menu">
                            <li className="navbar-item">Individuals</li>
                            <li className="navbar-item">Professionals</li>
                            <li className="navbar-item">Services</li>
                            <li className="navbar-item">Properties</li>
                            <li className="navbar-item">Pricing</li>
                            <li className="navbar-item">Blog</li>
                        </ul>
                        <div className="navbar-buttons">
                            <button className="navbar-btn sign-in">Sign In</button>
                            <button className="navbar-btn sign-up">Sign Up Free</button>
                        </div>
                        {/* <h2 className="navbar-gb">GB</h2> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar