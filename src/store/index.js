/* Import (core) modules. */
import Vue from 'vue'
import Vuex from 'vuex'

/* Import persisted state (for vuex). */
import createPersistedState from 'vuex-persistedstate'

/* Import (local) modules. */
import profile from './modules/profile'
import system from './modules/system'
import wallets from './modules/wallets'

/* Initialize Vuex. */
Vue.use(Vuex)

/* Initialize debugging. */
const debug = process.env.NODE_ENV !== 'production'

/* Export store. */
export default new Vuex.Store({
    modules: {
        profile,
        system,
        wallets
    },
    plugins: [createPersistedState()],
    strict: process.env.NODE_ENV !== 'production'
})
