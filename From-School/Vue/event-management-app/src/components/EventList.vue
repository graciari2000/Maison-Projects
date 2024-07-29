<template>
    <div>
        <h2>Liste des Événements</h2>
        <ul>
            <li v-for="event in events" :key="event.id">
                <router-link :to="{ name: 'EventDetail', params: { id: event.id } }">
                    {{ event.title }} - {{ event.date }}
                </router-link>
                <button @click="deleteEvent(event.id)">Supprimer</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        events() {
            return this.$store.state.events;
        }
    },
    methods: {
        deleteEvent(id) {
            this.$store.dispatch('deleteEvent', id);
        }
    }
};
</script>
