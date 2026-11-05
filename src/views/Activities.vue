<script setup lang="ts">
import { CalendarDays, ChevronRight } from 'lucide-vue-next'
import { activities, googleCalendarEmbedUrl, type ActivityTag } from '@/data/activities'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-activities.jpg'
import { vElementVisibility } from '@vueuse/components'
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'

const tabs: { key: ActivityTag; label: string }[] = [
  { key: 'news', label: '最新快訊' },
  { key: 'course', label: '課程公告' },
  { key: 'event', label: '活動訊息' },
]
const currentTag = ref<ActivityTag>('news')

const filtered = computed(() => activities.filter((a) => a.tag === currentTag.value))

const isVisible = ref<boolean[]>([])
watch(currentTag, () => { isVisible.value = [] })
const onVisibility = (state: boolean, index: number) => {
  if (state) isVisible.value[index] = true
}
</script>

<template>
  <div>
    <PageBanner title="最新消息" subtitle="精彩活動紀錄與未來活動預告" :image="bannerImg" />

    <div class="page-section">
      <div class="container mx-auto">
        <!-- Tag 切換 -->
        <div class="mb-8 flex justify-center">
          <div class="inline-flex w-full max-w-md rounded-xl bg-muted p-1 sm:w-auto" role="tablist">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              role="tab"
              :aria-selected="currentTag === tab.key"
              @click="currentTag = tab.key"
              :class="[
                'flex-1 sm:flex-none whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 sm:px-6',
                currentTag === tab.key
                  ? 'bg-[#1c8d3f] text-white shadow'
                  : 'text-muted-foreground hover:text-foreground'
              ]"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div v-if="filtered.length === 0" class="text-center py-20 bg-muted/30 rounded-xl border border-dashed mb-16">
          <p class="text-muted-foreground text-lg">暫無{{ tabs.find((t) => t.key === currentTag)?.label }}</p>
        </div>

        <!-- 最新快訊：文字清單 -->
        <ul
          v-else-if="currentTag === 'news'"
          class="mx-auto mb-16 max-w-4xl divide-y overflow-hidden rounded-xl border bg-card shadow-sm"
        >
          <li v-for="(activity, i) in filtered" :key="`${activity.id}-${i}`">
            <component
              :is="activity.hasDetailPage !== false ? RouterLink : 'div'"
              v-bind="activity.hasDetailPage !== false ? { to: `/activities/${activity.id}` } : {}"
              :class="[
                'flex flex-col gap-1 px-4 py-4 no-underline sm:flex-row sm:items-center sm:gap-6 sm:px-6',
                activity.hasDetailPage !== false ? 'cursor-pointer transition-colors hover:bg-[#1c8d3f]/5 group' : ''
              ]"
            >
              <time class="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground sm:w-28">
                <CalendarDays class="h-3.5 w-3.5" />
                {{ activity.date }}
              </time>
              <span
                :class="[
                  'flex-1 font-medium leading-snug text-card-foreground',
                  activity.hasDetailPage !== false ? 'group-hover:text-[#1c8d3f]' : ''
                ]"
              >
                {{ activity.title }}
              </span>
              <ChevronRight
                v-if="activity.hasDetailPage !== false"
                class="hidden h-4 w-4 shrink-0 text-muted-foreground group-hover:text-[#1c8d3f] sm:block"
              />
            </component>
          </li>
        </ul>

        <!-- 課程公告 / 活動訊息：卡片 -->
        <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <component
            :is="activity.hasDetailPage !== false ? RouterLink : 'div'"
            v-for="(activity, i) in filtered"
            :key="`${activity.id}-${i}`"
            v-bind="activity.hasDetailPage !== false ? { to: `/activities/${activity.id}` } : {}"
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
