<template>
  <v-container style="margin-top: 40vh;">
    <v-card
      width="750"
      flat
      color="transparent"
      class="mb-16"
    >
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">work(<span class="deep-purple--text text--accent-4 font-weight-light">'TrustPaddi WL'</span>)</p>
      <p class="deep-purple--text text--accent-4">// Head of Project, backend and Frontend</p>
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">Safe Transactions</p>
      <p class="blue-grey--text text--darken-1">
        Enjoy safer Transactions, and faster deliveries with Trustpaddi
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
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">About TrustPaddi</p>
          <p class="blue-grey--text text--darken-1">
            TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.
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
          <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663826677/Screenshot_from_2022-09-22_07-04-19_efntcb.png" />
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
          to="/trustpaddi"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >Trustpaddi</nuxt-link>
        <v-spacer />
        <nuxt-link
          to="/oymo"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >Oymo</nuxt-link>
      </v-toolbar>
    </v-row>
  </v-container>
</template>
