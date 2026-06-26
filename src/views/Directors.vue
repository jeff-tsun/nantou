<script setup lang="ts">
import { ref, computed } from 'vue'
import { User, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { directorTerms, directorGroups, directors, type DirectorGroupName } from '@/data/directors'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-directors.jpg'

const selectedTerm = ref(directorTerms[0].id)
const selectedGroup = ref<DirectorGroupName>(directorGroups[0])

const currentDirectors = computed(() => {
  return directors[selectedTerm.value]?.[selectedGroup.value] ?? []
})

const currentTermData = computed(() => {
  return directorTerms.find(t => t.id === selectedTerm.value)
})

const currentPage = ref(0)
const direction = ref(1)

const goTo = (newPage: number) => {
  const pages = currentTermData.value?.pages || []
  if (newPage < 0 || newPage >= pages.length) return
  direction.value = newPage > currentPage.value ? 1 : -1
  currentPage.value = newPage
}

const transitionName = computed(() => direction.value > 0 ? 'flip-next' : 'flip-prev')

const selectTerm = (id: number) => {
  selectedTerm.value = id
  selectedGroup.value = directorGroups[0]
  currentPage.value = 0
  direction.value = 1
}
</script>

<template>
  <div>
    <PageBanner title="理監事介紹" :image="bannerImg" />

    <div class="page-section min-h-[60vh]">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Sidebar - Terms -->
          <aside class="md:w-48 shrink-0">
            <h3 class="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              屆別選擇
            </h3>
            <div class="flex md:flex-col gap-2">
              <button
                v-for="term in directorTerms"
                :key="term.id"
                @click="selectTerm(term.id)"
                :class="[
                  'rounded-lg px-4 py-2.5 text-sm font-medium text-left transition-all',
                  selectedTerm === term.id
                    ? 'bg-[#ce251d] text-white shadow-lg'
                    : 'bg-muted text-foreground hover:bg-border'
                ]"
              >
                {{ term.label }}
              </button>
            </div>
          </aside>

          <!-- Main -->
          <div class="flex-1 min-w-0">
            <template v-if="currentTermData?.old">
              <!-- Flipbook viewer -->
              <div class="relative mx-auto max-w-2xl">
                <div class="relative aspect-[3779/5344] overflow-hidden rounded-xl border bg-muted shadow-xl">
                  <Transition :name="transitionName" mode="out-in">
                    <img
                      v-if="currentTermData.pages && currentTermData.pages.length > 0"
                      :key="`${selectedTerm}-${currentPage}`"
                      :src="currentTermData.pages[currentPage]?.src"
                      :alt="currentTermData.pages[currentPage]?.alt"
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
                  :disabled="currentPage === (currentTermData.pages?.length || 1) - 1"
                  class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow-lg border transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="下一頁"
                >
                  <ChevronRight class="h-6 w-6" />
                </button>

                <!-- Page indicator -->
                <div class="mt-6 flex items-center justify-center gap-4">
                  <span class="text-sm text-muted-foreground">
                    {{ currentTermData.label }} — 第 <span class="font-bold text-foreground">{{ currentPage + 1 }}</span> / {{ currentTermData.pages?.length || 0 }} 頁
                  </span>
                </div>

                <!-- Page dots -->
                <div v-if="(currentTermData.pages?.length || 0) > 1" class="mt-3 flex justify-center gap-1.5 flex-wrap">
                  <button
                    v-for="(_, i) in currentTermData.pages"
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
            </template>
            <template v-else>
              <!-- Tabs -->
              <div class="mb-6 flex flex-wrap gap-2">
                <button
                  v-for="group in directorGroups"
                  :key="group"
                  @click="selectedGroup = group"
                  :class="[
                    'rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all',
                    selectedGroup === group
                      ? 'bg-[#ce251d] text-white shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground'
                  ]"
                >
                  {{ group }}
                </button>
              </div>

              <!-- Grid -->
              <div v-if="currentDirectors.length > 0" class="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div
                  v-for="(person, i) in currentDirectors"
                  :key="`${selectedTerm}-${selectedGroup}-${i}`"
                  class="group rounded-xl border bg-card p-4 text-center card-hover animate-fade-in-up"
                  :style="{ animationDelay: `${i * 0.05}s` }"
                >
                  <div class="mx-auto mb-3 h-24 w-20 overflow-hidden rounded-lg border-2 border-border bg-muted">
                    <img
                      :src="person.image"
                      :alt="person.name"
                      class="h-full w-full object-cover"
                    />
                  </div>
                  <h4 class="font-bold text-card-foreground">{{ person.name }}</h4>
                  <p v-if="person.title" class="mt-1 text-xs text-muted-foreground">{{ person.title }}</p>
                </div>
              </div>
              
              <div v-else class="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <User class="h-12 w-12 mb-3 opacity-40" />
                <p>此分類目前尚無資料</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
  opacity: 0;
}

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
