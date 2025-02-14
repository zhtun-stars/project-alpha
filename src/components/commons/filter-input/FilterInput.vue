<template>
  <div class="filter-wraper">
    <input class="input" type="text" v-model="filterText" placeholder="Search" />
    <div class="options">
      <a-popover v-if="filterColumns.length > 0" placement="bottomRight" :overlayStyle="{ minWidth: '200px' }">
        <template #content>
          <FilterSelection :filterValues="thisFilterColumns" @filterChange="filterChange" />
        </template>
        <a-button type="text">
          <FilterOutlined />
        </a-button>
      </a-popover>

      <a-popover v-if="sortColumns.length > 0" placement="bottomRight" :overlayStyle="{ minWidth: '200px' }">
        <template #content>
          <SortSelection :sortValues="sortColumns" @sortChange="sortChange" />
        </template>
        <a-button type="text">
          <SortAscendingOutlined v-if="currentSortDirection === 'ASC'" />
          <SortDescendingOutlined v-else-if="currentSortDirection === 'DES'" />
          <TableOutlined v-else />
        </a-button>
      </a-popover>
    </div>
  </div>
</template>

<script>
import FilterSelection from './FilterSelection.vue';
import SortSelection from './SortSelection.vue';
import { FilterOutlined, SortAscendingOutlined, SortDescendingOutlined, TableOutlined } from '@ant-design/icons-vue';

export default {
  name: "FilterInput",
  props: {
    filterColumns: {
      type: Array,
      default: []
    },
    sortColumns: {
      type: Array,
      default: []
    },
  },
  emits: {
    "filterChange":
    {
      type: { text: String, columns: Array }
    }
    , "sortingColumn": {
      type: Object
    }
  },
  watch: {
    filterText() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.$emit("filterChange", { text: this.filterText, columns: this.currentFilterValues });
      }, 300);
    },
  },
  data() {
    return {
      filterText: "",
      thisFilterColumns: this.filterColumns,
      sortingColumn: "",
      timeout: null,
      currentSortDirection: "NONE",
      currentFilterValues: [...this.filterColumns],
    };
  },
  methods: {
    sortChange(column) {
      this.currentSortDirection = column.direction
      this.$emit("sortingColumn", column)
    },
    filterChange(value) {
      this.currentFilterValues = value
      this.$emit("filterChange", { text: this.filterText, columns: this.currentFilterValues });
    }
  },
  components: { FilterSelection, SortSelection, TableOutlined, SortAscendingOutlined, SortDescendingOutlined, FilterOutlined }
}
</script>

<style lang="scss" scoped>
@use "@/assets/_variables.scss" as *;

.filter-wraper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border: $default-border;

  .input,
  .input:focus {
    outline: none;
    border: none;
    padding-left: 12px;
  }
}
</style>
