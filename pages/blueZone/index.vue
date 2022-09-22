<template>
  <v-container style="margin-top: 40vh;">
    <v-card
      width="750"
      flat
      color="transparent"
      class="mb-16"
    >
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">work(<span class="deep-purple--text text--accent-4 font-weight-light">'BlueZone'</span>)</p>
      <p class="deep-purple--text text--accent-4">// Head of Project, backend</p>
      <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">Shaping Finance</p>
      <p class="blue-grey--text text--darken-1">
        Bluezone Finance offers a wide range of trading accounts to accommodate all levels of experience and trading preferences. We have you covered whether you're a scalper, day trader, EA user, or discretionary trader - We got you covered.
      </p>
    </v-card>

    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="5"
      >
        <v-card
          flat
          color="transparent"
        >
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">About Bluezone</p>
          <p class="blue-grey--text text--darken-1">
            Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.
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
          <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663794833/Screenshot_from_2022-09-21_22-13-17_mm6wsv.png" />
        </v-card>
      </v-col>
    </v-row>

    <v-row
      justify="space-between"
      align="start"
      class="mt-16"
    >
      <v-col cols="12">
        <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2 deep-purple--text text--accent-4">What Bluezone Solves</p>
      </v-col>

      <v-col cols="12">
        <v-timeline dense>
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            color="deep-purple accent-4"
          >
            <v-card>
              <v-card-title class="deep-purple--text text--accent-4">{{ timeline.title }}</v-card-title>
              <v-card-text
                v-for="(text, i) in timeline.text"
                :key="i"
                class="blue-grey--text text--darken-1"
              >{{ text }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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
          to="/oymoWaaitList"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >Oymo waitlist</nuxt-link>
        <v-spacer />
        <nuxt-link
          to="/blueZoneAdmin"
          class="deep-purple--text text--accent-4 text-decoration-none"
        >BlueZone Finance Admin</nuxt-link>
      </v-toolbar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    timelines: [
      {
        title: 'Copy Expert Traders',
        text: [
          "Copy trading Is one of our latest features that allows you to directly copy the positions taken by another trader. You decide the amount you wish to Trade with and simply copy everything they do automatically in real-time – when that trader makes a trade, your account will make that same trade as well.",
          "You do not need to have any input on the trades, and you get identical returns on each trade as your chosen trader. But by copying another trader, you could potentially make money based on their skills. There is no advanced knowledge of the financial market is required to take part."
        ]
      },
      {
        title: 'Bitcoin Mining',
        text: [
          "Bluezone Finance is one of the world's leading full-service blockchain technology company and one of the largest infrastructure providers in the crypto ecosystem.",
          "Bluezone Finance offers all interested parties the easiest way to mine the most liquid and scalable Bitcoin digital currency with an instant connection, 24/7 accessibility, and streamlined account management.",
          "Bitcoin mining is so competitive (algorithmically, in particular) that it can only be done profitably with the most progressive and next-generation ASICs (Application-Specific Integrated Circuits)."
        ]
      },
    ]
  })
}
</script>
