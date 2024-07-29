<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                Event Management
            </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <router-link to="/LoginForm" class="navbar-item">
                    Login
                </router-link>
                <router-link to="/SignUpForm" class="navbar-item">
                    Sign Up
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css');

.navbar {
    background-color: #f0f0f0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-weight: bold;
}

.navbar-menu {
    display: flex;
    align-items: center;
}

.navbar-end {
    display: flex;
    gap: 1rem;
}

.navbar-item {
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
}

.navbar-item:hover {
    background-color: #ddd;
}
</style>
