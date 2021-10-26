<template>
  <article class="flex flex-col justify-between p-5 border">
    <div>
      <h3 class="text-main text-3xl leading-normal font-bold">05 Aug</h3>
      <p class="text-gray-700 mb-3">11:00-14:00</p>
      <p class="text-lg font-bold">{{text}}</p>
      <p class="text-gray-700">Onine master-class</p>
    </div>
    <Button>View more</Button>
  </article>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Formation of the organizational structure of the company in the face of uncertainty."
    }
  }
}
</script>

<style>

</style>