<template>
  <v-container style="margin-top: 40vh">
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" class="pa-0 ma-0" color="transparent" flat>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">
            work(<span class="text-indigo-accent-4 font-weight-light"
              >'{{ projectData?.title }}'</span
            >)
          </p>
          <p class="font-weight-bold text-h6 text-indigo-accent-4 mb-10">
            {{ projectData?.subtitle }}
          </p>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-img max-height="550" :src="projectData?.banner" rounded="lg" />
      </v-col>
    </v-row>

    <v-card max-width="750" flat color="transparent" class="mb-16">
      <p
        class="font-weight-bold text-h6 text-sm-h5 text-md-h4 text-lg-h3 mt-16 mb-5"
      >
        Overview
      </p>
      <p
        v-for="(line, index) in projectData?.overview"
        :key="index"
        class="text-grey-lighten-1"
      >
        {{ line }}<br /><br />
      </p>

      <p
        class="font-weight-bold text-h6 text-sm-h5 text-md-h4 text-lg-h3 mt-16 mb-5"
      >
        About {{ projectData?.title }}
      </p>
      <p
        v-for="(line, index) in projectData?.about"
        :key="index"
        class="text-grey-lighten-1"
      >
        {{ line }}<br /><br />
      </p>
    </v-card>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        :lg="projectData?.wide ? 6 : 3"
        v-for="(image, index) in projectData?.images"
        :key="index"
      >
        <v-card rounded="lg" class="pa-0 ma-0" flat color="transparent" :height="projectData?.wide ? 350 : null">
          <v-img min-height="550" :src="image" :cover="projectData?.wide" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAppStore } from "@/stores/app.js";

export default {
  data: () => ({
    projectData: null,
  }),

  setup() {
    const { projects } = useAppStore();
    return {
      projects,
    };
  },

  mounted() {
    const projectName = this.$route.params?.project;
    const project = this.projects.find((obj) => obj?.title == projectName);
    this.projectData = project;
  },
};
</script>
