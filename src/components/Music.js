import React from 'react'

const Music = (props) => {

    if (props.loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h3>Now Listening To: </h3>
            <h3>{props.currentSong.title}</h3>
            <div>by {props.currentSong.artist}</div>
            <div>on {props.currentSong.albumTitle}</div>
            <img src={props.currentSong.albumArt} alt="album artwork" />
        </div>
    )
}


export default Music
