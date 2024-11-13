import React from 'react'
import '../Style/Hompai_For.css'
const Hompai_For = () => {
    return (
        <>
            <div className="hompai_for_parent">
                <div className="hompai_for_heading">
                    <h1>hompai for</h1>
                </div>
            </div>

            {/* card */}
            <div className="hompai_card_parent">
                <div className="hompai_card">
                    <div className="hompai_card_content">
                        <div className="hompai_card-icon">
                            <img src="/icons/svg/indiviuals.png" alt="" />
                        </div>
                        <h3 className="hompai_card-heading">Join Our Community</h3>
                        <p className="hompai_card-paragraph">
                            Manage, improve and make the most of your assets
                        </p>
                        <button className="hompai_card-button">Join</button>
                    </div>
                </div>
                <div className="hompai_card">
                    <div className="hompai_card_content">
                        <div className="hompai_card-icon">
                            <img src="/icons/svg/professional.png" alt="" />
                        </div>
                        <h3 className="hompai_card-heading">Professionals</h3>
                        <p className="hompai_card-paragraph">
                            Win more opportunities, generate Leads, build trust
                        </p>
                        <button className="hompai_card-button">Join</button>
                    </div>
                </div>
            </div>

            {/* Trusted by */}

            <div className="trusted_parent">
                <h2>Trusted by</h2>
                <p>Join our community who uses our app to optimise their property management.</p>
            </div>
        </>
    )
}

export default Hompai_For