import React from 'react'
import '../Style/Starting_Point.css'
const Starting_Point = () => {
    return (
        <>
            <div className="starting_point_parent">
                <div className="starting_point_container">
                    <div className="starting_point_content">
                        <h1>Your address as a starting point</h1>
                        <p>Homapi provides comprehensive data on your Real Estate environment and potential all in one place, saving you hours of research and analysis.</p>
                        <div className="starting_point_content_btn">
                            <button className='starting_free'>Start for Free <img src="/icons/svg/leftarrow.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className="starting_point_image">
                        <img src="https://homapi.com/landing/en/streamline.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Starting_Point