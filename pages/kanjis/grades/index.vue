<template>
  <div class="grades">
    <b-card-group deck>
      <b-row>
        <b-col v-for="grade in grades1()" :key="grade">
          <b-card
            title="Card Title"
            img-src="https://ih1.redbubble.net/image.86481084.7993/raf,750x1000,075,t,000000:44f0b734a5.jpg"
            img-alt="Image"
            img-top
            img-height="300"
            img-width="300"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Grade {{grade}}</b-card-text>
            <b-button @click="$router.push(`/kanjis/grades/${grade}`)" variant="primary">See all Kanji</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="grade in grades2()" :key="grade">
          <b-card
            title="Card Title"
            img-src="https://ih1.redbubble.net/image.86481084.7993/raf,750x1000,075,t,000000:44f0b734a5.jpg"
            img-alt="Image"
            img-top
            img-height="300"
            img-width="300"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Grade {{grade}}</b-card-text>

            <b-button @click="$router.push(`/kanjis/grades/${grade}`)" variant="primary">See all Kanji</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grades: this.$store.state.grades
    };
  },
  methods: {
    grades1() {
      return this.grades.filter((grade, index) => index < 3);
    },
    grades2() {
      return this.grades.filter((grade, index) => index >= 3);
    }
  }
};
</script>

<style scoped>
.grades {
  padding-top: 15px;
  padding-left: 10%;
  width: 80vw;
}
.card {
  /* margin-left: 5px; */
}
.card-deck {
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card-body {
  text-align: center;
}
</style>