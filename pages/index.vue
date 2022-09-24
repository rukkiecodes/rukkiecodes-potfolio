<template>
  <v-container
    class="ma-0"
    fluid
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card
          color="transparent"
          class="d-flex justify-space-between align-center"
          width="100%"
          height="100vh"
          flat
        >
          <v-card-text class="text-center">
            <v-avatar size="150">
              <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663761613/IMG_21142_pljiqr.jpg" />
            </v-avatar>
            <v-card-text class="text-h4 font-weight-bold">Terry Amagboro</v-card-text>
            <span>Creative frontend developer, designer and illustrator.</span>
            <v-card-actions class="d-flex justify-space-between">
              <v-btn
                icon
                depressed
                @click="gotoFacebook"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                depressed
                @click="gotoTwitter"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                icon
                depressed
                @click="gotoGithub"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                icon
                depressed
                @click="gotoLinkedin"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row id="work">
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          color="transparent mx-0 ml-sm-5"
          flat
        >
          <v-card-title class="mx-0 px-0 text-h4">about(<span class="deep-purple--text text--accent-4">me</span>)<span class="ml-3">{</span></v-card-title>
          <v-row>
            <v-col cols="12">
              <v-btn
                @click="gotoResume"
                rounded
                depressed
                class="text-capitalize"
                color="deep-purple accent-4"
              >
                My Resume
                <v-icon
                  small
                  class="ml-2"
                >mdi-link-variant</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="11">
              <span class="blue-grey--text text--darken-1">
                <span class="deep-purple--text text--accent-4">return </span>`
                <span>Personally connected with the web development industry and information technology for many years.</span>
                <br>
                <br>
                <span>Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.</span>
                <br>
                <br>
                <span>Intersted in the entire frontend spectrum and working on ambirious projects with positive people.</span>`
              </span>
            </v-col>
          </v-row>
          <v-card-title class="mx-0 px-0 text-h4">}</v-card-title>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <Repo />
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="4"
      >
        <SkillsImage />
      </v-col>
      <v-col
        cols="12"
        sm="8"
      >
        <Skills />
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12">
        <v-card
          width="900"
          color="transparent"
          flat
        >
          <p>Thanks for checking my website!</p>
          <p class="blue-grey--text text--darken-1">// It's a work in progress so check back often!</p>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">Check out my <router-link
              to="/work"
              class="deep-purple--text text--accent-4"
              style="cursor: pointer;"
            >Selcted works</router-link> for more details.</p>
          <p>I am available for new projects and a coffee <span class="deep-purple--text text--accent-4">;)</span></p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Repo from "../components/Repo.vue";
import SkillsImage from "../components/SkillsImage.vue";
import Skills from "~/components/Skills.vue";
export default {
  name: "IndexPage",
  data: () => ({}),
  methods: {
    gotoFacebook () {
      window.open("https://www.facebook.com/Rukkiecodes");
    },
    gotoTwitter () {
      window.open("https://twitter.com/rukkiecodes");
    },
    gotoGithub () {
      window.open("https://github.com/rukkiecodes");
    },
    gotoLinkedin () {
      window.open("https://www.linkedin.com/in/rukkiecodes");
    },
    gotoResume () {
      window.open("https://docs.google.com/document/d/1VOFordnMhqUqPV4W18j3R9xEW6OAvtAF/edit?usp=sharing&ouid=118220414778609688788&rtpof=true&sd=true");
    }
  },

  components: { Repo, SkillsImage, Skills }
}
</script>