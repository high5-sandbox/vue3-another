<template lang="pug">
hello-world
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/organisms/hello-world.vue'

export default defineComponent({
  name: 'HomeSample',

  components: {
    HelloWorld,
  },

  data() {
    return {
      //
    }
  },
})
</script>