<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'

defineProps({
  options: {
    type: Array,
    required: true,
    validator(options) {
      return options.every(
        ({ value, label }) =>
          typeof value === 'number' && typeof label === 'string',
      )
    },
  },
  placeholder: { type: String, required: true },
  selected: Number,
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton>
      <XMarkIcon class="size-8" />
    </BaseButton>
    <select class="w-full px-2 py-1 text-2xl truncate bg-gray-100 rounded">
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
