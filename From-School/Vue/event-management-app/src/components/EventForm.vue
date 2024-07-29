<template>
    <div class="event-form">
        <h2>{{ isEditing ? 'Modifier l\'Événement' : 'Créer un Événement' }}</h2>
        <form @submit.prevent="submitEvent">
            <div>
                <label for="name">Nom de l'événement:</label>
                <input id="name" v-model="event.name" required>
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" type="date" v-model="event.date" required>
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" v-model="event.description"></textarea>
            </div>
            <button type="submit" class="btn">{{ isEditing ? 'Mettre à jour' : 'Créer' }}</button>
        </form>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default {
    name: 'EventForm',
    setup() {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        const event = ref({
            id: null,
            name: '',
            date: '',
            description: ''
        })

        const isEditing = computed(() => !!route.params.id)

        if (isEditing.value) {
            const existingEvent = store.getters['events/getEventById'](route.params.id)
            if (existingEvent) {
                event.value = { ...existingEvent }
            }
        }

        const submitEvent = () => {
            if (isEditing.value) {
                store.dispatch('events/updateEvent', event.value)
            } else {
                store.dispatch('events/createEvent', event.value)
            }
            router.push('/events')
        }

        return {
            event,
            isEditing,
            submitEvent
        }
    }
}
</script>
