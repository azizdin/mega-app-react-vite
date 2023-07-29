<template>
	<div class="flex justify-center font-bold sm:text-xl">
		<button @click="meteorite" class="relative group z-10">
			<span class="w-32 sm:w-44 h-12 sm:h-16 flex items-center justify-center before:absolute before:w-full before:h-full before:bg-sky-200 before:rounded-xl before:-translate-x-[0.15rem] before:translate-y-[0.15rem] before:hover:translate-x-0 before:hover:translate-y-0 before:transition-all after:absolute after:w-full after:h-full after:rounded-xl after:translate-x-[0.15rem] after:-translate-y-[0.15rem] after:hover:translate-x-0 after:hover:translate-y-0 after:transition-all after:border-2 after:border-black relative before:active:bg-sky-600">
				<span class="absolute translate-x-[0.15rem] -translate-y-[0.15rem] group-hover:-translate-x-0 group-hover:translate-y-0 transition-transform">
					★
				</span>
			</span>
		</button>
		<div class="fixed left-0 top-0 text-white h-screen w-full text-center grid grid-cols-6">
			<div v-for="index in 18" :key="index" class="relative h-full flex justify-center items-center">
				<div :class="'star'" v-if="display == index"></div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>

const timer = ref<any>(0)
const display = ref<number>(0)

function generateRandomInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function meteorite () {
	const random = generateRandomInteger(1, 19)
	
	display.value = random

	clearTimeout(timer.value)

	timer.value = setTimeout(() => {
		display.value = 0
	}, 2000);

}
</script>
<style scoped>
.star{
	position: absolute;
	left: 50%;
	top: 45%;
	width: 5px;
	height: 5px;
	background: white;
	border-radius: 50%;
	box-shadow: 0 1px 0 5px rgba(254, 254, 255, 0.2), 0 1px 0 7px rgba(245, 254, 255, 0.1), 0 1px 21px rgba(253, 253, 245, 1) ;
	animation: anim 3s ease-in-out infinite;
}
.star::before{
	content: '';
	width: 290px;
	height: 2px;
	position: absolute;
	top: 53%;
	transform: translateY(-45%);
	background: linear-gradient(90deg, rgba(255, 255, 255, 1), transparent);
}
@keyframes anim {
	0%{ transform: rotate(322deg) translateX(0); opacity: 1; }
	40%{ opacity: 0.8; }
	70%{ opacity: 1; }
	100%{ transform: rotate(322deg) translateX(-1400px); opacity: 0; }
}
</style>