<script setup>
import { NULLABLE_ACTIVITY } from '@/constants'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import {
  isActivityValid,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions,
} from '@/validators'
import TimelineStopwatch from './TimelineStopwatch.vue'

const props = defineProps({
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
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({
  selectActivity: isActivityValid,
})

function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return (
    props.activities.find(activity => activity.id === id) || NULLABLE_ACTIVITY
  )
}
</script>

<template>
  <li class="relative flex flex-col px-4 py-10 border-t border-gray-200">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="selectActivity"
    />
    <TimelineStopwatch
      :seconds="timelineItem.activitySeconds"
      :hour="timelineItem.hour"
    />
  </li>
</template>
