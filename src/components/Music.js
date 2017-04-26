import React from 'react'

const Music = (props) => {

    if (props.loading) {
        return <h1>Loading...</h1>
    }

    if (props.error) {
        return <code>Uh oh.. something went wrong.</code>
    }

    return (
        <div className="music__wrapper">
            <h3>Now Listening To: </h3>
            <div className="music__meta-wrapper">
                <a href={props.currentSong.link} target="_blank" rel="_nofollow">
                    <img className="music__album-img" src={props.currentSong.albumArt} alt={props.currentSong.albumTitle} />
                    <div className="music__text-wrapper">                
                        <div className="bold">{props.currentSong.title}</div>
                        <div>from the album <span className="bold">{props.currentSong.albumTitle}</span></div>
                        <div>by <span className="bold">{props.currentSong.artist}</span></div>
                    </div>
                </a>
            </div>
        </div>
    )
}


export default Music
