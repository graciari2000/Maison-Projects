<!-- HomePage.vue -->
<template>
    <div>
        <Navbar />
        <div class="container">
            <h1>Welcome to the Event Management App</h1>
            <router-link to="/events" class="button is-primary">Manage Events</router-link>
            <router-link to="../views/ParticipantList.vue" class="button is-info">Manage Participants</router-link>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/NavBar.vue';

export default {
    name: 'HomePage',
    components: {
        Navbar
    }
};
</script>

<style scoped>
.container {
    margin-top: 2rem;
    text-align: center;
}
        @import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css');
</style>