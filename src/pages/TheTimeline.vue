<script setup>
import TimelineItem from "@/components/TimelineItem.vue";
import {
  isActivityValid,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions,
  validateTimelineItems
} from "@/validators.js";

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isActivityValid(activity)].every(Boolean)
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem v-for="timelineItem in timelineItems"
                    :key="timelineItem.hour"
                    :timeline-item="timelineItem"
                    :activity-select-options="activitySelectOptions"
                    :activities="activities"
                    @select-activity="emit('setTimelineItemActivity', timelineItem, $event)"
      />
    </ul>
  </div>
</template>

<style scoped>

</style>
