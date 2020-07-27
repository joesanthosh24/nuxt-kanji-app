<template>
  <div class="character">
    <h1 class="character__title">{{kanji}}</h1>
    <character-data :heisig="heisig_en" :on="on_readings" :kun="kun_readings"></character-data>
    <b-button variant="primary">Add To Study</b-button>
  </div>
</template>

<script>
import CharacterData from "~/components/character-data/CharacterData";

export default {
  asyncData({ params: { num, level }, $axios, store }) {
    const kanji = store.state.kanjis.kanjis[level][num];
    const encodedKanji = encodeURI(kanji);
    console.log(kanji);
    console.log(encodedKanji);
    return $axios.$get(`/kanji/${encodedKanji}`).then(data => {
      console.log(data);
      const {
        grade,
        heisig_en,
        kun_readings,
        jlpt,
        on_readings,
        stroke_count,
      } = data;
      return {
        grade,
        heisig_en,
        kun_readings,
        jlpt,
        on_readings,
        stroke_count,
        kanji
      };
    });
  },
  components: {
    characterData: CharacterData
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