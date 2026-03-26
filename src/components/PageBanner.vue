<script setup lang="ts">
import { vElementVisibility } from '@vueuse/components'
import { ref } from 'vue'

defineProps<{
  title: string
  subtitle?: string
  image: string
}>()

const isVisible = ref(false)
const onVisibility = (state: boolean) => {
  if (state && !isVisible.value) {
    isVisible.value = true
  }
}
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img :src="image" :alt="title" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
    </div>
    <div class="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center">
      <div
        v-element-visibility="onVisibility"
        :class="[
          'transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        ]"
      >
        <h1 class="text-3xl md:text-5xl font-black text-primary-foreground tracking-wide">{{ title }}</h1>
        <p v-if="subtitle" class="mt-3 text-primary-foreground/80 text-lg">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>
