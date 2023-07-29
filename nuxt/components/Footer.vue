<template>
    <footer class="relative text-center z-20">
        <div class="text-white p-6 font-semibold">
            Copyright <NuxtLink to="https://azzumaraydid.com" class="hover:px-3 hover:py-1 hover:mx-0.5 hover:bg-white hover:shadow hover:text-slate-800 text-sky-400 rounded-md transition-all">azzumaraydid.com</NuxtLink> {{ currentDate.getFullYear() }}
        </div>
    </footer>
</template>
<script setup lang="ts">

const currentDate = new Date

</script>