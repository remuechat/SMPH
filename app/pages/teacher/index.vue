<script setup lang="ts">
import { useTeacherDashboard } from '~/compostables/useTeacherDashboard';

const schedule = [
  { 
    id: 1, 
    time: '09:00 AM - 10:30 AM', 
    title: 'Advanced Algebra (Honors)', 
    room: 'Room 402', 
    badge: '24 Students', 
    badgeColor: 'info',
    status: '09',
    isActive: false
  },
  { 
    id: 2, 
    time: '11:00 AM - 12:00 PM', 
    title: 'Curriculum Committee Meeting', 
    room: 'Online (Link Shared)', 
    badge: 'Staff Only', 
    badgeColor: 'neutral',
    status: '11',
    isActive: false
  },
  { 
    id: 3, 
    time: '01:30 PM - 03:00 PM', 
    title: 'Intro to Statistics', 
    room: 'Lecture Hall B', 
    badge: 'In Progress', 
    badgeColor: 'success',
    status: '13',
    isActive: true
  }
]

const tasks = [
  { icon: 'i-heroicons-exclamation-circle', iconColor: 'text-red-500', title: 'Grade Mid-term Calculus', desc: 'Due today • 32 submissions' },
  { icon: 'i-heroicons-bars-3-bottom-left', iconColor: 'text-blue-500', title: 'Advisory Notes: Group B', desc: 'Due tomorrow • 12 notes pending' },
  { icon: 'i-heroicons-check-circle', iconColor: 'text-emerald-500', title: 'Approve Field Trip Forms', desc: '5 forms awaiting review' }
]

const quickLinks = [
  { label: 'Gradebook', icon: 'i-heroicons-book-open', to: '/teacher/gradebook' },
  { label: 'Enrollment', icon: 'i-heroicons-user-plus', to: '/enrollment' },
  { label: 'Classes', icon: 'i-heroicons-academic-cap', to: '/teacher/slug-class' }
]
</script>

<template>
  <UDashboardPanel id="home">
    <template #body>            
      <div class="max-w-7xl mx-auto space-y-8">

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-bold text-[#1e3a8a] tracking-tight">Home</h1>
            <p class="text-gray-500 mt-1">Welcome back, Sarah. You have 4 classes scheduled for today.</p>
          </div>
          <UButton 
            icon="i-heroicons-plus-circle" 
            label="Post Announcement" 
            class="bg-[#0f4c3a] hover:bg-[#0a382a] text-white px-4 py-2 rounded-lg shadow-sm font-medium"
          />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div class="lg:col-span-7 xl:col-span-8 space-y-8">
            
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <div class="w-1 h-5 bg-[#22c55e] rounded-sm"></div>
                <h2 class="text-lg font-semibold text-slate-900">Teacher Dashboard</h2>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <NuxtLink 
                  v-for="(link, index) in quickLinks" 
                  :key="index"
                  :to="link.to"
                  class="bg-[#0f4c3a] rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#0a382a] transition-colors"
                >
                  <div class="w-12 h-12 bg-[#6ee7b7] rounded-full flex items-center justify-center">
                    <UIcon :name="link.icon" class="w-6 h-6 text-[#0f4c3a]" />
                  </div>
                  <span class="text-white font-medium">{{ link.label }}</span>
                </NuxtLink>
              </div>
            </div>

            <div class="pt-2">
              <div class="flex items-center justify-between mb-2">
                <h2 class="text-xl font-bold text-[#1e3a8a]">Today's Schedule</h2>
                <UButton label="Full Calendar →" variant="link" color="primary" class="font-semibold text-[#1e3a8a]" />
              </div>
              
              <div class="relative pl-4 space-y-4 pt-2">
                <div class="absolute left-[31px] top-4 bottom-4 w-px bg-gray-200"></div>
                
                <div v-for="item in schedule" :key="item.id" class="flex gap-4 relative z-10">
                  <div 
                    class="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-2 ring-4 ring-white" 
                    :class="item.isActive ? 'bg-[#4ade80] text-[#0f4c3a]' : 'bg-[#1e3a8a] text-white'"
                  >
                    {{ item.status }}
                  </div>
                  
                  <div 
                    class="flex-1 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border shadow-sm transition-colors"
                    :class="item.isActive ? 'bg-[#f0fdf4] border-[#bbf7d0]' : 'bg-gray-50 border-gray-100'"
                  >
                    <div>
                      <h3 class="font-semibold text-slate-900">{{ item.title }}</h3>
                      <div class="flex items-center gap-4 text-xs text-gray-500 mt-2">
                        <span class="flex items-center gap-1"><UIcon name="i-heroicons-clock" class="w-4 h-4" /> {{ item.time }}</span>
                        <span class="flex items-center gap-1"><UIcon name="i-heroicons-map-pin" class="w-4 h-4" /> {{ item.room }}</span>
                      </div>
                    </div>
                    <UBadge :color="item.badgeColor as any" variant="soft" class="shrink-0 justify-center text-xs font-semibold px-2.5 py-1">{{ item.badge }}</UBadge>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="lg:col-span-5 xl:col-span-4 space-y-6">
            
            <UCard class="shadow-sm ring-1 ring-gray-100 rounded-xl" :ui="{ body: 'p-4', header: 'p-4 pb-0' }">
              <template #header>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="font-semibold text-slate-900">Pending Tasks</h3>
                  <UBadge color="error" variant="soft" size="xs" class="bg-red-100 text-red-600 font-bold px-2 py-0.5">4 ACTION ITEMS</UBadge>
                </div>
              </template>
              <div class="space-y-3">
                <div v-for="task in tasks" :key="task.title" class="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <UIcon :name="task.icon" :class="task.iconColor" class="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p class="text-sm font-semibold text-slate-900">{{ task.title }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ task.desc }}</p>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard class="shadow-sm ring-1 ring-gray-100 rounded-xl" :ui="{ body: 'p-5' }">
              <h3 class="font-semibold text-slate-900 mb-6">Attendance Overview</h3>
              <div class="flex items-center gap-6">
                
                <div class="relative w-24 h-24 shrink-0 flex items-center justify-center">
                  <svg class="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="38" stroke="currentColor" stroke-width="8" fill="transparent" class="text-gray-100" />
                    <circle cx="48" cy="48" r="38" stroke="currentColor" stroke-width="8" fill="transparent" class="text-[#34d399]" stroke-dasharray="238.7" stroke-dashoffset="14.3" stroke-linecap="round" />
                  </svg>
                  <div class="text-center z-10 flex flex-col items-center justify-center mt-1">
                    <span class="block text-xl font-bold text-slate-900 leading-none">94%</span>
                    <span class="block text-[8px] text-gray-500 font-bold tracking-widest uppercase mt-1">PRESENT</span>
                  </div>
                </div>
                
                <div class="flex-1 space-y-2.5 text-sm">
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2 text-gray-600"><span class="w-2.5 h-2.5 rounded-full bg-[#34d399]"></span> Present</span> 
                    <span class="font-semibold text-slate-900">112</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2 text-gray-600"><span class="w-2.5 h-2.5 rounded-full bg-red-200"></span> Absent</span> 
                    <span class="font-semibold text-slate-900">4</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="flex items-center gap-2 text-gray-600"><span class="w-2.5 h-2.5 rounded-full bg-blue-200"></span> Late</span> 
                    <span class="font-semibold text-slate-900">7</span>
                  </div>
                </div>
              </div>
            </UCard>

            <div class="bg-[#1e3a8a] rounded-xl p-6 text-white relative overflow-hidden shadow-sm">
              <div class="relative z-10">
                <h3 class="font-bold text-lg">Advisory Group A</h3>
                <p class="text-blue-200 text-sm mt-1 mb-5">4 students require attention this week.</p>
                <UButton 
                  label="Review Profiles" 
                  variant="outline" 
                  color="neutral" 
                  class="hover:bg-blue-800 text-white border-blue-400/50 bg-blue-900/30 font-medium"
                />
              </div>
              <UIcon name="i-heroicons-users" class="absolute -bottom-6 -right-4 w-32 h-32 text-blue-800 opacity-50" />
            </div>

          </div>
        </div>

      </div>         
    </template>
  </UDashboardPanel>
</template>