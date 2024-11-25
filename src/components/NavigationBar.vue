<script setup>
import { RouterLink, useRoute } from 'vue-router';
import Logo from "@/icons/Logo.vue"

const isActiveLink = (routePath) => {
  const router = useRoute();
  return router.path === routePath;
}

</script>
<template>
  <nav class="sticky top-0 bg-yellow-400 border-b border-white">
    <div class="">
      <div class="flex items-center justify-between h-20 mx-10 ">
        <RouterLink class="flex items-center space-x-3">
          <Logo />
              <p class="hidden text-2xl font-semibold text-white font-style lg:block md:block">SkyBrook Jobs</p>
        </RouterLink>
        <div class="space-x-3 nav">
          <RouterLink to="/"><span
              :class="`${isActiveLink('/') ? 'bg-black p-2 text-xl  rounded-md font-semibold' : 'text-xl '}`">Home</span>
          </RouterLink>
          <RouterLink to="/jobs"><span
              :class="`${isActiveLink('/jobs') ? 'bg-black p-2 text-xl  rounded-md font-semibold' : 'text-xl '}`">Jobs</span>
          </RouterLink>
          <RouterLink to="/jobs/add"><span
              :class="`${isActiveLink('/jobs/add') ? 'bg-black p-2 text-xl  rounded-md font-semibold' : 'text-xl '}`">Add
              Job</span></RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  color: white
}
</style>
