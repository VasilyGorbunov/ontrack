<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import {isHourValid, isTimelineItemValid,} from '@/validators'
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
const setTimelineItemActivity = inject('setTimelineItemActivity')

const emit = defineEmits({
  scrollToHour: isHourValid
})

</script>

<template>
  <li class="relative flex flex-col px-4 py-10 border-t border-gray-200">
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour', timelineItem.hour)" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch
      :timeline-item="timelineItem"
    />
  </li>
</template>
