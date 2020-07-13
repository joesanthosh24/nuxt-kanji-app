<template>
  <div>
    <b-navbar variant="primary" type="dark">
      <nuxt-link to="/">
        <b-navbar-brand>Home</b-navbar-brand>
      </nuxt-link>
      <nuxt-link to="/about">
        <b-navbar-brand>About</b-navbar-brand>
      </nuxt-link>
      <b-navbar-nav class="ml-auto">
        <drop-down-links :items="grades" :itemsHeader="'Grade'"></drop-down-links>
        <b-nav-item>Log In</b-nav-item>
        <b-nav-item>Sign Up</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>
import DropDownLinks from "../components/drop-down/DropDownLinks";

export default {
  components: {
    dropDownLinks: DropDownLinks
  },
  data() {
    return {
      grades: [
        { text: "Grade 1", link: "/kanjis/grades/1" },
        { text: "Grade 2", link: "/kanjis/grades/2" },
        { text: "Grade 3", link: "/kanjis/grades/3" },
        { text: "Grade 4", link: "/kanjis/grades/4" },
        { text: "Grade 5", link: "/kanjis/grades/5" },
        { text: "Grade 6", link: "/kanjis/grades/6" }
      ]
    };
  }
};
</script>

<style>
</style>
