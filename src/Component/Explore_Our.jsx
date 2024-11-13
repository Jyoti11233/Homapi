import React from 'react'
import '../Style/Explore_Our.css'
const Explore_Our = () => {
    return (
        <>
            <div className="explore_our_parent">
                <div className="explore_our_content">
                    <h2>Explore our blog</h2>
                    <p>Stay Informed with our priority insights</p>
                </div>
            </div>

            {/* card */}

            <div className="explore_card_grand_parent">
                <div className="explore_card_parent">
                    <div className="explore_card_image">
                        <img src="https://assets.homapi.com/prod/image-97810ef5-5245-4ff8-8325-0bcea1b37a71.png" alt="" />
                    </div>
                    <div className="explore_card_content">
                        <h4>What is the Climate and Resilience....</h4>
                        <p>The Climate and Resilience Law, also known as Law No. 2021-1104 of August 22, 2021, is a French law adopted as....</p>
                        <button>Check it Out</button>
                    </div>
                </div>
                <div className="explore_card_parent">
                    <div className="explore_card_image">
                        <img src="https://assets.homapi.com/prod/image-4d8a8ee3-918e-48cf-9fe7-53fec0b73567.png" alt="" />
                    </div>
                    <div className="explore_card_content">
                        <h4>Rent in France: mandatory....</h4>
                        <p>When renting a property in France, there are mandatory documents to provide. Here is a list of the main document....</p>
                        <button>Check it Out</button>
                    </div>
                </div>
                <div className="explore_card_parent">
                    <div className="explore_card_image">
                        <img src="https://assets.homapi.com/prod/image-62047d3e-9e9c-4e5e-a9bb-9c2e711b88f8.png" alt="" />
                    </div>
                    <div className="explore_card_content">
                        <h4>Bad Energy Ratings: Key Dates....</h4>
                        <p>Energetic sieves (properties rated as classes F and G in the EPC) are the primary focus of public policies aimed a...</p>
                        <button>Check it Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore_Our