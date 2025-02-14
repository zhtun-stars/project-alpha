<template>
  <div class="clinical-list-wrapper">
    <FilterInput @filterChange="filterText" @sortingColumn="sortColumn" class="filter-input"
      :filterColumns="['Mission', 'Physician', 'Peers']" :sortColumns="['Mission', 'Physician', 'Date']" />
    <div class="clinical-list-view">
      <ClinicalListView :sort="sort" :filter="filter" />
    </div>
  </div>
</template>

<script>
import FilterInput from '../commons/filter-input/FilterInput.vue';
import ClinicalListView from './ClinicalListView.vue';

export default {
  name: 'ClinicalList',
  props: ['filterData', 'sortData'],
  methods: {
    filterText(obj) {
      this.filter = obj;
    },
    sortColumn(obj) {
      this.sort = obj;
    },
  },
  data() {
    return {
      sort: null, filter: {
        text: '', columns: ['Mission', 'Physician', 'Peers']
      }
    }
  },
  components: {
    FilterInput, ClinicalListView
  }
}
</script>
<style scoped lang="scss">
.clinical-list-wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
  max-height: 100%;
}

.clinical-list-view {
  overflow: auto;
  flex: 1;
  max-height: calc(100vh - 200px);
}
</style>
