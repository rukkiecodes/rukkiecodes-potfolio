<template>
  <v-card
    height="500"
    color="#22272E"
    class="rounded-xl rounded-r-sm-0 overflow-hidden"
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
                  <v-img src="https://lh3.googleusercontent.com/IbomUFjlPd5SpgWH2HHEVjzzHufHyb8AEXhbLBL_NhGh-Xm6wjMyPTMAMH85D1wQtcTspnm67iTn9U6sRYBkEmG3bD8dcW_kYTx6eVrY5VQ0x_nBR4QK36zmDNXzkk6aAadq8Bb4ZzvFMgaPAsekkQAOyAhi9Poav5RmV1zMKpFq6hfFx8ZYJrPI55uPigeRuMvjORGbnu7DiqHbGzI3w441i1keZDPQlRBHjNM1_cBpF2ITSCw5JTJ68aCZ5aDXs3ogLHcHjmqK2JZ7HiPCJAyw29o98qlNl3EIL1Ag9YIj6_sygpgg6kkkvFYNOV1pMvb7uiRj6hkMs7h_JfdTYkRPYKhkRhHjtzQ-EBtKIMbzkbmZC4jYyXX28Kp9hlJkLRLfQsVFz-3jlM0y3iEAzPYoCNE796ab6aHpjFneKPw9u9DduT8Cq9BqYgxHw4PhqHvf4VD0e4OvP9OY_UyAwGw8sAY6vsG10cjsSzpH55g2HAm8Gfes-BNOtDamJ7mwflXtx2jWZxWVsUg_6an005bEOQXlSmGdl5vdfvWkgnEXp8ktH2VuyPiMCwdBLDO9il4t5UMawD09vTiCwlDN8pqkKkYCoQZ8fFeyr28F0CHDH7tcr0rcDaXRtmhpUoH9oMeVyfYRRI9LJG3YPXfOfUGuFzW6ZDohcdrLl2GMnL9DFaDW6xwYzyHwjUNunzge98vH_bPySeVtOwT-V_LQGsjb0GqQ-gOKRuf8nzkz7VHdXmrJfOdY2u8gc2OzBP_vkYcaCTHhHKQSlXYSvyGnztrXoebklDfKXLxf1wyW9e-CQkEMDoRbB9THeftR6rEL24abSUolw8stibGlYtFkKVbLYVLUC9hDNeumL0l9GfsTj-jhltRubJC_i5VN67HGL-6xSqtsOhUHAxdKNibL5thVMea620D-3pUXAYhbIEVuxtdNfdQBLYkZZ14DrqMS8INh9D73AHg2SUyogPDYF7WgzWucQLkcBS_EUeHSPGumrLvG2Fp107NP_FruPlGiKjjojbcEciF83CeQwg=w522-h696-no?authuser=0" />
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
            floating
            color="#22272E"
          >
            <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-and-up" />
            <v-app-bar-title class="ml-0 pl-0 logo">Recent projects</v-app-bar-title>
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
                <v-list-item-title class="logo">
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
        title: 'BlueZone Finance',
        to: '/',
        icon: 'mdi-language-javascript',
        lang: 'Javascript',
        color: 'orange',
        avatar: require('../assets/img/bz.png'),
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'BlueZone Finance Admin',
        to: '/',
        icon: 'mdi-language-javascript',
        lang: 'Javascript',
        color: 'orange',
        avatar: require('../assets/img/bza.png'),
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'Oymo',
        to: '/',
        icon: 'mdi-vuejs',
        lang: 'View',
        color: 'teal',
        avatar: require('../assets/img/oymo.png'),
        caption: 'Oymo is a communication platform, which offers a comfortable and safe environment for men and women to find the love of their life.'
      },
      {
        title: 'Oymo waitlist',
        to: '/',
        icon: 'mdi-vuejs',
        lang: 'View',
        color: 'teal',
        avatar: require('../assets/img/oymowl.png'),
        caption: 'Find friends, and dates around you with just a swipe.'
      },
      {
        title: 'Maystro',
        to: '/',
        icon: 'mdi-vuejs',
        lang: 'View',
        color: 'teal',
        avatar: require('../assets/img/maystro.png'),
        caption: 'ESTABLISHED OR EMERGING, WE PROVIDE QUALITY OPPORTUNITIES WITHIN FILM, TELEVISION, THEATRE & COMMERCIALS.'
      },
      {
        title: 'Trustpaddi',
        to: '/',
        icon: 'mdi-vuejs',
        lang: 'View',
        color: 'teal',
        avatar: require('../assets/img/tp.png'),
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
      {
        title: 'Trustpaddi waitlist',
        to: '/',
        icon: 'mdi-vuejs',
        lang: 'View',
        color: 'teal',
        avatar: require('../assets/img/tp.png'),
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
    ],
  }),

  methods: {
    gotoGithub () {
      window.open("https://github.com/rukkiecodes");
    }
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