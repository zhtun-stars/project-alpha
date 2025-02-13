<template>
  <div class="custom-tab-group">
    <div class="custom-tab-child" :value="tab.key" v-for="tab in tabs" :class="[tab.key === index ? 'selected' : '']"
      @click="index = tab.key">
      {{ tab.label }}
    </div>
  </div>
</template>
<script setup>

</script>


<script>
export default {
  name: 'Tabs',
  emits: {
    'TabChange': Number
  },
  props: {
    tabs: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      index: this.tabs[0].key,
    }
  },
  watch: {
    index() {
      this.onTabChange(this.index)
    }
  },
  methods: {
    onTabChange(key) {
      this.$emit('TabChange', key);
    }
  }
}
</script>

<style scoped lang="scss">
@use 'sass:color';
@use '@/assets/_variables.scss' as *;

.custom-tab-group {
  display: flex;
  width: 100%;
  border: $default-border;
  border-radius: $border-radius-small;


  .custom-tab-child {
    padding: 12px 6px;
    flex: 1;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    border-right: $default-border;

    &:last-child {
      border-right: none;
    }

    &.selected {
      font-weight: bold;
      color: white;
      background-color: $color-star;

      &:first-child {
        border-start-start-radius: $border-radius-small;
        border-end-start-radius: $border-radius-small;
      }

      &:last-child {
        border-start-end-radius: $border-radius-small;
        border-end-end-radius: $border-radius-small;
      }
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
