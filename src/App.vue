<template>
  <greeting :age="age" />
  <user :age="age" @age-change="updateAge" :updateAgeFn="updateAgeCB" />
</template>

<script>
import greeting from './components/greeting.vue'
import user from './components/user.vue'

export default {
  name: 'App',
  data() {
    return {
      age: 25,
    }
  },
  methods: {
    updateAge(number) {
      this.age += number
    },
    updateAgeCB(number) {
      this.age += number
    },
  },
  components: {
    greeting,
    user,
  },
}
</script>
