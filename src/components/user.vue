<template>
  <div>
    <h1>The user is {{ age }} years old</h1>
  </div>
</template>
<script>
export default {
  name: 'user',
  props: ['age'],
}
</script>
