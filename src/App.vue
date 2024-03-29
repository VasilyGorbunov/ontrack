<script setup>
import {computed, ref} from "vue";
import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE} from "@/constants.js";
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import TheTimeline from "@/pages/TheTimeline.vue";
import TheActivities from "@/pages/TheActivities.vue";
import TheProgress from "@/pages/TheProgress.vue";
import {
  generateActivities,
  generateActivitySelectOptions,
  generateTimelineItems,
  normalizePageHash
} from "@/functions.js";

const currentPage = ref(normalizePageHash())
const timelineItems = ref(generateTimelineItems())

const activities = ref(generateActivities())

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value));

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  timelineItems.value.forEach(timelineItem => {
    if(timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {
  activities.value.push(activity)
}

function setTimelineItemActivity(timelineItem, activity) {
  timelineItem.activityId = activity.id
}
</script>

<template>
  <TheHeader @navigate="goTo($event)"/>

  <main class="flex flex-grow flex-col">
    <TheTimeline
        v-show="currentPage === PAGE_TIMELINE"
        :timeline-items="timelineItems"
        :activity-select-options="activitySelectOptions"
        :activities="activities"
        @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
        v-show="currentPage === PAGE_ACTIVITIES"
        :activities="activities"
        @delete-activity="deleteActivity"
        @create-activity="createActivity"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
  </main>

  <TheNav
      @navigate="goTo($event)"
      :current-page="currentPage"
  />
</template>
