<template>
  <div class="sort-selection-wrapper">
    <div :class="selectedClass(value)" v-for="(value, key) in sortValues" @click="sortChange(value)" :key="key">
      <template v-if="value === currentSort">
        <SortAscendingOutlined v-if="currentSortDirection === 'ASC'" />
        <SortDescendingOutlined v-if="currentSortDirection === 'DES'" />
      </template>
      {{ value }}
    </div>
  </div>
</template>
<script>
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons-vue';

export default {
  name: 'SortSelection',
  props: {
    sortValues: {
      type: Array,
      required: true
    }, currentValue: {
      type: String,
    }, sortDirection: {
      type: String,
      default: 'NONE'
    }
  }
  ,
  data() {
    return {
      currentSort: this.currentValue,
      currentSortDirection: this.sortDirection
    }
  }, emits: { "sortChange": String },
  computed: {
    selectedClass: function () {
      var vm = this;
      return value => value === vm.currentSort ? 'sort-selection-item active' : 'sort-selection-item';
    }
  },
  methods: {
    sortChange(value) {
      this.currentSort = value;
      this.currentSortDirection = this.currentSortDirection === 'ASC' ? 'DES' : 'ASC';
      this.$emit('sortChange', { value: this.currentSort, direction: this.currentSortDirection });
    }
  }, components: { SortAscendingOutlined, SortDescendingOutlined }
}
</script>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.sort-selection-wrapper {
  .sort-selection-item {
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
