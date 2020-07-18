<template>
  <div class="character__data">
    <div class="d-block p-2 bg-default text-primary text-uppercase ml-3 mr-3 mb-4">
      <span class="pull-left">Meaning:</span>
      <span class="character__dataHeisig">{{heisig}}</span>
    </div>
    <readings :readings="kun" readingType="Kun" />
    <readings :readings="on" readingType="On" />
  </div>
</template>

<script>
import Readings from "@/components/readings/Readings";

export default {
  props: {
    heisig: {
      type: String,
      required: true
    },
    kun: {
      type: Array,
      required: true
    },
    on: {
      type: Array,
      required: true
    }
  },
  components: {
    readings: Readings
  }
};
</script>

<style scoped>
</style>