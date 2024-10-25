<script setup>
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import { isTimelineItemValid, validateSelectOptions } from '@/validators'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})

const selectedActivityId = ref(0)
</script>

<template>
  <li class="relative flex flex-col px-4 py-10 border-t border-gray-200">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
