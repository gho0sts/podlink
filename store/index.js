import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            itunesVisible: true,
            googleVisible: true,
            spotifyVisible: true,
            overcastVisible: true,
            castboxVisible: true,
            pocketcastsVisible: true,
            castroVisible: true,
            rssVisible: true,
            radiopublicVisible: true,
            breakerVisible: true
        }
    })
}

export default createStore