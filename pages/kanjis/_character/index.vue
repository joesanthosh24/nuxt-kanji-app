<template>
  <div class="character">
    <h1 class="character__title">{{$route.params.character}}</h1>
    <character-data :heisig="heisig_en" :on="on_readings" :kun="kun_readings"></character-data>
  </div>
</template>

<script>
import CharacterData from "../../../components/character-data/CharacterData";

export default {
  asyncData({ params: { character }, $axios }) {
    const decodedChar = decodeURI(character);
    return $axios.$get(`/kanji/${decodedChar}`).then(data => {
      const {
        grade,
        heisig_en,
        kun_readings,
        jlpt,
        on_readings,
        stroke_count
      } = data;
      return {
        grade,
        heisig_en,
        kun_readings,
        jlpt,
        on_readings,
        stroke_count
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