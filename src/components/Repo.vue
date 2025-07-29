<template>
  <v-card
    height="500"
    color="#22272E"
    rounded="lg"
    class="overflow-hidden"
  >
    <v-toolbar
      density="compact"
      flat
      color="#22272E"
    >
      <v-app-bar-title>Recent projects</v-app-bar-title>

      <v-spacer/>

      <v-btn
        to="/work"
        color="deep-purple accent-4"
        variant="flat"
        rounded="lg"
      >
        .work()
      </v-btn>
    </v-toolbar>

    <v-sheet
      height="450"
      color="transparent"
      class="pa-4 overflow-auto"
    >
      <v-card
        v-for="(project, index) in projects"
        :to="project.to"
        :key="index"
        class="mb-4 d-flex align-center ga-2 pa-2"
        elevation="0"
        color="transparent"
        rounded="lg"
      >
        <v-avatar size="50" class="mt-n2">
          <v-img :src="project?.prependAvatar"/>
        </v-avatar>

        <div class="d-flex flex-column">
          <v-card-title class="text-body-1 text-sm-h6">{{ project.title }}</v-card-title>
          <v-card-text class="text-body-2 text-sm-body-1 text-grey-lighten-1">{{ project.subtitle }}</v-card-text>
        </div>
      </v-card>
    </v-sheet>
  </v-card>
</template>

<script setup>
import {useAppStore} from "@/stores/app.js";

const {projects} = useAppStore()
</script>
