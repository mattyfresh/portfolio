import React, { Component } from 'react'
import Music from '../components/Music'
import axios from 'axios'

class MusicContainer extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            currentSong: {},
            error: false
        }
    }

    fetchCurrentSongs() {
        axios.get('http://ws.audioscrobbler.com/2.0/',
        {
            params: {
                method: 'user.getrecenttracks',
                user: 'mpadic1',
                api_key: '368a318e6c38cb631a5a5978d4118b2b',
                format: 'json',
                limit: 1
            }
        })
            .then((resp) => {
                const currentTrack = resp.data.recenttracks.track[0];
                const currentSong = {
                    albumTitle: currentTrack.album['#text'],
                    artist: currentTrack.artist['#text'],
                    albumArt: currentTrack.image[1]['#text'],
                    link: currentTrack.url,
                    title: currentTrack.name
                }
                this.setState({
                    currentSong,
                    loading: false
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({error: true})
            })
    }

    componentDidMount() {
        this.fetchCurrentSongs();
    }

    render() {
        return <Music loading={this.state.loading} currentSong={this.state.currentSong} error={this.state.error} />
    }
}


export default MusicContainer
