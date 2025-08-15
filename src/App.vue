<template>
  <v-app>
    <v-app-bar flat class="app-bar" elevation="0" rounded="lg">
      <template v-slot:prepend>
        <router-link
          to="/"
          class="text-decoration-none text-indigo-accent-4 font-weight-bold ml-2"
        >
          .rukkiecodes()
        </router-link>
      </template>

      <template v-slot:append>
        <div class="d-flex align-center ga-4">
          <router-link
            to="/"
            class="d-none d-sm-flex text-decoration-none text-indigo-accent-4 font-weight-bold"
            active-class="text-decoration-underline"
          >
            .rukkie()
          </router-link>
          <router-link
            to="/HealthTok"
            class="d-none d-sm-flex text-decoration-none text-indigo-accent-4 font-weight-bold"
            active-class="text-decoration-underline"
          >
            .work()
          </router-link>
          <router-link
            to="/kitchen"
            class="d-none d-sm-flex text-decoration-none text-indigo-accent-4 font-weight-bold"
            active-class="text-decoration-underline"
          >
            .kitchen()
          </router-link>
          <Contact/>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                icon
                v-bind="props"
                class="d-sm-none"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list nav class="pa-0" min-width="150">
              <v-list-item
                v-for="(item, index) in routes"
                :key="index"
                :value="index"
                :to="item.to"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-app-bar>

    <router-view/>
  </v-app>
</template>

<script setup>
import {ref} from "vue";

const routes = ref([
  {title: ".rukkie()", to: "/"},
  {title: ".work()", to: "/HealthTok"},
  {title: ".kitchen()", to: "/kitchen"},
]);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

* {
  font-family: "Fira Code", monospace !important;
}

.app-bar {
  background: #1212128a !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.8s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
