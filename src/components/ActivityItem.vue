<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import {BUTTON_TYPE_DANGER} from '@/constants'
import {isActivityValid, isNumber, isUndefined} from '@/validators'
import {TrashIcon} from '@heroicons/vue/24/outline'
import ActivitySecondsToComplete from "@/components/ActivitySecondsToComplete.vue";
import {inject} from "vue";

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  }
})

const periodSelectOptions = inject('periodSelectOptions')

const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete: isUndefined,
})
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="size-8"/>
      </BaseButton>
      <span class="text-xl truncate">{{ activity.name }}</span>
    </div>

    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        @select="emit('setSecondsToComplete', $event || 0)"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
