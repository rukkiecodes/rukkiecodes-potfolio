<template>
  <v-card
    height="500"
    color="#22272E"
    class="rounded-xl overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="0"
        lg="3"
      >
        <!-- :permanent="permanent" -->
        <v-navigation-drawer
          v-model="drawer"
          width="200"
          color="#22272E"
          absolute
        >
          <template v-slot:prepend>
            <v-card
              color="transparent"
              flat
            >
              <v-card-text class="d-flex flex-column justify-start px-0">
                <v-avatar
                  size="100"
                  class="mx-auto"
                >
                  <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663761613/IMG_21142_pljiqr.jpg" />
                </v-avatar>
                <v-card-text class="text-body-1 font-weight-bold">Terry Amagboro</v-card-text>
                <v-card-text class="text-body-2 font-weight-light mt-n8">rukkiecodes</v-card-text>
              </v-card-text>
              <v-card-actions class="mt-n6">
                <v-btn
                  color="#373E47"
                  small
                  depressed
                  block
                  class="text-capitalize rounded-lg"
                  @click="gotoGithub"
                >
                  View profile
                </v-btn>
              </v-card-actions>
              <span class="text-caption ml-2">
                <v-icon size="15 ">mdi-account-supervisor-outline</v-icon><span class="font-weight-bold mx-1">4</span>followers
              </span>
              <span class="text-caption ml-1"><span class="font-weight-bold mx-1">10</span>following</span>
              <br>
              <span class="text-caption ml-2">
                <v-icon size="15 ">mdi-map-marker-outline</v-icon>Nigeria
              </span>
              <br>
              <span class="text-caption ml-2">
                <v-icon size="15 ">mdi-link-variant</v-icon><a
                  class="white--text ml-1 text-decoration-none"
                  href="/"
                >https://rukkiecodes.com</a>
              </span>
              <br>
              <span class="text-caption ml-2">
                <v-icon size="15 ">mdi-twitter</v-icon><a
                  class="white--text ml-1 text-decoration-none"
                  href="https://twitter.com/rukkiecodes"
                >@rukkiecodes</a>
              </span>
            </v-card>
          </template>
        </v-navigation-drawer>
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <v-sheet
          width="100%"
          height="500"
          class="ma-0 pa-0"
          color="transparent"
        >
          <v-toolbar
            dense
            flat
            color="#22272E"
          >
            <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-and-up" />
            <v-app-bar-title class="ml-0 pl-0">Recent projects</v-app-bar-title>
            <v-spacer />
            <v-btn small depressed color="deep-purple accent-4" class="rounded-lg" to="/work">work()</v-btn>
          </v-toolbar>

          <v-sheet
            width="100%"
            height="452"
            color="transparent"
            style="overflow: hidden; overflow-y: auto;"
          >
            <v-list-item
              three-line
              v-for="(project, i) in projects"
              :key="i"
            >
              <v-list-item-avatar size="60">
                <v-img :src="project.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link
                    class="text-decoration-none"
                    :to="project.to"
                  >{{project.title}}</nuxt-link>
                </v-list-item-title>
                <v-list-item-subtitle v-if="project.caption != ''">
                  <span class="text-caption">{{ project.caption.slice(0, 100) }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span>
                    <v-icon
                      size="18"
                      :color="project.color"
                      v-text="project.icon"
                    /> {{ project.lang }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    projects: [
      {
        title: 'Oymo',
        to: '/oymo',
        icon: 'mdi-vuejs',
        lang: 'Vue',
        color: 'teal',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013445/oymo_x9mxvd.png',
        caption: 'Oymo is a communication platform, which offers a comfortable and safe environment for men and women to find the love of their life.'
      },
      {
        title: 'Oymo waitlist',
        to: '/oymoWaaitList',
        icon: 'mdi-vuejs',
        lang: 'Vue',
        color: 'teal',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013443/oymowl_uytscq.png',
        caption: 'Find friends, and dates around you with just a swipe.'
      },
      {
        title: 'Oymo backend',
        to: '/oymoWaaitList',
        icon: 'mdi-nodejs',
        lang: 'Node',
        color: 'green',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664014178/nodejs_n2acwe.png',
        caption: 'Find friends, and dates around you with just a swipe.'
      },
      {
        title: 'BlueZone Finance',
        to: '/blueZone',
        icon: 'mdi-language-javascript',
        lang: 'Javascript',
        color: 'orange',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013442/bz_u00lwc.png',
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'BlueZone Finance Admin',
        to: '/blueZoneAdmin',
        icon: 'mdi-language-javascript',
        lang: 'Javascript',
        color: 'orange',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013439/bza_mlmxsm.png',
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'BlueZone Finance backend',
        to: '/blueZone',
        icon: 'mdi-nodejs',
        lang: 'Node',
        color: 'green',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664014178/nodejs_n2acwe.png',
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'Maystro',
        to: '/maystro',
        icon: 'mdi-vuejs',
        lang: 'Vue',
        color: 'teal',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013444/maystro_df4df0.png',
        caption: 'ESTABLISHED OR EMERGING, WE PROVIDE QUALITY OPPORTUNITIES WITHIN FILM, TELEVISION, THEATRE & COMMERCIALS.'
      },
      {
        title: 'Trustpaddi',
        to: '/trustpaddi',
        icon: 'mdi-vuejs',
        lang: 'Vue',
        color: 'teal',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013444/tp_xjiihh.png',
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
      {
        title: 'Trustpaddi waitlist',
        to: '/trustpaddiWaitlist',
        icon: 'mdi-vuejs',
        lang: 'Vue',
        color: 'teal',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013443/tpwl_ke2h3h.png',
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
      {
        title: 'Trustpaddi backend',
        to: '/trustpaddi',
        icon: 'mdi-nodejs',
        lang: 'Node',
        color: 'green',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664014178/nodejs_n2acwe.png',
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
    ],
  }),

  mounted () {
    this.$nextTick(() => {
      this.removeBorder()
      this.drawerVisibility()
    })
  },

  methods: {
    gotoGithub () {
      window.open("https://github.com/rukkiecodes");
    },

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
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}

.repo-bar {
  background: #2d333b65 !important;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
}
</style>