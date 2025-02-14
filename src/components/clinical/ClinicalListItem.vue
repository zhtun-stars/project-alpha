<template>
  <div class="clinical-list-item">
    <div class="title-wrapper">
      <div>{{ item.mission }}</div>
      <div>{{ item.date }}</div>
    </div>
    <div class="body-wrapper">
      <div>{{ item.physician }}</div>
      <div><span :class="item.physicianReview ? 'green' : 'red'">
          {{ item.physicianReview ? item.physicianDate : 'Not review yet' }}</span></div>
    </div>
  </div>
  <!-- <a-list-item>
    <a-list-item-meta :title="title" :description="item.physician" />
  </a-list-item> -->
</template>
<script>
export default {
  name: 'ClinicalListView',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    title: function () {
      return `${this.item.mission} ${this.item.date}`;
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/_variables.scss" as *;

.title-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  div {
    flex: 1;

    &:first-child {
      font-weight: bold;
    }

    &:last-child {
      text-align: right;
    }
  }

}

.body-wrapper {
  font-size: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  div:last-child {
    span {
      color: white;
      padding-left: 8px;
      padding-right: 8px;
      border-radius: 5px;

      &.green {
        background-color: greenyellow;
        color: black;
      }

      &.red {
        background-color: $color-star;
      }
    }
  }
}

.clinical-list-item {
  padding: 8px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: $default-border;
  }

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>
