<script setup lang="ts">
import { BookOpen, Users, Calendar, Video, ArrowRight, Mountain, TreePine, Sparkles, FileText, HeartHandshake } from 'lucide-vue-next'
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
    title: '最新消息',
    desc: '查看近期活動資訊與精彩回顧',
    path: '/activities',
    color: 'text-[#1c8d3f]',
    bg: 'bg-[#1c8d3f]/10',
  },
  {
    icon: Video,
    title: '活動紀錄',
    desc: '觀賞精彩的活動紀錄影片',
    path: '/gallery',
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

const donateVisible = ref(false)
const onDonateVisibility = (state: boolean) => { if (state) donateVisible.value = true }
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
            最新消息
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

    <!-- Donation Section -->
    <section class="page-section bg-gradient-to-tr from-background via-background to-[#ebbb1c]/10">
      <div class="container mx-auto">
        <div
          v-element-visibility="onDonateVisibility"
          :class="[
            'relative overflow-hidden text-center transition-all duration-700 ease-out border-0 md:border rounded-none md:rounded-2xl bg-transparent md:bg-card p-0 md:p-12 shadow-none md:shadow-sm',
            donateVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="relative z-10 max-w-3xl mx-auto">
            <div class="inline-flex items-center gap-2 mb-4 rounded-full bg-[#ebbb1c]/20 px-4 py-1.5 text-sm font-semibold text-[#8a6800]">
              <HeartHandshake class="h-4 w-4" />
              我要捐款
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">支持同鄉會推動會務</h2>
            <p class="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
              感謝各位鄉親與各界先進的熱心贊助與支持，您的每份力量都將使同鄉會更加茁壯。
            </p>

            <!-- 匯款/轉帳資訊 卡片 -->
            <div class="rounded-xl border bg-muted/40 p-4 sm:p-6 md:p-8 text-left shadow-sm mb-6">
              <h3 class="flex items-center gap-2 text-base md:text-lg font-bold text-foreground mb-4 pb-3 border-b">
                匯款 / 轉帳資訊
              </h3>

              <div class="grid gap-3 text-sm md:text-base">
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <span class="font-semibold text-muted-foreground w-20 shrink-0 flex items-center gap-1.5">
                    銀行：
                  </span>
                  <span class="text-foreground font-medium">台北仁杭郵局(700)</span>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <span class="font-semibold text-muted-foreground w-20 shrink-0 flex items-center gap-1.5">
                    帳號：
                  </span>
                  <span class="text-foreground font-mono font-bold text-base md:text-lg tracking-wider text-[#0f327c]">
                    00027790018474
                  </span>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <span class="font-semibold text-muted-foreground w-20 shrink-0 flex items-center gap-1.5">
                    戶名：
                  </span>
                  <span class="text-foreground font-medium">台北市南投縣同鄉會陳怡潔</span>
                </div>
              </div>
            </div>

            <!-- 提示文字 -->
            <div class="rounded-lg bg-[#ebbb1c]/10 p-4 text-xs md:text-sm text-foreground/80 leading-relaxed text-left border border-[#ebbb1c]/20 mb-6">
              <p>
                📌 <strong>匯款／轉帳完成後，請務必通知秘書</strong>，以利核對繳費資料。<br class="hidden sm:inline" />
                (我們將於確認捐款款項後，開立正式收據，可辦理綜合所得總額列舉扣除額或列為營利事業當年度捐贈費用)。
              </p>
            </div>

            <!-- 聯絡與專頁按鈕 -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://lin.ee/YyaTrgU"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-line inline-flex items-center justify-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 w-full sm:w-auto"
                style="color: #ffffff !important; text-decoration: none !important;"
              >
                <svg class="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
                  <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="800" font-family="Arial, sans-serif" fill="#06C755">LINE</text>
                </svg>
                加 LINE 聯繫秘書
              </a>
              <RouterLink
                to="/donation"
                class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#ebbb1c] bg-[#ebbb1c]/10 hover:bg-[#ebbb1c]/20 px-5 py-2.5 text-sm font-semibold text-[#8a6800] transition-colors w-full sm:w-auto"
              >
                <HeartHandshake class="h-4 w-4 text-[#ebbb1c]" />
                查看完整捐款說明
              </RouterLink>
            </div>
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
