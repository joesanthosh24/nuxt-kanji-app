<template>
  <div class="navbar-div">
    <b-navbar class="navbar" :variant="variant" type="dark">
      <nuxt-link to="/">
        <b-navbar-brand>Home</b-navbar-brand>
      </nuxt-link>
      <nuxt-link to="/about">
        <b-navbar-brand>About</b-navbar-brand>
      </nuxt-link>
      <b-navbar-nav class="ml-auto">
        <drop-down-links :items="grades" :itemsHeader="'Grade'"></drop-down-links>
        <b-nav-item @click="$router.push('/login')">Log In</b-nav-item>
        <b-nav-item @click="$router.push('/signup')">Sign Up</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="spacing"></div>
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
      ],
      variant: 'primary'
    };
  },
  methods: {
    scroll(event) {
      console.log(window.scrollY);
      if(window.scrollY > 25) {
        this.variant = 'secondary';
      }
      else {
        this.variant = 'primary'
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 0.65s;
}
.spacing {
  height: 80px;
}
</style>
