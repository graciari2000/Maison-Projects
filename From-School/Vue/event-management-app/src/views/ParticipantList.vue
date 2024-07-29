<template>
    <div>
        <NavBar />
        <div class="container">
            <h1>Participant List</h1>
            <form @submit.prevent="addParticipant">
                <input v-model="newParticipant" placeholder="Enter participant name" />
                <button type="submit">Add Participant</button>
            </form>
            <ul>
                <li v-for="participant in participants" :key="participant">{{ participant }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'ParticipantList',
    components: {
        NavBar
    },
    data() {
        return {
            newParticipant: ''
        };
    },
    computed: {
        ...mapState(['participants'])
    },
    methods: {
        ...mapActions(['addParticipant']),
        addParticipant() {
            if (this.newParticipant.trim()) {
                this.addParticipant(this.newParticipant);
                this.newParticipant = '';
            }
        }
    }
};
</script>

<style src="../views/styles.css"></style>