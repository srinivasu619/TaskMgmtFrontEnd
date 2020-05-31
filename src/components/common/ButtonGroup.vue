<template>
  <div class="inline-flex w-full">
    <button
      v-for="(button, index) in buttonArray"
      :key="index"
      :class="{ 'text-blue-600 border-blue-600': index === selectedIndex, 'rounded-l': index === 0 , 'rounded-r': index === buttonArray.length - 1}"
      class="w-1/4 font-semibold hover:text-blue-600 hover:border-blue-600 text-gray-400 my-1 py-1 px-4 h-8 border border-gray-400"
      @click="changeActiveState(index)"
    >{{button.name}}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    buttonArray: {
      type: Array
    },
    resetClicked: {
      type: Boolean
    },
  },
  data() {
    return {
      selectedIndex: -1
    };
  },
  watch: {
    resetClicked: function (val) {
      if(val === true)
        this.selectedIndex = -1;
    },
  },
  methods: {
    changeActiveState(index) {
      this.selectedIndex = index;
      this.$emit("btnGroupSelect", this.buttonArray[index].value);
    }
  }
};
</script>

<style>
.btn-blue {
  @apply text-blue-600 !important;
}
</style>
