import React from 'react'
import '../Style/Try_It.css'
const Try_It = () => {
    return (
        <>
            <div className="try_it_parent">
                <div className="try_it_content">
                    <h1>Try it for Free</h1>
                    <p>No Credit Card Required</p>
                </div>
                <div className="try_it_btn">
                    <button className='Ask_For_Demo'>Ask For Demo<img src="/icons/svg/leftarrow.svg" alt="" /></button>
                    <button className='start_for_free'>Start for Free <img src="/icons/svg/leftarrow.svg" alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default Try_It