<script setup>
import {NULLABLE_ACTIVITY} from '@/constants'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import {isActivityValid, isHourValid, isTimelineItemValid,} from '@/validators'
import TimelineStopwatch from './TimelineStopwatch.vue'
import {inject} from "vue";

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid,
  }
})

const activitySelectOptions = inject('activitySelectOptions')
const activities = inject('activities')

const emit = defineEmits({
  selectActivity: isActivityValid,
  scrollToHour: isHourValid
})

function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return (
    activities.find(activity => activity.id === id) || NULLABLE_ACTIVITY
  )
}


</script>

<template>
  <li class="relative flex flex-col px-4 py-10 border-t border-gray-200">
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour', timelineItem.hour)" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="selectActivity"
    />
    <TimelineStopwatch
      :timeline-item="timelineItem"
    />
  </li>
</template>
