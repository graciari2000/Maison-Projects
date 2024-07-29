import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// WebSocket connection
const socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    console.log(`Message from server: ${event.data}`);
    // You can dispatch actions to your Vuex store if needed
    store.dispatch('webSocketMessage', event.data);
};

socket.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

app.config.globalProperties.$socket = socket;

app.use(router).use(store).mount('#app');
