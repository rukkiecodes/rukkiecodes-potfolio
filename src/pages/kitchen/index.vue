<template>
  <v-container style="margin-top: 40vh">
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" class="pa-0 ma-0" color="transparent" flat>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">
            Rukkiecodes Dev Pantry
          </p>
          <p class="font-weight-bold text-body-1 text-sm-h6 text-indigo-accent-4 mb-10">
            Stocked with my favorite code recipes, fresh, fast, and always ready to spoon.
            <br>
            Stirring up snippets I use daily. Grab a spoonful of copy-paste brilliance.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-img max-height="550" :src="projectData?.banner" rounded="lg"/>
      </v-col>
    </v-row>

    <v-row>
      <KitchenCards />
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
</script>
