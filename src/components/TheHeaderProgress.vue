<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
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
</template>
