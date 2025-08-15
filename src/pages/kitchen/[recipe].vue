<template>
  <v-container style="margin-top: 40vh">
    <v-row v-if="recipe">
      <v-col cols="12">
        <v-card rounded="lg" class="pa-0 ma-0" color="transparent" flat>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">
            {{ recipe?.name }}
          </p>
          <p class="font-weight-bold text-h6 text-indigo-accent-4 mb-10">
            {{ recipe?.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="recipe">
      <v-col cols="12" md="6">
        <v-row class="mt-4">
          <v-col cols="12">
            <p>Installation</p>
            <CodeBlock
              lang="shell"
              :code="recipe?.installation"
              theme="vs-dark"
              height="220px"
            />
          </v-col>

          <v-col cols="12">
            <p>📂 firebase.ts</p>
            <CodeBlock
              lang="shell"
              :code="recipe?.code"
              theme="vs-dark"
              height="800px"
            />
          </v-col>

          <v-col cols="12">
            <p>🚀 Example Usage</p>
            <CodeBlock
              lang="shell"
              :code="recipe?.usage"
              theme="vs-dark"
              height="800px"
            />
          </v-col>

          <v-col cols="12">
            <p>⚙️ Configuration</p>
            <CodeBlock
              lang="shell"
              :code="recipe?.configuration"
              theme="vs-dark"
              height="500px"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-row class="mt-4">
          <v-col cols="12">
            <p>📖 Documentation</p>
            <MarkdownRenderer :content="recipe?.documentation" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {useKitchenStore} from "@/stores/kitchen.js";
import CodeBlock from "@/components/CodeBlock";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default {
  components: {CodeBlock, MarkdownRenderer},

  data: () => ({
    recipe: null,
  }),

  setup() {
    const {kitchenList} = useKitchenStore()

    return {
      kitchenList
    }
  },

  mounted() {
    const recipeName = this.$route.params?.recipe;
    const data = this.kitchenList.find((obj) => obj?.name == recipeName);
    this.recipe = data;
  },
}
</script>
