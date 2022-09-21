<template>
    <v-img class="skillImage rounded-lg" src="https://res.cloudinary.com/rukkiecodes/image/upload/v1663761613/IMG_21142_pljiqr.jpg" />
</template>

<style scoped>
.skillImage {
  position: relative;
}

.skillImage::after {
  content: "";
  position: absolute;
  background: linear-gradient(90deg, transparent, #12121242, #121212);
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>