import React from 'react'
import '../Style/Footer.css'
const
    Footer = () => {
        return (
            <>
                <div className="footer_parent">
                    <div className="footer_content">
                        <div className="footer_image">
                            <img src="https://homapi.com/logo.png" alt="Logo" className="navbar-logo" />
                        </div>
                        <div className="footer_icons">
                            <a href="https://in.linkedin.com/" target='blank'>  <img src="/icons/svg/linkdin.svg" alt="" /></a>
                            <a href="https://www.instagram.com/accounts/login/?hl=en" target='blank'>  <img src="/icons/svg/instagram.svg" alt="" /></a>
                            <a href="https://www.facebook.com/" target='blank'>  <img src="/icons/svg/facebook.svg" alt="" /></a>
                            <a href="https://www.youtube.com/" target='blank'>  <img src="/icons/svg/youtube.svg" alt="" /></a>
                        </div>
                        <div className="footer_paragraph">
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                            <span>© 2024 Homapi, Inc. All rights reserved..</span>
                        </div>
                    </div>
                    <div className="footer_list_parent">
                        <div className="footer_list">
                           <b><p>Partner with Homapi</p></b>
                            <p>Individuals</p>
                            <p>Professionals</p>
                        </div>
                        <div className="footer_list">
                           <b><p>Resources</p></b>
                            <p>CIL</p>
                            <p>BLOG</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Footer