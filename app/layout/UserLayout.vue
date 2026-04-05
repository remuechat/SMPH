<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// Updated links with "to" destinations
const links = [
  { label: 'Home', icon: 'i-heroicons-home', to: '/teacher' },
  { label: 'Reports', icon: 'i-heroicons-chart-bar', to: '/teacher/reports' },
  { label: 'Advisory', icon: 'i-heroicons-user-group', to: '/teacher/advisory' },
  { label: 'Classes', icon: 'i-heroicons-academic-cap', to: '/teacher/classes' },
  { label: 'Committee', icon: 'i-heroicons-users', to: '/teacher/committee' }
]

const bottomLinks = [
  { label: 'Settings', icon: 'i-heroicons-cog-8-tooth' },
  { label: 'Logout', icon: 'i-heroicons-arrow-right-on-rectangle' }
]

// Note: I removed the `schedule`, `tasks`, and `quickLinks` arrays from here! 
// You should move those into your individual page files (e.g., pages/teacher/index.vue)
</script>

<template>
  <div class="min-h-screen bg-white flex w-full font-sans">
    
    <aside class="w-64 border-r border-gray-100 flex-col justify-between hidden lg:flex shrink-0">
      <div>
        <div class="h-16 flex items-center px-6 gap-3 border-b border-gray-50">
          <div class="w-8 h-8 rounded bg-[#1e3a8a] text-white flex items-center justify-center">
            <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
          </div>
          <div>
            <h1 class="text-[#1e3a8a] font-bold text-lg leading-tight">SchoolMaster</h1>
            <p class="text-[10px] text-gray-400 font-semibold tracking-wider">ACADEMIC EXCELLENCE</p>
          </div>
        </div>

        <nav class="p-4 space-y-1 mt-2">
          <NuxtLink 
            v-for="link in links" 
            :key="link.label"
            :to="link.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium transition-colors relative"
            :class="route.path === link.to ? 'text-[#1e3a8a] bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'"
          >
            <div v-if="route.path === link.to" class="absolute left-0 top-2 bottom-2 w-1 bg-[#22c55e] rounded-r"></div>
            <UIcon :name="link.icon" class="w-5 h-5" :class="route.path === link.to ? 'text-[#1e3a8a]' : 'text-gray-400'" />
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="p-4 space-y-4 mb-4">
        <UButton 
          label="Quick Gradebook" 
          icon="i-heroicons-bars-3-bottom-left" 
          class="w-full justify-center bg-[#0a1b4d] hover:bg-[#071336] text-white py-2.5 rounded-lg"
        />
        <div class="space-y-1 pt-4 border-t border-gray-100">
          <div 
            v-for="link in bottomLinks" 
            :key="link.label"
            class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
          >
            <UIcon :name="link.icon" class="w-5 h-5 text-gray-400" />
            {{ link.label }}
          </div>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex flex-col min-w-0">
      
      <header class="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0">
        <div class="flex-1 max-w-xl">
          <UInput 
            icon="i-heroicons-magnifying-glass" 
            placeholder="Search students, classes, or reports..." 
            class="w-full max-w-md hidden md:block" 
            color="neutral"
            variant="none"
            :ui="{ root: 'bg-gray-100 rounded-full px-2' }"
          />
        </div>
        <div class="flex items-center gap-2">
          <UButton icon="i-heroicons-bell" color="neutral" variant="ghost" class="text-gray-400" />
          <UButton icon="i-heroicons-calendar" color="neutral" variant="ghost" class="text-gray-400" />
          <span class="text-sm text-gray-600 px-2 font-medium cursor-pointer hover:text-gray-900">Help Center</span>
          <div class="flex items-center gap-3 border-l border-gray-200 pl-4 ml-2">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-semibold text-gray-900 leading-tight">Prof. Sarah Jenkins</p>
              <p class="text-[11px] text-gray-500">Mathematics Dept.</p>
            </div>
            <UAvatar src="https://i.pravatar.cc/150?u=sarah" alt="Prof. Sarah Jenkins" size="sm" />
          </div>
        </div>
      </header>

      <div class="flex-1 overflow-auto p-6 md:p-8 bg-white">
        <slot></slot>
      </div>
      
    </main>
  </div>
</template>