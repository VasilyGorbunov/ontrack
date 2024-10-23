<script>
export default {
  inheritAttrs: false
}
</script>

<template>
  <li class="flex-1">
    <a class="flex flex-col capitalize items-center p-2 text-xs" v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>
