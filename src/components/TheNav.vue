<script setup>
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline'

import NavItem from './NavItem.vue'
import { ref } from 'vue'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon,
}

const currentPage = ref('timeline')
</script>

<template>
  <nav class="sticky bottom-0 bg-white z-10">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        :key="page"
        v-for="(icon, page) in navItems"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="currentPage = page"
      >
        <component :is="icon" class="size-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
