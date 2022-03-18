import React from 'react'
import image from '../assets/javascript.svg'
const PageInfo = () => {
    return (
        <section className="presentation">
            <div className="column">
                <h1>Vanilla <span>JavaScript</span> Projects</h1>
                <p>These are my JavaScript projects.</p>
            </div>
            <div className="column">
                <img src={image} alt="" />
            </div>
        </section>
    )
}

export default PageInfo
