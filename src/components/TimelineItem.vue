<script setup>

import BaseSelect from "@/components/BaseSelect.vue";
import {isTimelineItemValid, validateSelectOptions} from "@/validators.js";
import {ref} from "vue";
import TimelineHour from "@/components/TimelineHour.vue";

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const selectActivityId = ref(null)

</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
  >
    <TimelineHour :hour="timelineItem.hour"/>
    <BaseSelect
        :options="activitySelectOptions"
        placeholder="Rest"
        :selected="selectActivityId"
        @select="selectActivityId = $event"
    />
  </li>
</template>

