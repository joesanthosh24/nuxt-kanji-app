<template>
  <div class="home">
    <b-jumbotron fluid header-tag="div">
      <template v-slot:header>Kanji Samurai (漢字侍)</template>
      <template v-slot:lead>App leveraging Kanji API to help learn</template>
      <hr class="my-4" />
      <div class="home__buttons">
        <b-button variant="primary" @click="$router.push('/kanjis/grades')">Kanji By Grade</b-button>
      </div>
    </b-jumbotron>
    <b-card-group deck>
      <b-card
        v-for="grade in grades"
        :key="grade"
        img-src="https://ih1.redbubble.net/image.86481084.7993/raf,750x1000,075,t,000000:44f0b734a5.jpg"
        img-alt="Samurai Kanji"
        img-left
        img-height="100"
        img-width="100"
        class="mb-3 mr-3 ml-3"
        @click="$router.push(`/kanjis/grades/${grade}`)"
      >
        <b-card-text text-tag="h3">Grade {{grade}} Kanji</b-card-text>
        <b-card-sub-title>View all the Kanji taught in Grade {{grade}}</b-card-sub-title>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grades: this.$store.getters.grades
    };
  }
};
</script>

<style scoped>
.jumbotron > .container > .display-3 {
  text-align: center;
}
.jumbotron > .container > p {
  text-align: center;
}
.home__buttons {
  display: flex;
  justify-content: center;
}
.card-deck {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.card-body {
  text-align: center;
}
.card:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>