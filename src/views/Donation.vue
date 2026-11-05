<script setup lang="ts">
import { ref } from 'vue'
import { HeartHandshake, CreditCard, Building2, User, Phone, Check, Copy } from 'lucide-vue-next'
import PageBanner from '@/components/PageBanner.vue'
import bannerApplyImg from '@/assets/banner-apply.jpg'
import { ElMessage } from 'element-plus'

const copied = ref(false)
const accountNumber = '00027790018474'

const copyAccount = async () => {
  try {
    await navigator.clipboard.writeText(accountNumber)
    copied.value = true
    ElMessage.success('帳號已複製至剪貼簿！')
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    ElMessage.error('複製失敗，請手動選取複製')
  }
}
</script>

<template>
  <div>
    <PageBanner
      title="我要捐款"
      subtitle="凝聚鄉親情誼・同心支持會務發展"
      :image="bannerApplyImg"
    />

    <div class="page-section bg-background px-4 md:px-8 py-10 md:py-16">
      <div class="container mx-auto max-w-4xl">
        <!-- 主卡片：在 md 以上顯示精緻卡片，md 以下去除外層卡片邊框與陰影，版面更寬、更舒適 -->
        <div class="relative overflow-hidden border-0 md:border rounded-none md:rounded-3xl bg-transparent md:bg-card p-0 md:p-12 shadow-none md:shadow-sm">
          <!-- 裝飾背景色塊 (md 以上顯示) -->
          <div class="hidden md:block absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#ebbb1c]/10 blur-2xl pointer-events-none" />
          <div class="hidden md:block absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#1c8d3f]/5 blur-2xl pointer-events-none" />

          <div class="relative z-10 text-center">
            <!-- 標籤徽章：黃底黑字 -->
            <div class="inline-flex items-center gap-2 mb-4 rounded-full bg-[#ebbb1c]/20 px-4 py-1.5 text-sm font-semibold text-[#8a6800]">
              <HeartHandshake class="h-4 w-4 text-[#ebbb1c]" />
              支持與贊助
            </div>

            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              支持台北市南投縣同鄉會
            </h1>
            <p class="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
              感謝各位鄉親、長輩與各界熱心先進的慷慨贊助與支持。<br class="hidden sm:inline" />
              您的每一筆捐款，都將全數投入同鄉會會務推動、獎學金發放、敬老活動及急難關懷，讓愛與溫暖持續傳承。
            </p>

            <!-- 匯款資訊主要區塊 -->
            <div class="rounded-xl md:rounded-2xl border border-[#ebbb1c]/30 bg-gradient-to-b from-white to-[#ebbb1c]/5 p-4 sm:p-6 md:p-8 text-left shadow-sm mb-6 md:mb-8">
              <div class="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-border/80">
                <div class="flex items-center gap-2">
                  <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ebbb1c]/20 text-[#8a6800]">
                    <CreditCard class="h-4 w-4" />
                  </span>
                  <h2 class="text-base sm:text-lg md:text-xl font-bold text-foreground">
                    匯款 / 轉帳帳戶資訊
                  </h2>
                </div>
                <span class="hidden sm:inline-flex text-xs font-medium px-2.5 py-1 rounded bg-[#1c8d3f]/10 text-[#1c8d3f]">
                  郵局帳戶
                </span>
              </div>

              <div class="grid gap-3 sm:gap-4 md:gap-5 text-sm md:text-base">
                <!-- 銀行機構 -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-lg bg-background/80 border border-border/50">
                  <div class="flex items-center gap-2 text-muted-foreground shrink-0">
                    <Building2 class="h-4 w-4 text-[#0f327c]" />
                    <span class="font-semibold text-sm">收款銀行：</span>
                  </div>
                  <span class="text-foreground font-semibold text-sm sm:text-base">台北仁杭郵局（機構代號：700）</span>
                </div>

                <!-- 帳號 + 一鍵複製按鈕 -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-background/80 border border-border/50">
                  <div class="flex items-center gap-2 text-muted-foreground shrink-0">
                    <CreditCard class="h-4 w-4 text-[#0f327c]" />
                    <span class="font-semibold text-sm">帳號：</span>
                  </div>
                  <div class="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                    <span class="font-mono text-base sm:text-lg md:text-xl font-bold tracking-wider text-[#0f327c]">
                      {{ accountNumber }}
                    </span>
                    <button
                      type="button"
                      @click="copyAccount"
                      class="inline-flex items-center gap-1.5 rounded-md bg-[#ebbb1c]/20 px-2.5 py-1 text-xs font-medium text-[#8a6800] hover:bg-[#ebbb1c]/30 transition-colors shrink-0"
                      title="複製帳號"
                    >
                      <component :is="copied ? Check : Copy" class="h-3.5 w-3.5" />
                      {{ copied ? '已複製' : '複製' }}
                    </button>
                  </div>
                </div>

                <!-- 戶名 -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-lg bg-background/80 border border-border/50">
                  <div class="flex items-center gap-2 text-muted-foreground shrink-0">
                    <User class="h-4 w-4 text-[#0f327c]" />
                    <span class="font-semibold text-sm">戶名：</span>
                  </div>
                  <span class="text-foreground font-semibold text-sm sm:text-base">台北市南投縣同鄉會陳怡潔</span>
                </div>
              </div>
            </div>

            <!-- 捐款後須知提醒 (提示黃色) -->
            <div class="rounded-xl bg-[#ebbb1c]/10 border border-[#ebbb1c]/30 p-4 sm:p-5 md:p-6 text-left mb-6 md:mb-8">
              <h3 class="text-sm md:text-base font-bold text-foreground mb-2 flex items-center gap-2">
                <span>📌</span>
                匯款後確認與收據開立說明
              </h3>
              <p class="text-xs md:text-sm text-foreground/80 leading-relaxed">
                匯款／轉帳完成後，請務必透過電話或 LINE 官方帳號通知會務秘書，以利即時為您核對入帳資料。<br />
                本會於確認款項後，將會開立正式收據，<strong>可依法辦理個人綜合所得稅列舉扣除額，或列為營利事業當年度捐贈費用抵稅</strong>。
              </p>
            </div>

            <!-- 聯絡窗口資訊卡片 -->
            <div class="rounded-xl md:rounded-2xl border border-border/80 bg-card md:bg-muted/30 p-4 sm:p-6 text-left shadow-sm md:shadow-none">
              <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
                <div class="space-y-1.5">
                  <div class="flex items-center gap-2 text-foreground font-bold text-base">
                    <Phone class="h-4 w-4 text-[#ce251d]" />
                    <span>聯絡同鄉會秘書處</span>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <span>會務專線：<a href="tel:0223579813" class="text-foreground font-semibold hover:text-[#ce251d] transition-colors">(02) 2357-9813</a></span>
                    <span class="hidden sm:inline text-muted-foreground/40">｜</span>
                    <span>服務時間：週一至週四 13:30 ~ 17:30</span>
                  </div>
                </div>

                <div class="shrink-0 w-full sm:w-auto">
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
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

