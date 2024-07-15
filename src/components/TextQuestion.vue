<template>
  <div class="TestBlock">
    <h2>{{ question.text }}</h2>
    <ul class="List">
      <li 
        class="element" 
        v-for="(option, index) in question.options" 
        :key="index"
        :class="{ 'selected': selectedOption === option }"
      >
        <input 
          class="custom-radio"
          type="radio" 
          :id="'option_' + index" 
          :value="option" 
          v-model="selectedOption"
        >
        <label :for="'option_' + index">{{ option }}</label>
      </li>
    </ul>
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
      selectedOption: null
    };
  },
  watch: {
    selectedOption(newVal) {
      this.$emit('answer', newVal);
    }
  }
};
</script>

<style scoped>
  @import '../assets/list.css';
</style>
