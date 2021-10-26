<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    main: {
      type: Boolean,
    },
  },
  
  data() {
    return {
      classes: [
        'rounded-md', 'text-serif', 'transition-all',
        this.main
          ? ['bg-main', 'text-white', 'py-2', 'px-5', 'lg:px-10', 'lg:py-3', 'transform', 'hover:scale-105', 'hover:shadow-lg']
          : ['text-sm', 'text-main', 'border', 'border-main', 'py-2', 'w-full', 'hover:bg-main', 'hover:text-white']
      ]
    }
  }
}
</script>

<style>

</style>