<template>
  <greeting />
  <user :age="age" />
</template>

<script>
import greeting from './components/greeting.vue'
import user from './components/user.vue'

export default {
  name: 'App',
  data() {
    return {
      age: 30,
    }
  },
  components: {
    greeting,
    user,
  },
}
</script>
