<template>
  <div>
    <Navbar />
    <section class="container mx-auto">
      <p class="uppercase text-center mb-3">Our events</p>
      <h1 class="text-center font-bold text-5xl mb-14">Lectures, workshops & master-classes</h1>
      <EventFilter />
      <EventsList />
    </section>
    <section class="relative py-32 pb-44 bg-red-100">
      <p class="uppercase mx-auto text-center mb-3">Don’t miss anything</p>
      <h2 class="text-center text-5xl font-bold w-3/5 mx-auto mb-14">Subscribe to the Createx School announcements</h2>
      <div class="flex justify-between w-2/5 gap-7 mx-auto">
        <input class="p-3 flex-1 border" placeholder="Your working email" type="text">
        <Button main>Subscribe</Button>
      </div>
      <BgSvg class="absolute right-0 bottom-0" />
      <BgSvg class="absolute left-0 bottom-0" />
    </section>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>
