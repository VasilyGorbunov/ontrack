<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { validateTimelineItems } from '@/validators'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
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
