<template>
  <Avatar></Avatar>
  <meepLikesFish></meepLikesFish>

</template>

<script>
import meepLikesFish from './components/meepLikesFish.vue'
import Avatar from './components/Avatar.vue'

export default {
  name: 'App',
  components: {
    meepLikesFish,
    Avatar
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
