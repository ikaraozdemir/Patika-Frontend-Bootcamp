import React from 'react'

function Hero() {
  return (
    <div id="hero">  
    <img className="hero-image" src="./images/hero-man.jpg" alt="Weight Lifter"/>
    <div id="hero-content" className="hero-content">
        <div className="tag">POWERFULL</div>
        <h1>Group <br/> Practice <br/> With Trainer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum quibusdam iste, dicta praesentium error expedita at dolorum ea eaque obcaecati rem est quas numquam alias illum molestias illo sapiente.</p>
        <div id="hero-button" className="hero-button">
            <button id="blue-button" className="blue-button">Sign Up</button>
            <button id="link-button" className="link-button">Details</button>
    </div>
    </div>
</div>
  )
}

export default Hero