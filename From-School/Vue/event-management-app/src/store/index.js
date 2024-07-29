// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        events: [],
        participants: []
    },
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event);
        },
        ADD_PARTICIPANT(state, participant) {
            state.participants.push(participant);
        }
    },
    actions: {
        addEvent({ commit }, event) {
            commit('ADD_EVENT', event);
        },
        addParticipant({ commit }, participant) {
            commit('ADD_PARTICIPANT', participant);
        }
    },
    modules: {}
});