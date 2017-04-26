import React from 'react'

const About = (props) => {
    return (
        <div className="about__wrapper">
            <h2>About me</h2>
            <ol className="about-me__list">
                <li>I like to play music, all about my MIJ Tele!</li>
                <li>Going to be learning some .NET for my new gig.  Not sure if I should be excited or terrified.</li>
                <li>Oh yeah, I am now working for a small startup! Check out <a href="https://settle.live" target="_blank">Settle</a> for updates.</li>
                <li>Currently learning Elm, React-Redux-Flux-Flex-Reduce-FIBER(!?), Swift</li>
            </ol>
        </div>
    )
}


export default About
