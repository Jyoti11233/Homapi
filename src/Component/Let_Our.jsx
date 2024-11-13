import React from 'react'
import '../Style/Let_Our.css'
const Let_Our = () => {
    return (
        <>
            <div className="let_our_parent">
                <div className="let_our_container">
                    <div className="let_our_image">
                        <img src="https://homapi.com/landing/connect-apps/Ecosystem_en.png" alt="" />
                    </div>
                    <div className="let_our_content">
                        <h1>Let our solution and network of experts guide you</h1>
                        <p>Discover our professional community who can help you bring your projects to life and improve your energy performance.</p>
                        <div className="let_our_content_btn">
                            <button className='starting_free'>Connect with them !<img src="/icons/svg/wifi.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Let_Our