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
        'rounded-md', 'text-serif', 'transition-all', 'font-bold',
        this.main
          ? ['bg-main', 'hover:bg-red-600', 'text-white', 'py-3', 'px-10']
          : ['text-sm', 'text-main', 'border', 'border-main', 'py-2', 'w-full', 'hover:bg-main', 'hover:text-white']
      ]
    }
  }
}
</script>

<style>

</style>