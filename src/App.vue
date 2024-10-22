<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between p-3 bg-white border-b"
  >
    <a href="#">
      <img src="./assets/img/logo.png" alt="Logo" class="h-9" />
    </a>
    <a href="#" class="text-sm">
      <div v-if="true" class="flex items-center gap-1">
        Day complete
        <CheckCircleIcon class="text-green-500 h-7" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress <span class="font-mono">20%</span></div>
        <div class="bg-red-500 rounded-full size-3"></div>
      </div>
    </a>
  </header>
  <main></main>
</template>
