<template>
  <div class="filter-selection-wrapper">
    <div :class="selectedClass(value)" v-for="(value, key) in filterValues" @click="filterChange(value)" :key="key">
      <CheckOutlined v-if="isColumnSelected(value)" />
      {{ value }}
    </div>
  </div>
</template>
<script>
import { CheckOutlined } from '@ant-design/icons-vue';

export default {
  name: 'FilterSelection',
  props: {
    filterValues: {
      type: Array,
      default: []
    }
  }
  ,
  data() {
    return {
      currentFilterValues: [...this.filterValues],
    }
  }, emits: { "filterChange": String },
  computed: {
    selectedClass: function () {
      const vm = this;
      return value => vm.currentFilterValues.includes(value) ? 'filter-selection-item active' : 'filter-selection-item';
    },
    isColumnSelected: function () {
      const vm = this;
      return value => vm.currentFilterValues.includes(value)
    }
  },
  methods: {
    filterChange(value) {
      if (this.currentFilterValues.includes(value)) {
        this.currentFilterValues = this.currentFilterValues.filter(item => item !== value);
      } else {
        this.currentFilterValues.push(value);
      }
      this.$emit('filterChange', this.currentFilterValues);
    }
  }, components: { CheckOutlined }
}
</script>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.filter-selection-wrapper {
  .filter-selection-item {
    height: 30px;
    line-height: 30px;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: $default-border ;
    }

    &:hover,
    &.active {
      text-decoration: underline;
      font-weight: bold;
    }
  }
}
</style>
