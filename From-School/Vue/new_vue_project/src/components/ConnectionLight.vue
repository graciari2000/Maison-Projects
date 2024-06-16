import { name } from "tar/types";

<template>
    <div class="connection-dot" :class="{ 'connected': isConnected }"></div>
</template>

<script>
export default {
    name: 'ConnectionLight',
    
    data() {
        return {
            isConnected: true,
        };
    }
};
</script>

<style scoped>
.connection-dot {
    vertical-align: middle;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 50%;
    margin-bottom: 10%;
    background-color: red;
}

.connected {
    background-color: green;
}
</style>