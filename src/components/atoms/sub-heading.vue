<template lang="pug">
v-row(justify="center")
  a.subheading.mx-3(
    v-for="(item, i) in items"
    :key="i"
    :href="item.href"
    target="_blank"
  )
    | {{ item.text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type SubHeadingItem = {
  text: string
  href: string
}

export default defineComponent({
  name: 'SubHeading',

  props: {
    items: {
      type: Array as PropType<SubHeadingItem[]>,
      required: true,
    },
  },
})
</script>
