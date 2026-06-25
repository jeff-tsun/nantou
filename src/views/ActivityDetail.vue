<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CalendarDays, ArrowLeft } from 'lucide-vue-next'
import { activities } from '@/data/mockData'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-activities.jpg'

const route = useRoute()
const router = useRouter()

const activity = computed(() =>
  activities.find((a) => a.date === route.params.date)
)

function goBack() {
  router.push('/activities')
}
</script>

<template>
  <div>
    <PageBanner title="最新活動" subtitle="精彩活動紀錄與未來活動預告" :image="bannerImg" />

    <div class="page-section">
      <div class="container mx-auto max-w-4xl">

        <!-- 返回按鈕 -->
        <button
          @click="goBack"
          class="mb-8 inline-flex items-center gap-2 rounded-lg bg-[#1c8d3f]/10 px-4 py-2 text-sm font-medium text-[#1c8d3f] hover:bg-[#1c8d3f]/20 transition-colors duration-200"
        >
          <ArrowLeft class="h-4 w-4" />
          返回活動列表
        </button>

        <!-- 找不到活動 -->
        <div v-if="!activity" class="text-center py-20 bg-muted/30 rounded-xl border border-dashed">
          <p class="text-muted-foreground text-lg">找不到此活動</p>
        </div>

        <!-- 活動內頁 -->
        <article v-else>

          <!-- 1. 時間 + 標題 -->
          <div class="pb-6">
            <div class="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays class="h-4 w-4" />
              <time>{{ activity.date }}</time>
            </div>
            <h1 class="text-2xl md:text-3xl font-bold text-card-foreground leading-snug">
              {{ activity.title }}
            </h1>
          </div>

          <!-- 2. 主圖 (heroImage) — 全寬、不限高度 -->
          <div v-if="activity.heroImage" class="w-full">
            <img
              :src="activity.heroImage"
              :alt="activity.title"
              class="w-full h-auto block"
            />
          </div>

          <!-- 3. bodyHtml (只在有內容時顯示) -->
          <div
            v-if="activity.bodyHtml"
            class="pt-8"
          >
            <div class="divider mb-8"></div>
            <div
              class="prose max-w-none text-muted-foreground leading-relaxed content-html"
              v-html="activity.bodyHtml"
            ></div>
          </div>

        </article>

        <!-- 底部返回 -->
        <div class="mt-10 flex justify-center">
          <button
            @click="goBack"
            class="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1c8d3f] text-white text-sm font-medium hover:bg-[#157a34] transition-colors duration-200"
          >
            <ArrowLeft class="h-4 w-4" />
            返回活動列表
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border, #e5e7eb), transparent);
}

::v-deep(.content-html p) {
  margin-bottom: 0.75rem;
}
::v-deep(.content-html a) {
  color: #1c8d3f;
  text-decoration: underline;
}
::v-deep(.content-html img) {
  max-width: 100%;
  border-radius: 0.5rem;
}
::v-deep(.content-html ul),
::v-deep(.content-html ol) {
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
}
::v-deep(.content-html li) {
  margin-bottom: 0.25rem;
}
::v-deep(.content-html h3) {
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: var(--card-foreground, #111);
}
</style>
