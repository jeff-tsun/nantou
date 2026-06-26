<script setup lang="ts">
import { CalendarDays, Video, Image, AlertCircle, RefreshCw } from 'lucide-vue-next'
import { gallery, getYouTubeEmbedUrl } from '@/data/gallery'
import type { PhotoItem } from '@/data/gallery'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-gallery.jpg'
import { vElementVisibility } from '@vueuse/components'
import { ref, onMounted } from 'vue'

const activeTab = ref<'video' | 'photo'>('video')

const isVideoVisible = ref(new Array(gallery.length).fill(false))
const onVideoVisibility = (state: boolean, index: number) => {
  if (state) isVideoVisible.value[index] = true
}

// 串接 Google Photos API 狀態
const dynamicPhotos = ref<PhotoItem[]>([])
const isLoadingPhotos = ref(false)
const hasPhotoError = ref(false)

const isPhotoVisible = ref<boolean[]>([])
const onPhotoVisibility = (state: boolean, index: number) => {
  if (state) isPhotoVisible.value[index] = true
}

// 追蹤個別圖片是否載入失敗 (例如 Google Drive 權限被擋)
const imageLoadErrors = ref<Record<number, boolean>>({})

const fetchPhotos = async () => {
  isLoadingPhotos.value = true
  hasPhotoError.value = false
  try {
    const res = await fetch('https://script.google.com/macros/s/AKfycbyD3D5ruyzVYld8CPY_SYPph5HJCtvKSlUSzHNNmNuZ011aIXhWfpFJmCMMUhOSxPTI/exec')
    const data = await res.json()
    if (data.success && Array.isArray(data.photos)) {
      dynamicPhotos.value = data.photos
      isPhotoVisible.value = new Array(data.photos.length).fill(false)
    } else {
      hasPhotoError.value = true
    }
  } catch (err) {
    console.error('Failed to fetch photos:', err)
    hasPhotoError.value = true
  } finally {
    isLoadingPhotos.value = false
  }
}

onMounted(() => {
  fetchPhotos()
})
</script>

<template>
  <div>
    <PageBanner title="活動紀錄" subtitle="精彩活動影片/照片紀錄，歡迎觀賞" :image="bannerImg" />

    <div class="page-section">
      <div class="container mx-auto">
        <!-- Tabs Section -->
        <div class="flex justify-center gap-4 mb-10">
          <button
            @click="activeTab = 'video'"
            :class="[
              'inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold border transition-all duration-300 shadow-sm',
              activeTab === 'video'
                ? 'bg-[#ebbb1c]/10 text-[#ebbb1c] border-[#ebbb1c]'
                : 'bg-white text-muted-foreground border-gray-200 hover:bg-gray-50 hover:text-foreground'
            ]"
          >
            <Video class="h-4.5 w-4.5" />
            影片紀錄
          </button>
          <button
            @click="activeTab = 'photo'"
            :class="[
              'inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold border transition-all duration-300 shadow-sm',
              activeTab === 'photo'
                ? 'bg-[#ebbb1c]/10 text-[#ebbb1c] border-[#ebbb1c]'
                : 'bg-white text-muted-foreground border-gray-200 hover:bg-gray-50 hover:text-foreground'
            ]"
          >
            <Image class="h-4.5 w-4.5" />
            照片紀錄
          </button>
        </div>

        <!-- Videos Tab -->
        <div v-if="activeTab === 'video'">
          <!-- Empty State -->
          <div v-if="gallery.length === 0" class="text-center py-12 text-muted-foreground">
            <Video class="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p class="font-semibold text-lg">暫無影片紀錄</p>
            <p class="text-sm text-gray-400">目前沒有影片紀錄，請稍後再試。</p>
          </div>

          <!-- Video Grid List -->
          <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(item, i) in gallery"
              :key="item.id"
              v-element-visibility="(state: boolean) => onVideoVisibility(state, i)"
              :class="[
                'overflow-hidden rounded-xl border bg-card shadow-sm card-hover transition-all duration-700 ease-out',
                isVideoVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              ]"
              :style="{ transitionDelay: `${i * 100}ms` }"
            >
              <div class="aspect-video">
                <iframe
                  :src="getYouTubeEmbedUrl(item.youtubeUrl)"
                  :title="item.title"
                  class="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              </div>
              <div class="p-4 border-t-2 border-[#ebbb1c]">
                <h3 class="font-bold text-card-foreground mb-1">{{ item.title }}</h3>
                <div class="flex items-center gap-1.5 text-xs text-[#ebbb1c]">
                  <CalendarDays class="h-3 w-3" />
                  <time>{{ item.date }}</time>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Photos Tab -->
        <div v-else-if="activeTab === 'photo'">
          <!-- Loading State (骨架屏) -->
          <div v-if="isLoadingPhotos" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="n in 6"
              :key="n"
              class="overflow-hidden rounded-xl border bg-card shadow-sm animate-pulse"
            >
              <div class="aspect-video bg-gray-200"></div>
              <div class="p-4 space-y-3">
                <div class="h-5 bg-gray-200 rounded w-5/6"></div>
                <div class="flex items-center gap-1.5">
                  <div class="h-3 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Error State -->
          <div v-else-if="hasPhotoError" class="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
            <AlertCircle class="h-12 w-12 text-red-500 mb-4 animate-bounce" />
            <p class="mb-2 font-bold text-lg text-foreground">照片載入失敗</p>
            <p class="text-sm mb-6 max-w-xs text-muted-foreground">可能是網路連線不穩或 Google API 配額限制，請稍後再試。</p>
            <button
              @click="fetchPhotos"
              class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-50 text-sm font-semibold transition-all shadow-sm text-foreground bg-white"
            >
              <RefreshCw class="h-4 w-4" />
              重新整理
            </button>
          </div>

          <!-- Empty State -->
          <div v-else-if="dynamicPhotos.length === 0" class="text-center py-12 text-muted-foreground">
            <Image class="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p class="font-semibold text-lg">暫無照片紀錄</p>
            <p class="text-sm text-gray-400">目前相簿中沒有照片，請稍後再試。</p>
          </div>

          <!-- Photo Grid List -->
          <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(item, i) in dynamicPhotos"
              :key="item.id"
              v-element-visibility="(state: boolean) => onPhotoVisibility(state, i)"
              :class="[
                'overflow-hidden rounded-xl border bg-card shadow-sm card-hover transition-all duration-700 ease-out',
                isPhotoVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              ]"
              :style="{ transitionDelay: `${i * 100}ms` }"
            >
              <div class="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center relative">
                <img
                  v-if="!imageLoadErrors[item.id]"
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  @error="imageLoadErrors[item.id] = true"
                />
                <div v-else class="flex flex-col items-center justify-center p-4 text-muted-foreground w-full h-full">
                  <Image class="h-8 w-8 mb-1.5 text-gray-400" />
                  <span class="text-xs text-gray-400">無法顯示照片 (請確認共用權限)</span>
                </div>
              </div>
              <div class="p-4 border-t-2 border-[#ebbb1c]">
                <h3 class="font-bold text-card-foreground mb-1">{{ item.title }}</h3>
                <div class="flex items-center gap-1.5 text-xs text-[#ebbb1c]">
                  <CalendarDays class="h-3 w-3" />
                  <time>{{ item.date }}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


