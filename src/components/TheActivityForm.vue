<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { nextTick, ref } from 'vue'
import { BUTTON_TYPE_PRIMARY } from '@/constants'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { isActivityValid } from '@/validators'
import { id } from '@/functions'

const emit = defineEmits({
  submit: isActivityValid,
})

const name = ref('')

async function submit() {
  emit('submit', {
    id: id(),
    name: name.value,
    secondsToComplete: 0,
  })
  name.value = ''

  await nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
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
      v-model="name"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="name.trim() === ''">
      <PlusIcon class="size-8" />
    </BaseButton>
  </form>
</template>
