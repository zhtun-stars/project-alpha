<template>
  <div>
    <h1>The user is {{ ageDoubled }} years old</h1>
    <button type="button" @click="updateAgeFn(3)">Increase age</button>
  </div>
</template>
<script>
export default {
  name: 'user',
  props: {
    age: {
      type: Number,
      required: true,
    },
    updateAgeFn: Function,
  },
  emits: ['age-change'],
  computed: {
    ageDoubled() {
      return this.age * 2
    },
  },
  methods: {
    onClickAge() {
      this.$emit('age-change', 3)
    },
  },
}
</script>
