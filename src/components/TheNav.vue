<script setup>
import { NAV_ITEMS } from '@/constants'
import NavItem from './NavItem.vue'
import { isPageValid } from '@/validators'

defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid,
  },
})

const emit = defineEmits({
  navigate: isPageValid,
})
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        :key="page"
        v-for="(icon, page) in NAV_ITEMS"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="size-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
