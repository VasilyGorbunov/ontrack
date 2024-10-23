<script setup>
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline'
import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from '../constants'
import NavItem from './NavItem.vue'

defineProps(['currentPage'])

const emit = defineEmits(['navigate'])

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
}



</script>

<template>
  <nav class="sticky bottom-0 bg-white z-10">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        :key="page"
        v-for="(icon, page) in navItems"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="size-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
