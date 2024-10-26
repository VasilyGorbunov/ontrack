<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import {
  isNumberOrNull,
  isUndefinedOrNull,
  validateSelectOptions,
} from '@/validators'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '@/constants'

const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
  placeholder: { type: String, required: true },
  selected: Number,
})

const emit = defineEmits({
  select: isNumberOrNull,
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>

<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="emit('select', null)">
      <XMarkIcon class="size-8" />
    </BaseButton>
    <select
      class="w-full px-2 py-1 text-2xl truncate bg-gray-100 rounded"
      @change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :value="value"
        :key="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
