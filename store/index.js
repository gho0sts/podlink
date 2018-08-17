import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            itunes : {},
            links : {},
            premium : false,
            redirects: [],
            sharableLink: "",
            show: {}
        }
    })
}

export default createStore