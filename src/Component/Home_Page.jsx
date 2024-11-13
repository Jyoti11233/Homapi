import React from 'react'
import '../Style/Home_Page.css'
const Home_Page = () => {
    return (
        <>
            <div className="home_page_parent">
                <div className="home_page_container">
                    <div className="home_page_content">
                        <h1>AI powering Real Estate</h1>
                        <p>Discover the 1st digital housing information booklet unlocking property value with AI-driven insights.</p>
                        <div className="home_page_content_btn">
                            <button className='learn_more'>Learn More <img src="/icons/svg/leftarrow.svg" alt="" /></button>
                            <button className='start_free'>Start for Free <img src="/icons/svg/leftarrow.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className="home_page_image">
                        <img src="https://homapi.com/landing/en/hero.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_Page