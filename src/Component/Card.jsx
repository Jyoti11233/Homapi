import React from 'react'
import '../Style/Card.css'
const Card = () => {
    return (
        <>
            <section className="parent">
                <div className="card_parent">
                    <div className="card">
                        <h3 className="card-heading">75%</h3>
                        <p className="card-paragraph">
                            of buildings have poor energy performance and soon impacted by regulations.</p>
                    </div>
                    <div className="card">
                        <h3 className="card-heading">80%</h3>
                        <p className="card-paragraph">
                            of people don't know how do deal with those regulations. Do you?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card