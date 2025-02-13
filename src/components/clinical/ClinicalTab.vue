<template>
  <Tabs :tabs="tabs" @tabChange="TabChange" />
</template>

<script>
import { TAB_MY_REVIEW, TAB_REQUIRED_TO_REVIEW, TAB_REVIEWED } from '@/constants';
import Tabs from '../commons/tabs/Tabs.vue';

export default {
  name: 'ClinicalTab',
  data() {
    return {
      tabs: [
        TAB_MY_REVIEW, TAB_REVIEWED, TAB_REQUIRED_TO_REVIEW
      ]
    }
  },
  methods: {
    TabChange(key) {
      console.log(key);
    }
  },
  components: {
    Tabs
  }
}
</script>
