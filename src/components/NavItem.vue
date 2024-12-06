<script setup>
import { currentPage, navigate } from '@/router.js'
import { isPageValid } from '@/validators.js'
import { computed } from 'vue'

const props = defineProps({
  page: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const classes = computed(() => [
  "flex flex-col capitalize items-center p-2 text-xs",
  { 'pointer-events-none bg-gray-200': props.page === currentPage.value }
])
</script>

<template>
  <li class="flex-1">
    <a :class="classes"
       :href="`#${page}`"
       @click="navigate(page)"
    >
      <slot></slot>
    </a>
  </li>
</template>
