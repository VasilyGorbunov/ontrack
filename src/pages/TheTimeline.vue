<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { isTimelineItemValid } from '@/validators'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator(timelineItems) {
      return timelineItems.every(isTimelineItemValid)
    },
  },
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        :key="timelineItem.hour"
        v-for="timelineItem in timelineItems"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
