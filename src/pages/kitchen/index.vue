<template>
  <v-container style="margin-top: 40vh">
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" class="pa-0 ma-0" color="transparent" flat>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">
            Welcome to my Kitchen
          </p>
          <p class="font-weight-bold text-body-1 text-sm-h6 text-indigo-accent-4 mb-10">
            the place where I keep my favorite code recipes.

            <p class="text-grey-lighten-1 text-body-2">
              <br>
              Just like a real kitchen, it’s stocked with ingredients I reach for often: reusable snippets, tested patterns, and little tricks that save me from reinventing the wheel.
              <br>
              <br>
              Some recipes are spicy 🌶, some are sweet 🍭, but they all have one thing in common: they work.
              This isn’t just for me. If you find something useful, grab a plate, copy it, and enjoy. After all, good food (and good code) is best when shared.
              <br>
              <br>
              Pull up a chair, grab a spoon, and dig in. 🚀
            </p>
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <KitchenCards />
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
</script>
