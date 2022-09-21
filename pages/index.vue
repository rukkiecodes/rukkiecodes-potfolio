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
              <v-img src="https://lh3.googleusercontent.com/IbomUFjlPd5SpgWH2HHEVjzzHufHyb8AEXhbLBL_NhGh-Xm6wjMyPTMAMH85D1wQtcTspnm67iTn9U6sRYBkEmG3bD8dcW_kYTx6eVrY5VQ0x_nBR4QK36zmDNXzkk6aAadq8Bb4ZzvFMgaPAsekkQAOyAhi9Poav5RmV1zMKpFq6hfFx8ZYJrPI55uPigeRuMvjORGbnu7DiqHbGzI3w441i1keZDPQlRBHjNM1_cBpF2ITSCw5JTJ68aCZ5aDXs3ogLHcHjmqK2JZ7HiPCJAyw29o98qlNl3EIL1Ag9YIj6_sygpgg6kkkvFYNOV1pMvb7uiRj6hkMs7h_JfdTYkRPYKhkRhHjtzQ-EBtKIMbzkbmZC4jYyXX28Kp9hlJkLRLfQsVFz-3jlM0y3iEAzPYoCNE796ab6aHpjFneKPw9u9DduT8Cq9BqYgxHw4PhqHvf4VD0e4OvP9OY_UyAwGw8sAY6vsG10cjsSzpH55g2HAm8Gfes-BNOtDamJ7mwflXtx2jWZxWVsUg_6an005bEOQXlSmGdl5vdfvWkgnEXp8ktH2VuyPiMCwdBLDO9il4t5UMawD09vTiCwlDN8pqkKkYCoQZ8fFeyr28F0CHDH7tcr0rcDaXRtmhpUoH9oMeVyfYRRI9LJG3YPXfOfUGuFzW6ZDohcdrLl2GMnL9DFaDW6xwYzyHwjUNunzge98vH_bPySeVtOwT-V_LQGsjb0GqQ-gOKRuf8nzkz7VHdXmrJfOdY2u8gc2OzBP_vkYcaCTHhHKQSlXYSvyGnztrXoebklDfKXLxf1wyW9e-CQkEMDoRbB9THeftR6rEL24abSUolw8stibGlYtFkKVbLYVLUC9hDNeumL0l9GfsTj-jhltRubJC_i5VN67HGL-6xSqtsOhUHAxdKNibL5thVMea620D-3pUXAYhbIEVuxtdNfdQBLYkZZ14DrqMS8INh9D73AHg2SUyogPDYF7WgzWucQLkcBS_EUeHSPGumrLvG2Fp107NP_FruPlGiKjjojbcEciF83CeQwg=w522-h696-no?authuser=0" />
            </v-avatar>
            <v-card-text class="logo text-h4 font-weight-bold">Terry Amagboro</v-card-text>
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
          <v-card-title class="logo mx-0 px-0 text-h4">about(<span class="deep-purple--text text--accent-4">me</span>)<span class="ml-3">{</span></v-card-title>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="11">
              <span class="logo blue-grey--text text--darken-1">
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
          <v-card-title class="logo mx-0 px-0 text-h4">}</v-card-title>
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

    <v-row class="mt-15">
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

    <v-container class="mt-15">
      <v-row>
        <v-col cols="12">
          <v-card width="500" color="transparent" flat>
            <p class="logo">Thanks for checking my website!</p>
            <p class="logo blue-grey--text text--darken-1">// It's a work in progress so check back often!</p>
            <p
              class="logo font-weight-bold"
              style="font-size: 3rem;"
            >Check out my <span class="deep-purple--text text--accent-4" @click="gotoWork" style="cursor: pointer;">Selcted works</span> for more details.</p>
            <p class="logo">I am available for new projects and a coffee <span class="deep-purple--text text--accent-4">;)</span></p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
      window.open("https://www.linkedin.com/in/terry-amagboro-004830197");
    },
    gotoWork () {
      document.getElementById("work").scrollIntoView(false)
    }
  },

  components: { Repo, SkillsImage, Skills }
}
</script>