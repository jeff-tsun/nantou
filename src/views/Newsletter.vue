<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
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
const direction = ref(1)

const issue = computed(() => issues[selectedIssue.value])
const pages = computed(() => issue.value.pages)

const goTo = (newPage: number) => {
  if (newPage < 0 || newPage >= pages.value.length) return
  direction.value = newPage > currentPage.value ? 1 : -1
  currentPage.value = newPage
}

const switchIssue = (idx: number) => {
  selectedIssue.value = idx
  currentPage.value = 0
  direction.value = 1
}

const transitionName = computed(() => direction.value > 0 ? 'flip-next' : 'flip-prev')
</script>

<template>
  <div>
    <PageBanner title="會刊瀏覽" subtitle="使用左右箭頭翻閱會刊" :image="bannerImg" />

    <div class="page-section">
      <div class="container mx-auto">
        <!-- Issue selector -->
        <div class="flex justify-center gap-2 mb-8 flex-wrap">
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

        <!-- Flipbook viewer -->
        <div class="relative mx-auto max-w-2xl">
          <div class="relative aspect-[3779/5344] overflow-hidden rounded-xl border bg-muted shadow-xl">
            <Transition :name="transitionName" mode="out-in">
              <img
                :key="`${issue.id}-${currentPage}`"
                :src="pages[currentPage].src"
                :alt="pages[currentPage].alt"
                class="absolute inset-0 h-full w-full object-contain"
                style="perspective: 1000px"
              />
            </Transition>
          </div>

          <!-- Controls -->
          <button
            @click="goTo(currentPage - 1)"
            :disabled="currentPage === 0"
            class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow-lg border transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="上一頁"
          >
            <ChevronLeft class="h-6 w-6" />
          </button>
          <button
            @click="goTo(currentPage + 1)"
            :disabled="currentPage === pages.length - 1"
            class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow-lg border transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="下一頁"
          >
            <ChevronRight class="h-6 w-6" />
          </button>

          <!-- Page indicator -->
          <div class="mt-6 flex items-center justify-center gap-4">
            <span class="text-sm text-muted-foreground">
              {{ issue.label }} — 第 <span class="font-bold text-foreground">{{ currentPage + 1 }}</span> / {{ pages.length }} 頁
            </span>
          </div>

          <!-- Page dots -->
          <div v-if="pages.length > 1" class="mt-3 flex justify-center gap-1.5 flex-wrap">
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
  </div>
</template>

<style scoped>
/* Flip Animations for Newsletter */
.flip-next-enter-active,
.flip-next-leave-active,
.flip-prev-enter-active,
.flip-prev-leave-active {
  transition: all 0.4s ease-in-out;
}

.flip-next-enter-from,
.flip-prev-leave-to {
  transform: translateX(100%) rotateY(-15deg);
  opacity: 0;
}

.flip-next-leave-to,
.flip-prev-enter-from {
  transform: translateX(-100%) rotateY(15deg);
  opacity: 0;
}
</style>
