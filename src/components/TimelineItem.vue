<script setup>
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import { isTimelineItemValid } from '@/validators'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  },
})

const options = [
  {
    value: 1,
    label: 'Coding',
  },
  {
    value: 2,
    label: 'Reading',
  },
  {
    value: 3,
    label: 'Training',
  },
]

const selectedActivityId = ref(1)
</script>

<template>
  <li class="relative flex flex-col px-4 py-10 border-t border-gray-200">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="options"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
