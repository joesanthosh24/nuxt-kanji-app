<template>
  <div class="character">
    <h1 class="character__title">{{$route.params.character}}</h1>
  </div>
</template>

<script>
export default {
  asyncData({ params: { character }, $axios }) {
    return $axios.$get(`/kanji/${character}`).then(data => {
      return {
        data
      };
    });
  },
  created() {
    console.log(this.data);
  }
};
</script>

<style scoped>
.character {
  text-align: center;
}
.character__title {
  font-size: 155px;
  color: #007bff;
}
</style>