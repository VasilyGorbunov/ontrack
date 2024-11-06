<script setup>
import {nextTick, ref, watchPostEffect} from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'
import {isPageValid, validateTimelineItems,} from '@/validators'
import {MIDNIGHT_HOUR, PAGE_TIMELINE} from '@/constants'

const props = defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems,
  },
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid,
  },
})

const timelineItemRefs = ref([])

defineExpose({scrollToHour})

function scrollToHour(hour = null, isSmooth = true) {
  hour ??= new Date().getHours()

  const options = {behavior: isSmooth ? 'smooth' : 'instant'}

  if (hour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView(options)
  } else {
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}

watchPostEffect(async () => {

  if (props.currentPage === PAGE_TIMELINE) {
    await nextTick()
    scrollToHour(null, false)
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        ref="timelineItemRefs"
        :key="timelineItem.hour"
        v-for="timelineItem in timelineItems"
        :timeline-item="timelineItem"
        @scroll-to-hour="scrollToHour"
      />
    </ul>
  </div>
</template>
