<template>
    <div>
        <NavBar />
        <div class="container">
            <h1>Event List</h1>
            <form @submit.prevent="addEvent">
                <input v-model="newEvent" placeholder="Enter event name" />
                <button type="submit">Add Event</button>
            </form>
            <ul>
                <li v-for="event in events" :key="event">{{ event }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'EventList',
    components: {
        NavBar
    },
    data() {
        return {
            newEvent: ''
        };
    },
    computed: {
        ...mapState(['events'])
    },
    methods: {
        ...mapActions(['addEvent']),
        addEvent() {
            if (this.newEvent.trim()) {
                this.addEvent(this.newEvent);
                this.newEvent = '';
            }
        }
    }
};
</script>

<style src="../views/styles.css"></style>