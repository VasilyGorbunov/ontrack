<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between p-3 bg-white border-b"
  >
    <TheLogo  />
    <TheHeaderProgress />
  </header>
</template>
