<script setup>
import {computed, provide, ref} from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'

import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import {
  generateActivities,
  generateActivitySelectOptions,
  generatePeriodSelectOptions,
  generateTimelineItems,
} from './functions'
import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE} from './constants'
import {currentPage, timelineRef} from "@/router.js";


const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value),
)



function deleteActivity(activity) {
  timelineItems.value.forEach(timelineItem => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {
  activities.value.push(activity)
}

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

function updateTimeLineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}

provide('updateTimeLineItemActivitySeconds', updateTimeLineItemActivitySeconds)
provide('activitySelectOptions', activitySelectOptions.value)
provide('periodSelectOptions', generatePeriodSelectOptions())
provide('timelineItems', timelineItems.value)
provide('setTimelineItemActivity', setTimelineItemActivity)
provide('setActivitySecondsToComplete', setActivitySecondsToComplete)
provide('createActivity', createActivity)
provide('deleteActivity', deleteActivity)

</script>

<template>
  <TheHeader/>
  <main class="flex flex-col flex-grow">
    <TheTimeline
      ref="timelineRef"
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
  </main>
  <TheNav/>
</template>
