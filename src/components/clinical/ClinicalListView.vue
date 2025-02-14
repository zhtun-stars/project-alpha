<template>
  <!-- <a-list item-layout="horizontal" :dataSource="listData">
    <template #renderItem="{ item }"> -->
  <ClinicalListItem v-for="(item, index) in filteredAndSortedData" :key="index" :item="item" />
  <!-- </template>
</a-list> -->
</template>

<script>
import { CLINICAL_DATA } from '../../../mockdata';
import ClinicalListItem from './ClinicalListItem.vue';

export default {
  name: 'ClinicalListView',
  props: ['filter', 'sort'],
  data() {
    return {
      listData: CLINICAL_DATA
    }
  },
  computed: {
    filteredAndSortedData: function () {
      return this.listData
        .filter(item => {
          for (let filter of this.filter.columns) {

            let filterKey = ''
            switch (filter) {
              case 'Mission':
                filterKey = 'mission';
                break;
              case 'Physician':
                filterKey = 'physician';
                break;
              case 'Date':
                filterKey = 'date';
                break;
              // case 'Peers':
              //   filterKey = 'peers';
              //   break;
            }
            console.log(item[filterKey])
            if (item[filterKey] && item[filterKey].toLowerCase().indexOf(this.filter.text.toLowerCase()) >= 0) {
              return true;
            }
          } return false;
        })
        .sort((a, b) => {
          if (!this.sort) {
            return 1;
          }
          let sortKey = ''
          switch (this.sort.value) {
            case 'Mission':
              sortKey = 'mission';
              break;
            case 'Physician':
              sortKey = 'physician';
              break;
            case 'Date':
              sortKey = 'date';
              break;
          }
          if (this.sort.direction === 'ASC') {
            return a[sortKey].localeCompare(b[sortKey]);
          } else {
            return b[sortKey].localeCompare(a[sortKey]);
          }
        });
    }
  },
  components: {
    ClinicalListItem
  }
}
</script>
