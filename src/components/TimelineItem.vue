<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import {
  isActivityValid,
  isNull,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions,
} from '@/validators'

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
  selectActivity(activity) {
    return isNull(activity) || isActivityValid(activity)
  },
})

function selectActivity(id) {
  emit(
    'selectActivity',
    props.activities.find(activity => activity.id === id) || null,
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
  </li>
</template>
