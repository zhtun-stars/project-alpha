<template>
  <div>
    <p v-if="age >= 30">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'greeting',
  props: ['age'],
  data() {
    return {
      message: 'You muse be older than 30 years.!',
    }
  },
}
</script>

<style scoped lang="scss">
@use 'sass:color';
$primary-color: red;

h1 {
  color: color.adjust($primary-color, $lightness: -10%);
}
</style>
