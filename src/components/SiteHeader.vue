<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, BookOpen, Users, Calendar, Video, FileText } from 'lucide-vue-next'
import logoImg from '@/assets/logo.png'

const route = useRoute()
const mobileOpen = ref(false)

const navItems = [
  { label: '會刊', path: '/newsletter', icon: BookOpen },
  { label: '理監事介紹', path: '/directors', icon: Users },
  { label: '最新消息', path: '/activities', icon: Calendar },
  { label: '活動紀錄', path: '/gallery', icon: Video },
  { label: '入會申請', path: '/apply', icon: FileText },
]

const isActive = (path: string) => path && route.path === path
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 shadow-md">
    <!-- Single bar: logo + nav -->
    <div class="bg-gradient-hero">
      <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <RouterLink to="/" class="flex items-center gap-3">
          <img :src="logoImg" alt="台北市南投縣同鄉會" class="h-10 w-10 rounded-full object-contain" />
          <span class="text-lg md:text-xl font-bold text-primary-foreground tracking-wider">
            台北市南投縣同鄉會
          </span>
        </RouterLink>

        <!-- Desktop nav inline -->
        <nav class="hidden md:flex items-center gap-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors',
              isActive(item.path)
                ? 'bg-primary-foreground/25 text-primary-foreground'
                : 'text-primary-foreground/80 hover:bg-primary-foreground/15 hover:text-primary-foreground'
            ]"
          >
            <component :is="item.icon" class="h-4 w-4" />
            {{ item.label }}
          </RouterLink>
        </nav>

        <button
          class="md:hidden text-primary-foreground p-1"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <X v-if="mobileOpen" class="h-6 w-6" />
          <Menu v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out overflow-hidden"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[500px] opacity-100"
      leave-active-class="transition-all duration-200 ease-in overflow-hidden"
      leave-from-class="max-h-[500px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <nav
        v-if="mobileOpen"
        class="md:hidden bg-background border-b overflow-hidden block"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="mobileOpen = false"
          :class="[
            'flex items-center gap-2 px-4 py-3 text-sm border-b border-muted transition-colors',
            isActive(item.path) ? 'text-primary font-medium bg-muted' : 'text-foreground'
          ]"
        >
          <component :is="item.icon" class="h-4 w-4" />
          {{ item.label }}
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>
