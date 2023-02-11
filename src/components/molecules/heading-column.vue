<template lang="pug">
v-col.mb-5(cols="12")
  headline(:text="headlineText")
  sub-heading(:items="subHeadingItems")
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Headline from '@/components/atoms/headline.vue'
import SubHeading, { SubHeadingItem } from '@/components/atoms/sub-heading.vue'

export default defineComponent({
  name: 'HeadingColumn',

  components: {
    Headline,
    SubHeading,
  },

  props: {
    headlineText: {
      type: String,
      required: true,
    },
    subHeadingItems: {
      type: Array as PropType<SubHeadingItem[]>,
      required: true,
    },
  },
})
</script>
