<script setup>
import {XMarkIcon} from "@heroicons/vue/24/solid";
import BaseButton from "@/components/BaseButton.vue";
import {isNumberOrNull, isSelectValueValid, isUndefinedOrNull, validateSelectOptions} from "@/validators.js";
import {computed} from "vue";
import {BUTTON_TYPE_NEUTRAL} from "@/constants.js";
import {normalizeSelectValue} from "@/functions.js";

const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  },
  placeholder: {
    type: String,
    required: true
  },
  selected: [String, Number]
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}

</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="select(null)" :type="BUTTON_TYPE_NEUTRAL">
      <XMarkIcon class="h-8"/>
    </BaseButton>
    <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
            @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option v-for="{value, label} in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
