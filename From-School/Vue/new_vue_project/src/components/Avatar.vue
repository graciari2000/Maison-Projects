<template>
    <img src="../assets/thispersondoesnotexist.jpeg" alt="Avatar" class="avatar">
    <p>Ariane A</p>
</template>

<script>
    export default {
    name: 'AvaTar'
    }
</script>

<style scoped>

    p {
        color: #e51b23;
    }
    .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
    }
</style>