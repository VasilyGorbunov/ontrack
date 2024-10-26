<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { BUTTON_TYPE_PRIMARY } from '@/constants'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { isActivityValid } from '@/validators'
import { ref } from 'vue'

const emit = defineEmits({
  submit: isActivityValid,
})

const activity = ref('')

function submit() {
  emit('submit', activity.value)
  activity.value = ''
}
</script>

<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[57px] flex gap-2 p-4 bg-white border-t"
  >
    <input
      type="text"
      class="w-full px-4 text-xl border rounded"
      placeholder="Activity name"
      v-model="activity"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="activity.trim() === ''">
      <PlusIcon class="size-8" />
    </BaseButton>
  </form>
</template>
