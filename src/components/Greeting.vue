<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'greeting',
  data() {
    return {
      message: 'Hello, welcome to Project Alpha!',
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
