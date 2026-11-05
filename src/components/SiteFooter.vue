<script setup lang="ts">
import { Facebook, MapPin, Phone, Clock, Heart } from 'lucide-vue-next'
import logoGold from '@/assets/logo-gold.png'
</script>

<template>
  <footer class="bg-foreground text-primary-foreground">
    <div class="container mx-auto px-4 py-12">
      <div class="grid gap-8 md:grid-cols-3">
        <!-- About -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img :src="logoGold" alt="台北市南投縣同鄉會" class="h-10 w-10 rounded-full object-contain" />
            <h3 class="text-lg font-bold">台北市南投縣同鄉會</h3>
          </div>
          <p class="text-sm text-primary-foreground/70 leading-relaxed">
            凝聚南投鄉親情誼，促進同鄉互助合作，傳承南投文化之美。
          </p>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-4 text-lg font-bold">聯絡資訊</h3>
          <ul class="space-y-2 text-sm text-primary-foreground/70">
            <li class="flex items-center gap-2">
              <MapPin class="h-4 w-4 shrink-0" />
              <span>台北市仁愛路一段四號十二樓之二</span>
            </li>
            <li class="flex items-center gap-2">
              <Phone class="h-4 w-4 shrink-0" />
              <span>(02)2357-9813</span>
            </li>
            <li class="flex items-center gap-2">
              <Clock class="h-4 w-4 shrink-0" />
              <span>上班時間：週一~四 下午1:30-5:30</span>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="mb-4 text-lg font-bold">社群連結</h3>
          <a
            href="https://www.facebook.com/TFNA20250524/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground/20 mb-2"
          >
            <Facebook class="h-5 w-5" />
            台灣區南投縣同鄉會聯合總會
          </a>
          <a
            href="https://lin.ee/YyaTrgU"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground/20"
          >
            <!-- LINE icon（lucide 無內建，使用自訂 SVG） -->
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
              <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="700" font-family="Arial, sans-serif" fill="#1f2937">LINE</text>
            </svg>
            LINE官方帳號
          </a>
        </div>
      </div>

      <div class="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
        <p class="flex items-center justify-center gap-1">
          © {{ new Date().getFullYear() }} 台北市南投縣同鄉會 版權所有
          <Heart class="h-3 w-3 text-primary" />
        </p>
      </div>
    </div>
  </footer>
</template>
