<template>
  <v-container style="margin-top: 40vh;">
  <v-card
      width="750"
      flat
      color="transparent"
      class="mb-16"
    >
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">work(<span class="deep-purple--text text--accent-4 font-weight-light">'Code block'</span>)</p>
      <p class="deep-purple--text text--accent-4">// Developer</p>
      <a href="https://rukkiescodeblock.netlify.app" class="deep-purple--text text--accent-4">// Code block Demo</a>
      <a href="https://github.com/rukkiecodes/code" class="deep-purple--text text--accent-4">// Github Repo</a>
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">Smart editor</p>
      <p class="blue-grey--text text--darken-1">
        Easy to use. Light-weight editor
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
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">About Code block</p>
          <p class="blue-grey--text text--darken-1">
            An easy editor for quick and neat code snippet
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
          <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1667346265/Screenshot_from_2022-11-02_00-39-45_b0arsw.png" />
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
          to="/tandom"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >Tandom editor</nuxt-link>
        <v-spacer />
        <nuxt-link
          to="/blueZone"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >BlueZone Finance</nuxt-link>
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