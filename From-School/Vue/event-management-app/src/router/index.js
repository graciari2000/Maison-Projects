import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EventList from '../views/EventList.vue';
import EventForm from '../components/EventForm.vue';
import ParticipantList from '../views/ParticipantList.vue';
import LoginForm from '../components/LoginForm.vue';
import SignUpFormForm from '../components/SignUpForm.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/events', name: 'EventList', component: EventForm },
    { path: '/events', name: 'EventList', component: EventList },
    { path: '/participants', name: 'ParticipantList', component: ParticipantList },
    { path: '/LoginForm', name: 'LoginForm', component: LoginForm },
    { path: '/SignUpForm', name: 'SignUpForm', component: SignUpFormForm }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
