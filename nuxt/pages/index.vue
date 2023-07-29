<template>
	<div class="flex justify-center items-center h-screen px-4 sm:px-6 md:px-10 bg-slate-800">
		<video src="@/assets/videos/falling-stars.mp4" autoplay muted class="fixed left-0 top-0 h-screen w-full object-cover"></video>
        <div class="w-full max-w-sm z-10">
            <Header/>
			<div class="p-6 bg-sky-100/60 rounded-md">
				<p class="font-bold text-center mb-6">
					Coming Soon !
				</p>
				<div class="w-40 hidden">
					<div v-for="(product, index) in data" :key="index">
						<div>
							{{ product.id }}
						</div>
						<div>
							{{ product.name }}
						</div>
						<div>
							{{ product.slug }}
						</div>
						<div>
							{{ product.description }}
						</div>
						<div v-for="(category, index) in product.categories" :key="index">
							<div>
								{{ category.id }}
							</div>
							<div>
								{{ category.name }}
							</div>
							<div>
								{{ category.pivot }}
							</div>
						</div>
					</div>
				</div>
				<ButtonFramer/>
			</div>
			<Footer/>
        </div>
	</div>
</template>
<script setup lang="ts">

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch<Ref>(runtimeConfig.public.API_BASE_URL + 'products')

useSeoMeta({
	title: "[title]",
	description: "[description]",
	ogTitle: "[og:title]",
	ogDescription: "[og:description]",
	ogImage: "[og:image]",
	ogUrl: "[og:url]",
	twitterTitle: "[twitter:title]",
	twitterDescription: "[twitter:description]",
	twitterImage: "[twitter:image]",
	twitterCard: "summary",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
	],
});

</script>
