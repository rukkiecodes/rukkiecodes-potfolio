<template>
  <v-col v-for="(item, index) in kitchenList" :key="index" cols="12" sm="6" md="6" lg="6">
    <router-link :to="`/kitchen/${item.name}`" class="text-h6 text-sm-h5 text-white font-weight-bold">{{ item.name }}</router-link>
    <p class="text-body-2 text-body-1 text-grey-lighten-1">{{ item.description }}</p>

    <v-row class="mt-4">
      <v-col cols="12">
        <CodeBlock
          lang="shell"
          :code="item.installation"
          theme="vs-dark"
          height="90px"
        />
      </v-col>

      <v-col cols="12">
        <CodeBlock
          lang="shell"
          :code="item.code"
          theme="vs-dark"
          height="400px"
        />
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
import {useKitchenStore} from "@/stores/kitchen.js";
import CodeBlock from "@/components/CodeBlock.vue";

const {kitchenList} = useKitchenStore()
</script>
