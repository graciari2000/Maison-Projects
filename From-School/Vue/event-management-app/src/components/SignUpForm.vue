<template>
    <div>
        <NavBar />
        <div class="container">
            <h1>Sign Up</h1>
            <form @submit.prevent="signUp">
                <input v-model="username" placeholder="Username" />
                <input v-model="password" type="password" placeholder="Password" />
                <input v-model="email" type="email" placeholder="Email" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
    name: 'SignUp',
    components: {
        NavBar
    },
    data() {
        return {
            username: '',
            password: '',
            email: ''
        };
    },
    methods: {
        signUp() {
            // Implement sign-up logic here
            console.log('Signing up:', this.username, this.password, this.email);
        }
    }
};
</script>

<style src="../views/styles.css"></style>