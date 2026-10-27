<template>
    <div
        class="w-full h-full flex flex-col justify-between p-[60px]"
        :style="{
            color: '#ffffff',
            backgroundColor: theme,
            backgroundImage: 'linear-gradient(135deg, #111827 0%, #0f172a 45%, #1a1416 100%)',
        }"
    >
        <div class="flex flex-col gap-10">
            <h1 class="m-0 text-[64px] font-normal leading-tight">
                {{ title }}
            </h1>
            <p
                v-if="description"
                class="m-0 max-w-[700px] text-[30px] leading-normal"
                style="display: block; line-clamp: 3; text-overflow: ellipsis;"
            >
                {{ description }}
            </p>
        </div>
        <div class="flex items-center justify-center gap-5 text-[24px]">
            <div
                class="w-[36px] h-[36px] rounded-full"
                :style="{ backgroundColor: '#222' }"
            />
            <span>{{ siteName }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    title?: string
    description?: string
    siteName?: string
    theme?: string
}>(), {
    title: "",
    description: "",
    siteName: "",
    theme: "#111827",
})
</script>
