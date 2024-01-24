<script setup>

import BaseSelect from "@/components/BaseSelect.vue";
import {isActivityValid, isTimelineItemValid, validateActivities, validateSelectOptions} from "@/validators.js";
import TimelineHour from "@/components/TimelineHour.vue";

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
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
  selectActivity: isActivityValid
})

function selectActivity(id) {
  emit('selectActivity', props.activities.find(activity => activity.id === id))
}

</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
  >
    <TimelineHour :hour="timelineItem.hour"/>
    <BaseSelect
        :options="activitySelectOptions"
        placeholder="Rest"
        :selected="timelineItem.activityId"
        @select="selectActivity"
    />
  </li>
</template>

