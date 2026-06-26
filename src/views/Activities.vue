<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import { activities, googleCalendarEmbedUrl } from '@/data/activities'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-activities.jpg'
import { vElementVisibility } from '@vueuse/components'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isVisible = ref(new Array(activities.length).fill(false))
const onVisibility = (state: boolean, index: number) => {
  if (state) isVisible.value[index] = true
}
</script>

<template>
  <div>
    <PageBanner title="最新消息" subtitle="精彩活動紀錄與未來活動預告" :image="bannerImg" />

    <div class="page-section">
      <div class="container mx-auto">
        <!-- Activity cards -->
        <div v-if="activities.length === 0" class="text-center py-20 bg-muted/30 rounded-xl border border-dashed mb-16">
          <p class="text-muted-foreground text-lg">暫無最新消息</p>
        </div>
        <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <component
            :is="activity.hasDetailPage !== false ? RouterLink : 'div'"
            v-for="(activity, i) in activities"
            :key="activity.id"
            v-bind="activity.hasDetailPage !== false ? { to: `/activities/${activity.date}` } : {}"
            v-element-visibility="(state: boolean) => onVisibility(state, i)"
            :class="[
              'overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-700 ease-out block no-underline',
              activity.hasDetailPage !== false ? 'card-hover cursor-pointer' : '',
              isVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <div class="aspect-video overflow-hidden bg-muted group">
              <img
                :src="activity.image"
                :alt="activity.title"
                :class="[
                  'h-full w-full object-cover transition-transform duration-500',
                  activity.hasDetailPage !== false ? 'hover:scale-105' : ''
                ]"
              />
            </div>
            <div class="p-6">
              <div class="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays class="h-3.5 w-3.5" />
                <time>{{ activity.date }}</time>
              </div>
              <h2 class="mb-3 text-xl font-bold text-card-foreground">{{ activity.title }}</h2>
              <div
                v-if="activity.contentHtml"
                class="prose prose-sm max-w-none text-muted-foreground leading-relaxed content-html"
                v-html="activity.contentHtml"
              ></div>
              <div
                v-else
                class="text-sm text-muted-foreground leading-relaxed"
              >
                敬請期待相關最新消息詳細資訊...
              </div>
            </div>
          </component>
        </div>

        <!-- Google Calendar -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="rounded-lg bg-[#1c8d3f]/10 p-2 text-[#1c8d3f]">
              <CalendarDays class="h-6 w-6" />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-foreground">行事曆</h2>
              <p class="text-sm text-muted-foreground">查看近期及未來活動安排</p>
            </div>
          </div>
          <div class="overflow-hidden rounded-lg border">
            <iframe
              :src="googleCalendarEmbedUrl"
              title="行事曆"
              class="w-full border-0"
              style="height: 600px"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.content-html p) {
  margin-bottom: 0.5rem;
}
::v-deep(.content-html a) {
  color: #1c8d3f;
  text-decoration: underline;
}
</style>
