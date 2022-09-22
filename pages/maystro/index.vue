<template>
  <v-container style="margin-top: 40vh;">
  <v-card
      width="750"
      flat
      color="transparent"
      class="mb-16"
    >
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">work(<span class="deep-purple--text text--accent-4 font-weight-light">'Maystro'</span>)</p>
      <p class="deep-purple--text text--accent-4">// Head of Frontend</p>
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">Shaping sound</p>
      <p class="blue-grey--text text--darken-1">
        Uniting ideas, opprtunities, and talent
      </p>
    </v-card>

    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="5"
      >
        <v-card
          width="700"
          flat
          color="transparent"
        >
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">About Maystro</p>
          <p class="blue-grey--text text--darken-1">
            Established or emerging, we provide quality opportunities within film, televition, theater and commercials.
          </p>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="7"
      >
        <v-card
          rounded="lg"
          class="overflow-hidden ma-0 pa-0"
        >
          <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663800564/Screenshot_from_2022-09-21_23-48-03_rzxjmn.png" />
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
          to="/blueZoneAdmin"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >BlueZone Finance Admin</nuxt-link>
        <v-spacer />
        <nuxt-link
          to="/trustpaddi"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >Trustpaddi</nuxt-link>
      </v-toolbar>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
</style>