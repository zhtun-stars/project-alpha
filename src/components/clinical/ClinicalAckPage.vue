<template>
  <ClinicalTab />
  <Divider />
  <a-row>
    <a-col :span="4">
      <ClinicalList />
    </a-col>
    <a-col :span="1">
      <Divider type="vertical" />
    </a-col>
  </a-row>
</template>
<script>
import { Divider } from 'ant-design-vue';
import ClinicalList from './ClinicalList.vue';
import ClinicalTab from './ClinicalTab.vue';

export default {
  name: 'ClinicalAckPage',
  data() {
    return {}
  },
  components: {
    ClinicalTab, ClinicalList, Divider
  }
}
</script>
