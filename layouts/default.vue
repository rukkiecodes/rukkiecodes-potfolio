<template>
  <v-app dark>
    <v-app-bar
      flat
      fixed
      class="app-bar rounded-lg ma-2 ma-sm-5"
    >
      <nuxt-link
        to="/"
        class="deep-purple--text text--accent-4 text-decoration-none text-sm-h6"
      >.rukkiecodeds()</nuxt-link>
      <v-spacer />
      <router-link
        to="/"
        class="text-decoration-none mr-5 deep-purple--text text--accent-4 hidden-xs-only"
        active-class="blue-grey--text text--darken-1"
      >.rukkie()</router-link>
      <router-link
        to="/work"
        class="text-decoration-none mr-5 deep-purple--text text--accent-4 hidden-xs-only"
        active-class="blue-grey--text text--darken-1"
      >.work()</router-link>
      <Contact />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            small
            v-bind="attrs"
            v-on="on"
            class="ml-5 hidden-sm-and-up"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(route, i) in routes"
            :key="i"
            :to="route.to"
          >
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
      routes: [
        { title: '.rukkie()', to: '/' },
        { title: '.work()', to: '/work' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },

  components: { Contact },

  mounted () {
    this.$nextTick(() => {
      this.drawerVisibility()
      removeBorder()
    })
  },

  methods: {
    removeBorder () {
      const border = document.querySelector(".v-navigation-drawer__border")
      if (border) border.style.display = "none"
    },

    drawerVisibility () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (this.drawer = false)
        case "sm":
          return (this.drawer = false)
        case "md":
          return (this.drawer = false)
        case "lg":
          return (this.drawer = true)
        case "xl":
          return (this.drawer = true)
      }
    },
  },
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
