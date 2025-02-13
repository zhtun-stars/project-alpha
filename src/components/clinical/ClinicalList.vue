<template>
  <FilterInput @filterChange="filterText" @sortingColumn="sortColumn" :columns="['Mission', 'Physician', 'Peers']" />
</template>
<script>
import FilterInput from '../commons/filter-input/FilterInput.vue';

export default {
  name: 'ClinicalList',
  methods: {
    filterText(obj) {
      console.log(obj);
    },
    sortColumn(obj) {
      console.log(obj);
    },
  },
  components: {
    FilterInput
  }
}
</script>
