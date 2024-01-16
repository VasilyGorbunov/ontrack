<script setup>
import BaseButton from "@/components/BaseButton.vue";
import {PlusIcon} from '@heroicons/vue/24/outline'
import {BUTTON_TYPE_PRIMARY} from "@/constants.js";
import {isActivityValid} from "@/validators.js";

const emit = defineEmits({
  submit: isActivityValid
})

let activity = ''

function submit() {
  emit('submit', activity)
}

</script>

<template>
  <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
        @submit.prevent="submit"
  >
    <input type="text"
           :value="activity"
           @input="activity = $event.target.value"
           class="w-full rounded border px-4 text-xl"
           placeholder="Activity name"
    >
    <BaseButton :type="BUTTON_TYPE_PRIMARY">
      <PlusIcon class="h-8"/>
    </BaseButton>
  </form>
</template>

