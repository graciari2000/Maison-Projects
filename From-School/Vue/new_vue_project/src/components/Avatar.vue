<template>
  <div>
    <img src="../assets/thispersondoesnotexist.jpeg" alt="doesnotexist" class="avatar" @click="toggleText">
    <div v-if="showText">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvaTar',
  data() {
    return {
      showText: false
    };
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* Add cursor pointer to indicate clickable */
}
</style>