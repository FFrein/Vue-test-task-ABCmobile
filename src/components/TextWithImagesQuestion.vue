<template>
  <div class="TestBlock">
    <h2>{{ question.text }}</h2>
    <div class="image-options">
      <img 
        v-for="(image, index) in question.images" 
        :key="index" 
        :src="image.url" 
        :class="{ 'selected': selectedImage === image }"
        @click="selectImage(image)"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedImage: null
    };
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
      this.$emit('answer', image);
    }
  }
};
</script>

<style scoped>
  @import '../assets/list.css';
</style>
