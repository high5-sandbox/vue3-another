<template lang="pug">
h2.headline.font-weight-bold.mb-5
  | {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeadLine',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>
