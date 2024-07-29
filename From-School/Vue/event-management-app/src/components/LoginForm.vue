<template>
    <div>
        <NavBar />
        <div class="container">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <input v-model="username" placeholder="Username" />
                <input v-model="password" type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
    name: 'LoginForm',
    components: {
        NavBar
    },
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Implement login logic here
            console.log('Logging in:', this.username, this.password);
        }
    }
};
</script>

<style src="../views/styles.css"></style>