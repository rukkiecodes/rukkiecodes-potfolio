<template>
  <v-app dark>
    <v-app-bar
      flat
      fixed
      class="app-bar rounded-lg ma-2 ma-sm-5"
    >
      <nuxt-link to="/" class="deep-purple--text text--accent-4 text-decoration-none text-sm-h6">.rukkiecodeds()</nuxt-link>
      <v-spacer />
      <Contact />
    </v-app-bar>
    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <Nuxt />
      </transition>
    </v-main>
    <v-footer
      absolute
      app
      color="transparent"
      class="d-flex justify-center"
    >
      <span>rukkiecodes &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Contact from '~/components/Contact.vue';
export default {
  name: "DefaultLayout",
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  components: { Contact }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
* {
  font-family: "Fira Code", monospace !important;
}

.app-bar {
  background: #1212128a !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.8s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>