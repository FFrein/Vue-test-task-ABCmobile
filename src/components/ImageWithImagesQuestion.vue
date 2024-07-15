<template>
  <div class="IWIQ TestBlock">
    <h2>{{ question.text }}</h2>
    <img :src="question.mainImage" alt="Main Image">
    <div class="divider"></div>
    <div class="image-options">
      <img 
        v-for="(image, index) in question.options" 
        :key="index" :src="image" 
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
  .divider {
    height: 2px;
    background-color: #F2F3F3;
    margin: 16px 0; /* Пример отступов */
  }
  .image-options {
    display: flex;
    justify-content: space-around;
    margin-top: 19px;
    flex-wrap: wrap;
  }
  .image-options img {
    width: 100px;
    cursor: pointer;
    width: 44px;
    height: 44px;
    margin: 4px;
  }

</style>
