import React from 'react'
import me from '../images/me.jpg'

const Home = (props) => {
    return (
        <div className="home__wrapper">
            <div className="home__image-wrapper">
                <img src={me} alt="Matthew Padich"/>
            </div>
            <div className="home__text-wrapper">
                I am currently working with some very inspiring and motivating people at a startup (that I will delve into more detail about at a later date).
                Here are some examples of my work and things I do for fun:
                <ul>
                    <li><a href="https://github.com/mattyfresh" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/matthew-padich-6bab9a93/" target="_blank">LinkedIn</a></li>
                    <li><a href="http://carterandthebadnews.com" target="_blank">Carter and the Bad News</a></li>
                    <li><a href="https://www.facebook.com/Matthew.Padich" target="_blank">Facebook</a></li>
                </ul>
            </div>
        </div>
    )
};


export default Home;
