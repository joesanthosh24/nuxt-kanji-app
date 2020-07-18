<template>
  <div class="d-block p-2 bg-default text-primary text-uppercase ml-3 mr-3 mb-4">
    {{readingType}} Readings:
    <span
      :class="index === 0 ? 'character__dataHeisig' : ''"
      v-for="(reading, index) in readings"
      :key="reading"
    >
      {{reading}}
      <span class="mr-2" v-show="index < readings.length - 1 && readings.length > 1">,</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    readingType: {
      type: String,
      required: true
    },
    readings: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.character__dataHeisig {
  margin-left: 15px;
}
</style>