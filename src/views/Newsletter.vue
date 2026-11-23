<script setup lang="ts">
import { ref, computed, shallowRef } from 'vue'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Virtual, Keyboard, Zoom } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/zoom'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-newsletter.jpg'

interface NewsletterIssue {
  id: number
  label: string
  pages: { src: string; alt: string }[]
}

const imageNames64Pages = [
  '封面',
  '封面裡',
  ...Array.from({ length: 64 }, (_, i) => (i + 1).toString().padStart(2, '0')),
  '封底裡',
  '封底'
]

const imageNames142 = Array.from({ length: 51 }, (_, i) => (i + 1).toString().padStart(2, '0'))

const imageNames144 = [
  '封面',
  '封面裡',
  ...Array.from({ length: 144 }, (_, i) => (i + 1).toString().padStart(3, '0')),
  '封底裡',
  '封底'
]

const pages146 = imageNames64Pages.map((name) => ({
  src: new URL(`../assets/newsletter/146/${name}.jpg`, import.meta.url).href,
  alt: `第146期 ${name.match(/^\d+$/) ? '第 ' + name + ' 頁' : name}`
}))

const pages145 = imageNames64Pages.map((name) => ({
  src: new URL(`../assets/newsletter/145/${name}.jpg`, import.meta.url).href,
  alt: `第145期 ${name.match(/^\d+$/) ? '第 ' + name + ' 頁' : name}`
}))

const pages144 = imageNames144.map((name) => ({
  src: new URL(`../assets/newsletter/144/${name}.jpg`, import.meta.url).href,
  alt: `第144期 ${name.match(/^\d+$/) ? '第 ' + name + ' 頁' : name}`
}))

const pages141 = imageNames64Pages.map((name) => ({
  src: new URL(`../assets/newsletter/141/${name}.jpg`, import.meta.url).href,
  alt: `第141期 ${name.match(/^\d+$/) ? '第 ' + name + ' 頁' : name}`
}))

const pages142 = imageNames142.map((name) => ({
  src: new URL(`../assets/newsletter/142/${name}.jpeg`, import.meta.url).href,
  alt: `第142期 第 ${name} 頁`
}))

const issues: NewsletterIssue[] = [
  {
    id: 146,
    label: '第146期',
    pages: pages146,
  },
  {
    id: 145,
    label: '第145期',
    pages: pages145,
  },
  {
    id: 144,
    label: '第144期',
    pages: pages144,
  },
  {
    id: 142,
    label: '第142期',
    pages: pages142,
  },
  {
    id: 141,
    label: '第141期',
    pages: pages141,
  },
]

const selectedIssue = ref(0)
const currentPage = ref(0)
const swiperRef = shallowRef<SwiperType | null>(null)

const issue = computed(() => issues[selectedIssue.value])
const pages = computed(() => issue.value.pages)

const modules = [Virtual, Keyboard, Zoom]

const isZoomed = ref(false)

const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper
}

const onSlideChange = (swiper: SwiperType) => {
  currentPage.value = swiper.activeIndex
  isZoomed.value = false
}

const onZoomChange = (_swiper: SwiperType, scale: number) => {
  isZoomed.value = scale > 1
}

// 放大／還原（也支援雙擊、雙指縮放）
const toggleZoom = () => swiperRef.value?.zoom.toggle()

const goTo = (index: number) => {
  swiperRef.value?.slideTo(index)
}

const slidePrev = () => swiperRef.value?.slidePrev()
const slideNext = () => swiperRef.value?.slideNext()

// 切換期別時，Swiper 以 key 重建並回到第一頁
const switchIssue = (idx: number) => {
  if (idx === selectedIssue.value) return
  selectedIssue.value = idx
  currentPage.value = 0
  isZoomed.value = false
}
</script>

<template>
  <div>
    <PageBanner title="會刊瀏覽" subtitle="使用左右箭頭或滑動翻閱會刊" :image="bannerImg" />

    <div class="page-section px-0 md:px-8 py-8 md:py-16">
      <!-- Issue selector -->
      <div class="container mx-auto px-4 md:px-0">
        <div class="flex justify-center gap-2 mb-6 md:mb-8 flex-wrap">
          <button
            v-for="(iss, idx) in issues"
            :key="iss.id"
            @click="switchIssue(idx)"
            :class="[
              'rounded-full px-5 py-2 text-sm font-medium transition-all',
              selectedIssue === idx
                ? 'bg-primary text-primary-foreground shadow-brand'
                : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground'
            ]"
          >
            {{ iss.label }}
          </button>
        </div>
      </div>

      <!-- Swiper viewer：大於 md 按鈕在圖片外面；小於 md 滿版並支援手指滑動 -->
      <div class="w-full md:container md:mx-auto md:px-0">
        <div class="relative mx-auto max-w-4xl">
          <div class="flex items-center justify-center md:gap-4 lg:gap-6">
            <!-- 上一頁按鈕 (畫面大於 md 在圖片外面) -->
            <button
              @click="slidePrev"
              :disabled="currentPage === 0"
              class="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background shadow-md border border-border transition-all hover:bg-muted hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="上一頁"
              title="上一頁"
            >
              <ChevronLeft class="h-6 w-6 text-foreground" />
            </button>

            <div class="w-full min-w-0 md:max-w-2xl border-y md:border md:rounded-xl border-border/80 bg-muted shadow-none md:shadow-xl overflow-hidden">
              <Swiper
                :key="issue.id"
                :modules="modules"
                :virtual="{ addSlidesBefore: 2, addSlidesAfter: 3 }"
                :keyboard="{ enabled: true }"
                :zoom="{ maxRatio: 3, minRatio: 1, toggle: true }"
                :slides-per-view="1"
                :space-between="0"
                :speed="350"
                :threshold="5"
                :touch-start-prevent-default="false"
                :resistance-ratio="0.5"
                grab-cursor
                class="newsletter-swiper"
                @swiper="onSwiper"
                @slide-change="onSlideChange"
                @zoom-change="onZoomChange"
              >
                <SwiperSlide
                  v-for="(page, i) in pages"
                  :key="`${issue.id}-${i}`"
                  :virtual-index="i"
                  class="aspect-[3779/5344]"
                >
                  <div class="swiper-zoom-container">
                    <img
                      :src="page.src"
                      :alt="page.alt"
                      class="select-none"
                      draggable="false"
                      decoding="async"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <!-- 下一頁按鈕 (畫面大於 md 在圖片外面) -->
            <button
              @click="slideNext"
              :disabled="currentPage === pages.length - 1"
              class="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background shadow-md border border-border transition-all hover:bg-muted hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="下一頁"
              title="下一頁"
            >
              <ChevronRight class="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <!-- 頁數指標與輔助跳頁 -->
      <div class="container mx-auto px-4 md:px-0">
        <div class="mt-4 md:mt-6 flex items-center justify-center gap-3 md:gap-4">
          <button
            @click="slidePrev"
            :disabled="currentPage === 0"
            class="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-full bg-muted border text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="上一頁"
          >
            <ChevronLeft class="h-4 w-4" />
          </button>
          <span class="text-sm text-muted-foreground select-none">
            {{ issue.label }} — 第 <span class="font-bold text-foreground">{{ currentPage + 1 }}</span> / {{ pages.length }} 頁
          </span>
          <button
            @click="slideNext"
            :disabled="currentPage === pages.length - 1"
            class="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-full bg-muted border text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="下一頁"
          >
            <ChevronRight class="h-4 w-4" />
          </button>
        </div>

        <div class="mt-3 flex justify-center">
          <button
            @click="toggleZoom"
            class="inline-flex items-center gap-1.5 rounded-full border bg-muted px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-border hover:text-foreground"
          >
            <component :is="isZoomed ? ZoomOut : ZoomIn" class="h-4 w-4" />
            {{ isZoomed ? '還原' : '放大' }}
          </button>
        </div>

        <p class="mt-2 text-center text-xs text-muted-foreground/70 select-none">
          <span class="md:hidden">👈 左右滑動翻頁，雙指或雙擊可放大 👉</span>
          <span class="hidden md:inline">雙擊圖片或按「放大」可放大，放大後可拖曳移動</span>
        </p>

        <!-- Page dots -->
        <div v-if="pages.length > 1" class="mt-4 flex justify-center gap-1.5 flex-wrap max-w-xl mx-auto">
          <button
            v-for="(_, i) in pages"
            :key="i"
            @click="goTo(i)"
            :class="[
              'h-2.5 w-2.5 rounded-full transition-all',
              i === currentPage ? 'bg-primary scale-125' : 'bg-border hover:bg-muted-foreground/40'
            ]"
            :aria-label="`跳至第${i + 1}頁`"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsletter-swiper {
  width: 100%;
  /* 允許頁面上下捲動，水平手勢交給 Swiper */
  touch-action: pan-y;
}
</style>
