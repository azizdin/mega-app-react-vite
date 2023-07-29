// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			API_BASE_URL: process.env.API_BASE_URL,
		},
		private: {
			API_BASE_URL: process.env.API_BASE_URL,
		}
	},

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});