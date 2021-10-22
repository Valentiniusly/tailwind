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
          ? ['bg-main', 'text-white', 'py-3', 'px-10']
          : ['text-sm', 'text-main', 'border', 'border-main', 'py-2', 'w-full', 'hover:bg-main', 'hover:text-white']
      ]
    }
  }
}
</script>

<style>

</style>