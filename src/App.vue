<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col pt-[64px]">
    <SiteHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
