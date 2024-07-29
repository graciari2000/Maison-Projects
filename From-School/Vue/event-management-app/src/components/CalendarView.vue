<template>
    <div>
        <h2>Calendrier des Événements</h2>
        <FullCalendar :plugins="calendarPlugins" :events="calendarEvents"></FullCalendar>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
    components: { FullCalendar },
    data() {
        return {
            calendarPlugins: [dayGridPlugin] // Ajout du plugin ici
        };
    },
    computed: {
        calendarEvents() {
            return this.$store.state.events.map(event => ({
                title: event.title,
                start: event.date
            }));
        }
    }
};
</script>

<style>
@import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';
</style>