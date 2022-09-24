<template>
  <v-container style="margin-top: 40vh;">
    <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">work(<span class="deep-purple--text text--accent-4 font-weight-light">'selected'</span>)</p>
    <p class="blue-grey--text text--darken-1">// Some special projects explained in details.</p>

    <v-list-item
      three-line
      v-for="(project, i) in projects"
      :key="i"
    >
      <v-list-item-avatar :size="size">
        <v-img :src="project.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mb-md-n10 mb-lg-n15">
          <nuxt-link
            class="text-decoration-none deep-purple--text text--accent-4 font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2"
            :to="project.to"
          >{{project.title}}</nuxt-link>
        </v-list-item-title>
        <v-list-item-subtitle v-if="project.caption != ''" class="mt-md-n10 mt-lg-n15">
          <span class="text-body-1">{{ project.caption }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script>
export default {
  data: () => ({
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

  computed: {
      size () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 50
          case 'sm': return 100
          case 'md': return 150
          case 'lg': return 300
          case 'xl': return 300
        }
      },
    },
}
</script>

<style>
</style>