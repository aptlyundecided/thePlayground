import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        test_wod: {
            name: 'test',
            workout: {
                rounds: 12,
                items: [
                    'build',
                    'test',
                    'fix',
                    'test'
                ],
                for_time: true
            }
        },
        active_wod: {},
        wod_list: []
    },
    mutations: {
        update_active_wod (state) {
            axios.post('wod/insomnia/get-wod')
                .then((response) => {
                    if (typeof response.data.wod !== 'undefined') {
                        if (typeof response.data.wod === 'string') {
                            state.active_wod = JSON.parse(response.data.wod)
                        } else {
                            state.active_wod = response.data.wod
                        }
                    } else {
                        console.log('where is the wod?')
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    },
    actions: {
    },
    getters: {
        active_wod (state) {
            return state.active_wod
        }
    }
}
