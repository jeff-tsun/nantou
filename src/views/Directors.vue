<script setup lang="ts">
import { ref, computed } from 'vue'
import { User } from 'lucide-vue-next'
import { directorTerms, directorGroups, directors, type DirectorGroupName } from '@/data/mockData'
import PageBanner from '@/components/PageBanner.vue'
import bannerImg from '@/assets/banner-directors.jpg'

const selectedTerm = ref(directorTerms[0].id)
const selectedGroup = ref<DirectorGroupName>(directorGroups[0])

const currentDirectors = computed(() => {
  return directors[selectedTerm.value]?.[selectedGroup.value] ?? []
})

const selectTerm = (id: number) => {
  selectedTerm.value = id
  selectedGroup.value = directorGroups[0]
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
</style>
