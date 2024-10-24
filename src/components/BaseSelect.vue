<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { validateSelectOptions } from '@/validators'

defineProps({
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
  placeholder: { type: String, required: true },
  selected: Number,
})

const emit = defineEmits({
  select(value) {
    return typeof value === 'number'
  },
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="size-8" />
    </BaseButton>
    <select
      class="w-full px-2 py-1 text-2xl truncate bg-gray-100 rounded"
      @change="emit('select', +$event.target.value)"
    >
      <option selected disabled value="">{{ placeholder }}</option>
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
