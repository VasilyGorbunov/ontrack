<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'

import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import {
  generateActivitySelectOptions,
  generateTimelineItems,
  normalizePageHash,
} from './functions'
import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES } from './constants'

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}

const timelineItems = generateTimelineItems()

const activities = ['Coding', 'Reading', 'Training']

const activitySelectOptions = generateActivitySelectOptions(activities)
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
