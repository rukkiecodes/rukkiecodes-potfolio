<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card
          color="transparent"
          class="d-flex justify-center align-center mx-auto"
          width="100%"
          height="90vh"
          flat
        >
          <v-card-text class="d-flex flex-column justify-center align-center mx-auto">
            <v-avatar size="200">
              <v-img src="@/assets/IMG_1136.jpg"/>
            </v-avatar>

            <v-card-text class="text-h4 font-weight-bold">Terry Amagboro</v-card-text>
            <span class="text-center">Creative frontend developer, designer and illustrator.</span>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row id="work">
      <v-col
        cols="12"
        sm="6"
      >
        <v-card color="transparent" class="mx-0 ml-sm-5" flat>
          <v-card-text class="mx-0 px-0 text-h4">
            about(<span>me</span>)<span class="ml-3">{</span>
          </v-card-text>

          <v-row>
            <v-col cols="12">
              <v-btn
                prepend-icon="mdi-link-variant"
                href="https://www.linkedin.com/in/rukkiecodes"
                target="_blank"
                color="indigo accent-4"
                class="mb-2 text-capitalize"
                rounded="pill"
              >
                My Resume
              </v-btn>
            </v-col>

            <v-col cols="1"/>

            <v-col cols="11">
              <span class="text-grey-lighten-1">`
                <span>Hi, I’m Terry<br>I am a passionate and highly adaptive software developer with over 11 years of experience spanning frontend development, backend systems, and mobile app development.</span>
                <br>
                <br>
                <span>I began my journey in software development as a frontend engineer, crafting seamless user experiences with Vue.js and Vuetify, leveraging material design principles for clean, responsive applications. As my skills matured, I ventured deeper into the backend world, building powerful APIs using REST, Socket.IO, and GraphQL, and managing data with Firebase and MongoDB.</span>
                <br>
                <br>
                <span>Over the years, I’ve evolved into a full-fledged product builder, combining development, UI/UX design, and problem-solving to deliver robust, scalable, and user-centric digital solutions.</span>`
              </span>
            </v-col>
          </v-row>
          <v-card-title class="mx-0 px-0 text-h4">}</v-card-title>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <Repo/>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col
        cols="12"
        sm="4"
      >
        <v-img
          src="@/assets/IMG_11362.jpg"
          rounded="lg"
        />
      </v-col>
      <v-col
        cols="12"
        sm="8"
      >
        <Skills/>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12">
        <v-card
          max-width="900"
          color="transparent"
          flat
        >
          <p>Thanks for checking my website!</p>
          <p class="text-blue-grey-darken-1">// It's a work in progress so check back often!</p>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">Check out my
            <router-link
              to="/work"
              class="text-indigo-accent-4"
            >
              Selected works
            </router-link>
            for more details.
          </p>
          <p>I am available for new projects and a coffee <span>😉</span></p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

