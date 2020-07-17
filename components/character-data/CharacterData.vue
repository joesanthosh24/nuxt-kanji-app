<template>
  <div class="character__data">
    <div class="d-block p-2 bg-default text-primary text-uppercase ml-3 mr-3 mb-4">
      <span class="pull-left">Meaning:</span>
      <span class="character__dataHeisig">{{heisig}}</span>
    </div>
    <div class="d-block p-2 bg-default text-primary text-uppercase ml-3 mr-3 mb-4">
      Kun Readings:
      <span
        :class="index === 0 ? 'character__dataHeisig' : ''"
        v-for="(reading, index) in kun"
        :key="reading"
      >
        {{reading}}
        <span class="mr-2" v-show="index < kun.length - 1 && kun.length > 1">,</span>
      </span>
    </div>
    <div class="d-block p-2 bg-default text-primary text-uppercase ml-3 mr-3 mb-4">
      Kun Readings:
      <span
        :class="index === 0 ? 'character__dataHeisig' : ''"
        v-for="(reading, index) in on"
        :key="reading"
      >
        {{reading}}
        <span class="mr-2" v-show="index < on.length - 1 && on.length > 1">,</span>
      </span>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
.character__dataHeisig {
  margin-left: 50px;
}
</style>