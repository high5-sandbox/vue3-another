<template lang="pug">
v-container
  v-row.text-center
    v-col(cols="12")
      v-img.my-3(
        :src="logo"
          contain
          height="200"
        )

      v-col.mb-4
        h1.display-2.font-weight-bold.mb-3
          | ようこそ日本へ

        h4 Vite Preview

        p.subheading.font-weight-regular
          | For help and collaboration with other Vuetify developers,
          br
          | please join our online
          a(
            href="https://community.vuetifyjs.com"
            target="_blank"
          ) Discord Community


      heading-column(
        headline-text="What's next?"
        :sub-heading-items="whatsNext"
      )

      heading-column(
        headline-text="Important Links"
        :sub-heading-items="importantLinks"
      )

      heading-column(
        headline-text="Ecosystem"
        :sub-heading-items="ecosystem"
      )
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HeadingColumn from '@/components/molecules/heading-column.vue'

// Logo
import logo from '@/assets/logo.svg'

export default defineComponent({
  name: 'HelloWorld',

  components: {
    HeadingColumn,
  },

  data() {
    return {
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      logo,
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Roadmap',
          href: 'https://vuetifyjs.com/en/introduction/roadmap/',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }
  },
})
</script>
