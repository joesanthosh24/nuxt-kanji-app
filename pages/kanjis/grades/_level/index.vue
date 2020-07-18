<template>
  <div>
    <div class="main-text">
      <h1 class="main-text">Grade {{$route.params.level}} Kanji</h1>
      <p>Amount: {{kanjis.length}} Kanji</p>
    </div>
    <div class="kanjis">
      <b-card
        header-tag="header"
        :header="(index + 1).toString()"
        footer-tag="footer"
        class="mb-2 mr-3 ml-3"
        v-for="(kanji, index) in kanjis"
        :key="index"
      >
        <template v-slot:footer>
          <b-button variant="primary">Add To Study</b-button>
        </template>
        <b-card-title>
          <h3 @click="$router.push(`/kanjis/grades/${$route.params.level}/${index}`)" class="kanji-picture">{{kanji}}</h3>
        </b-card-title>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kanjis: this.$store.state.kanjis.kanjis[this.$route.params.level]
    };
  }
};
</script>
<style scoped>
.main-text {
  text-align: center;
}
.kanjis {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
}
.card-body {
  text-align: center;
  font-weight: bold;
}
.card-title:hover {
  cursor: pointer;
  opacity: 0.6;
}
.kanji-picture {
  font-weight: bold;
  font-size: 50px;
}
</style>