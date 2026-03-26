<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import { videos, getYouTubeEmbedUrl } from '@/data/mockData'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-videos.jpg'
import { vElementVisibility } from '@vueuse/components'
import { ref } from 'vue'

const isVisible = ref(new Array(videos.length).fill(false))
const onVisibility = (state: boolean, index: number) => {
  if (state) isVisible.value[index] = true
}
</script>

<template>
  <div>
    <PageBanner title="活動影片" subtitle="精彩活動影片紀錄，歡迎觀賞" :image="bannerImg" />

    <div class="page-section">
      <div class="container mx-auto">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(video, i) in videos"
            :key="video.id"
            v-element-visibility="(state: boolean) => onVisibility(state, i)"
            :class="[
              'overflow-hidden rounded-xl border bg-card shadow-sm card-hover transition-all duration-700 ease-out',
              isVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <div class="aspect-video">
              <iframe
                :src="getYouTubeEmbedUrl(video.youtubeUrl)"
                :title="video.title"
                class="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            <div class="p-4 border-t-2 border-[#ebbb1c]">
              <h3 class="font-bold text-card-foreground mb-1">{{ video.title }}</h3>
              <div class="flex items-center gap-1.5 text-xs text-[#ebbb1c]">
                <CalendarDays class="h-3 w-3" />
                <time>{{ video.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
