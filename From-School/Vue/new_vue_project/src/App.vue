<template>
  <div>
    <Avatar />
    <ConnectionLight />
    <meepLikesFish />
    <Spinner
      :initialValue="0"
      :minValue="0"
      :maxValue="100"
    />
    <BoardPagination>bread</BoardPagination>
  </div>
</template>

<script>
import meepLikesFish from './components/meepLikesFish.vue';
import Avatar from './components/Avatar.vue';
import ConnectionLight from './components/ConnectionLight.vue';
import Spinner from './components/Spinner.vue';
import BoardPagination from './components/boardPagination.vue';

export default {
  name: 'App',
  components: {
    ConnectionLight,
    meepLikesFish,
    Avatar,
    Spinner,
    BoardPagination
  }
};
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
