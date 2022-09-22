<template>
  <v-container style="margin-top: 40vh;">
    <v-card
      width="750"
      flat
      color="transparent"
      class="mb-16"
    >
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">work(<span class="deep-purple--text text--accent-4 font-weight-light">'Oymo waitlist'</span>)</p>
      <p class="deep-purple--text text--accent-4">// Head of Project, backend and Frontend</p>
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">Wait in line</p>
      <p class="blue-grey--text text--darken-1">
        Oymo is a cheap-to-use communication platform, easy to use, keeps users entertained, and allows users to meet beautiful people around their neighborhood and around the world 🌍💃💃🏻💃🏽
      </p>
    </v-card>

    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          width="700"
          flat
          color="transparent"
        >
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">About Oymo</p>
          <p class="blue-grey--text text--darken-1">
            Find friends, and dates around you with just a swipe.<br><br>
            Oymo is a communication platform, which offers a comfortable and safe environment for men and women to find the love of their life.
          </p>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="8"
      >
        <v-card
          rounded="lg"
          class="overflow-hidden ma-0 pa-0"
        >
          <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663794306/Screenshot_from_2022-09-21_22-04-26_bb4b4g.png" />
        </v-card>
      </v-col>
    </v-row>

    <v-row class="my-16">
      <v-col cols="12">
        <p class="blue-grey--text text--darken-1">// More...</p>
      </v-col>
      <v-toolbar
        color="transparent"
        dense
        flat
      >
        <nuxt-link
          to="/oymo"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >Oymo</nuxt-link>
        <v-spacer />
        <nuxt-link
          to="/blueZone"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >BlueZone Finance</nuxt-link>
      </v-toolbar>
    </v-row>
  </v-container>
</template>
