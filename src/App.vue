<template>
  <!-- <Greeting /> -->
  <ClinicalTab />
</template>

<script>
import ClinicalTab from './components/clinical/ClinicalTab.vue';
import Greeting from './components/Greeting.vue'

export default {
  name: 'App',
  components: {
    Greeting, ClinicalTab
  },
}
</script>
