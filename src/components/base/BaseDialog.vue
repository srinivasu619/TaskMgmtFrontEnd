<template>
  <div class="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-100 z-10 rounded overlay">
    <div class="rounded-md opacity-100 custom-dialog absolute" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "base-dialog",
  data() {
    return {};
  },
  props: {
    width: {
      type: Number
    },
    maxWidth: {
      type: Number
    },
    contentClass: {
      type: String
    }
  },
  computed: {
    styles() {
      let styleStr = "";
      if (this.width) styleStr = `width:${this.width}px;`;
      if (this.maxWidth) styleStr = `${styleStr}max-width:${this.maxWidth}px;`;
      return styleStr;
    }
  }
};
</script>
<style>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.custom-dialog {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>