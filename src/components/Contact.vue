<template>
  <v-btn
    variant="flat"
    rounded="lg"
    color="indigo accent-4"
    size="small"
    @click="contactMe"
  >
    Contact me
  </v-btn>
</template>

<script setup>
const contactMe = () => {
  window.open('mailto:rukkiecodes@gmail.com')
}
</script>
