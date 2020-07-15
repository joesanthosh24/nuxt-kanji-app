<template>
  <div class="home">
    <b-jumbotron fluid header-tag="div">
      <template v-slot:header>Kanji Samurai (漢字侍)</template>
      <template v-slot:lead>App leveraging Kanji API to help learn</template>
      <hr class="my-4" />
      <div class="home__buttons">
        <b-button variant="primary">Kanji By Grade</b-button>
      </div>
    </b-jumbotron>
    <b-card-group deck>
      <div class="grades">
        <b-card
          img-src="https://ih1.redbubble.net/image.86481084.7993/raf,750x1000,075,t,000000:44f0b734a5.jpg"
          img-alt="Samurai Kanji"
          img-left
          img-height="100"
          img-width="100"
          class="mb-3"
        >
          <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
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
.grades {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 25%;
}
</style>