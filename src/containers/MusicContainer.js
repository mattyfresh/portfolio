import React, { Component } from 'react'

import Music from '../components/Music'

import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer BQCZYM6ZZPe3-sU1Rt2KdhFqg7xGJ7c-FbtjuO219wn21LnbO1pHOl1BZlg2rFyQ-Png9sLViUAJgtr3YCP3mRB_dWFYlcVE32pm_CU6a4CGA4dAQcaY9-Ubjp_qy9LoNQjIM6qIcmSYpVNUaJ_lnbwptRs';

class MusicContainer extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            currentSong: {}
        }
    }


    // @TODO get/generate a new token
    // @see https://developer.spotify.com/web-api/authorization-guide/#client-credentials-flow
    fetchCurrentSongs() {
        const instance = axios.create({
            baseURL: 'https://api.spotify.com/v1/me/player',
            method: 'GET'
        })

        instance.get()
            .then((data) => {
                const meta = data.data
                const currentSong = {
                    albumTitle: meta.item.album.name,
                    artist: meta.item.artists[0].name,
                    albumArt: meta.item.album.images[1].url,
                    title: meta.item.name,
                }
                this.setState({
                    currentSong,
                    loading: false
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.fetchCurrentSongs();
    }

    render() {
        return <Music loading={this.state.loading} currentSong={this.state.currentSong} />
    }
}


export default MusicContainer
