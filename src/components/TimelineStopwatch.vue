<script setup>
import BaseButton from "@/components/BaseButton.vue";
import {BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING} from "@/constants.js";
import {ArrowPathIcon, PauseIcon, PlayIcon} from "@heroicons/vue/24/outline";
import {isNumber} from "@/validators.js";
import {formatSeconds} from "../functions.js";

defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber
  }
})


</script>

<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER">
      <ArrowPathIcon class="h-8"/>
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">{{ formatSeconds(seconds) }}</div>
    <BaseButton :type="BUTTON_TYPE_WARNING">
      <PlayIcon class="h-8"/>
    </BaseButton>
    <BaseButton :type="BUTTON_TYPE_SUCCESS">
      <PauseIcon class="h-8"/>
    </BaseButton>
  </div>
</template>


