<script setup>
import ActivityItem from "@/components/ActivityItem.vue";
import {isActivityValid, validateActivities} from "@/validators.js";
import BaseButton from "@/components/BaseButton.vue";
import {PlusIcon} from '@heroicons/vue/24/outline'
import {BUTTON_TYPE_PRIMARY} from "@/constants.js";

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
})

const newActivity = ''
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
          v-for="activity in activities"
          :key="activity"
          :activity="activity"
          @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
          @submit.prevent="emit('createActivity', newActivity)"
    >
      <input type="text"
             :value="newActivity"
             @input="newActivity = $event.target.value"
             class="w-full rounded border px-4 text-xl"
             placeholder="Activity name"
      >
      <BaseButton :type="BUTTON_TYPE_PRIMARY">
        <PlusIcon class="h-8"/>
      </BaseButton>
    </form>
  </div>
</template>


