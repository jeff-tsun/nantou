<script setup lang="ts">
import { BookOpen, Users, Calendar, Video, ArrowRight, Mountain, TreePine, Sparkles, FileText } from 'lucide-vue-next'
import bannerImg from '@/assets/nantou-banner.jpg'
import { vElementVisibility } from '@vueuse/components'
import { ref } from 'vue'

const features = [
  {
    icon: BookOpen,
    title: '會刊瀏覽',
    desc: '閱覽最新會刊，掌握同鄉會動態',
    path: '/newsletter',
    color: 'text-[#0f327c]',
    bg: 'bg-[#0f327c]/10',
  },
  {
    icon: Users,
    title: '理監事介紹',
    desc: '認識各屆理監事及會務人員',
    path: '/directors',
    color: 'text-[#ce251d]',
    bg: 'bg-[#ce251d]/10',
  },
  {
    icon: Calendar,
    title: '最新活動',
    desc: '查看近期活動資訊與精彩回顧',
    path: '/activities',
    color: 'text-[#1c8d3f]',
    bg: 'bg-[#1c8d3f]/10',
  },
  {
    icon: Video,
    title: '活動影片',
    desc: '觀賞精彩的活動紀錄影片',
    path: '/videos',
    color: 'text-[#ebbb1c]',
    bg: 'bg-[#ebbb1c]/10',
  },
]

// To replace framer-motion, we'll use IntersectionObserver via vueuse
const section1Visible = ref(false)
const section2Visible = ref(false)

const onVisibility1 = (state: boolean) => { if (state) section1Visible.value = true }
const onVisibility2 = (state: boolean) => { if (state) section2Visible.value = true }

const featureVisible = ref(new Array(features.length).fill(false))
const onFeatureVisibility = (state: boolean, index: number) => {
  if (state) featureVisible.value[index] = true
}

const ctaVisible = ref(false)
const onCtaVisibility = (state: boolean) => { if (state) ctaVisible.value = true }
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <!-- infinite scale animation via CSS -->
        <img
          :src="bannerImg"
          alt="南投美景"
          class="h-full w-full object-cover animate-slow-zoom"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      </div>
      <div class="relative z-10 container mx-auto px-4 py-24 md:py-40 text-center">
        <div
          v-element-visibility="onVisibility1"
          :class="[
            'transition-all duration-1000 ease-out',
            section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          ]"
        >
          <div class="inline-flex items-center gap-2 mb-6 rounded-full bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 text-sm text-primary-foreground">
            <Mountain class="h-4 w-4" />
            <span>凝聚鄉情・傳承文化</span>
            <TreePine class="h-4 w-4" />
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-primary-foreground mb-4 leading-tight tracking-wide">
            台北市南投縣同鄉會
          </h1>
          <p class="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            南投，一個擁有日月潭、清境農場、溪頭森林的美麗家鄉。
            <br class="hidden md:block" />
            我們在台北，將這份故鄉的溫暖延續下去。
          </p>
          <RouterLink
            to="/activities"
            class="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-8 py-3 font-semibold text-primary-foreground shadow-brand transition-transform hover:scale-105"
          >
            <Calendar class="h-5 w-5" />
            最新活動
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="page-section bg-gradient-to-br from-[#1c8d3f]/5 to-white text-[#1c8d3f]">
      <div class="container mx-auto">
        <div
          v-element-visibility="onVisibility2"
          :class="[
            'text-center max-w-3xl mx-auto transition-all duration-700 ease-out',
            section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="inline-flex items-center gap-2 mb-4 text-[#1c8d3f]">
            <Sparkles class="h-5 w-5" />
            <span class="text-sm font-semibold tracking-wider uppercase">關於我們</span>
            <Sparkles class="h-5 w-5" />
          </div>
          <h2 class="section-title text-[#1c8d3f]">歡迎來到南投同鄉會</h2>
          <p class="text-muted-foreground leading-relaxed text-lg">
            台北市南投縣同鄉會成立多年，致力於聯繫旅居台北地區的南投鄉親，促進彼此互助合作。
            我們定期舉辦各項活動，包括新春團拜、敬老聯歡、文化推廣等，讓遠離家鄉的鄉親們感受到濃厚的故鄉情誼。
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="page-section">
      <div class="container mx-auto">
        <h2 class="section-title">探索同鄉會</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(f, i) in features"
            :key="f.title"
            v-element-visibility="(state: boolean) => onFeatureVisibility(state, i)"
            :class="[
              'transition-all duration-500 ease-out',
              featureVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <RouterLink
              :to="f.path"
              class="group block rounded-xl border bg-card p-6 card-hover h-full"
            >
              <div :class="['mb-4 inline-flex rounded-lg p-3', f.bg]">
                <component :is="f.icon" :class="['h-6 w-6', f.color]" />
              </div>
              <h3 class="mb-2 text-lg font-bold text-card-foreground">{{ f.title }}</h3>
              <p class="text-sm text-muted-foreground mb-3">{{ f.desc }}</p>
              <span :class="['inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all', f.color]">
                了解更多 <ArrowRight class="h-4 w-4" />
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Join CTA -->
    <section class="page-section bg-gradient-to-br from-[#ce251d]/5 via-background to-[#ebbb1c]/8">
      <div class="container mx-auto">
        <div
          v-element-visibility="onCtaVisibility"
          :class="[
            'relative overflow-hidden rounded-2xl border bg-card p-8 md:p-12 text-center transition-all duration-700 ease-out',
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <!-- Decorative corners -->
          <div class="absolute top-0 left-0 h-24 w-24 rounded-br-full bg-[#ce251d]/8" />
          <div class="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-[#ebbb1c]/10" />

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 mb-4 rounded-full bg-[#ce251d]/10 px-4 py-1.5 text-sm font-medium text-[#ce251d]">
              <FileText class="h-4 w-4" />
              歡迎加入
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">成為同鄉會的一份子</h2>
            <p class="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              無論您來自南投的哪個鄉鎮，我們都歡迎您的加入。在這裡，您可以認識更多同鄉、參與精彩活動，
              一起延續家鄉的溫暖與文化。
            </p>
            <RouterLink
              to="/apply"
              class="inline-flex items-center gap-2 rounded-full bg-[#ce251d] px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <Users class="h-5 w-5" />
              入會申請
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
            <p class="mt-4 text-xs text-muted-foreground">
              年費：貳仟元整　｜　歡迎來電洽詢 <span class="text-[#ce251d] font-semibold">(02) 2357-9813</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@keyframes zoom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.animate-slow-zoom {
  animation: zoom 18s ease-in-out infinite;
}
</style>
