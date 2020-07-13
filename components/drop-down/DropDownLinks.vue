<template>
  <b-nav-item-dropdown :text="itemsHeader" right>
    <b-dropdown-item v-for="item in items" :key="item.text">
      <nuxt-link :to="item.link">{{item.text}}</nuxt-link>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    itemsHeader: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>