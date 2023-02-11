import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	root: "src",
	build: {
    outDir: resolve(__dirname, "dist"),
  },
	server: {
    port: 8080,
  },
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
	resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
		}
	}
})
