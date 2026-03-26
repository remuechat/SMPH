<script setup lang="ts">
import { ref } from 'vue'

// Data for the School Year Dropdown
const schoolYears = ['2023 - 2024', '2024 - 2025', '2025 - 2026']
const selectedYear = ref(schoolYears[1])

// Data for the Enrollment Type Radio Buttons
const enrollmentTypes = [
  { value: 'new', label: 'New Learner' },
  { value: 'returning', label: 'Returning (Balik-Aral)' }
]
const selectedEnrollment = ref('new')

// FIXED: Expanded grade levels to include Junior High and Senior High
const gradeLevels = [
  'Kinder', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
  'Grade 11', 'Grade 12'
]
const selectedGrade = ref('Grade 1')
</script>

<template>
  <div class="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-sm font-sans pb-12">
    
    <div class="mb-8">
      <UBadge 
        color="warning" 
        variant="soft" 
        class="mb-4 px-3 py-1 font-bold text-[10px] tracking-wider uppercase rounded-sm"
      >
        Step 1 of 4
      </UBadge>
      
      <h1 class="text-4xl font-extrabold text-[#001D6E] mb-3 tracking-tight">
        School Information
      </h1>
      <p class="text-slate-500 text-sm max-w-2xl leading-relaxed">
        To begin your application, please specify the academic parameters for the upcoming school year. This ensures we assign the learner to the correct curriculum and facility.
      </p>
    </div>

    <UCard 
      class="mb-8 border border-slate-200 shadow-sm bg-slate-50/50" 
      :ui="{ root: 'rounded-2xl', body: 'p-8 mt-2' }"
    >
      <div class="flex items-center gap-3 mb-8">
        <div class="h-5 w-1 bg-red-600 rounded-full"></div>
        <h2 class="text-lg font-bold text-[#001D6E]">Academic Placement</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            School Year
          </label>
          <USelectMenu 
            v-model="selectedYear" 
            :options="schoolYears" 
            size="lg" 
            class="w-full bg-white"
          />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
            Enrollment Type
          </label>
          <div class="mt-2">
            <URadioGroup 
              v-model="selectedEnrollment" 
              :items="enrollmentTypes" 
              orientation="horizontal"
              :ui="{ label: 'text-[#1A1B22]' }"
            />
          </div>
        </div>
      </div>

      <div>
        <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
          Grade Level to Enroll
        </label>
        <div class="flex flex-wrap gap-2 mt-3">
          <UButton
            v-for="grade in gradeLevels"
            :key="grade"
            :label="grade"
            :color="selectedGrade === grade ? 'primary' : 'neutral'"
            :variant="selectedGrade === grade ? 'solid' : 'soft'"
            @click="selectedGrade = grade"
            class="flex-none justify-center py-2.5 px-4 font-semibold transition-all min-w-[90px]"
            :class="selectedGrade === grade ? 'bg-[#001D6E] text-white hover:bg-[#001D6E]/90' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'"
          />
        </div>
      </div>
    </UCard>

    <div class="relative bg-[#001D6E] rounded-2xl p-8 overflow-hidden mb-8 shadow-md">
      <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      <div class="relative z-10">
        <h3 class="text-xl font-bold text-white mb-2">Shape the Future.</h3>
        <p class="text-sm text-blue-200 max-w-sm leading-relaxed">
          Every child deserves a quality education that nurtures their unique potential.
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center py-4 border-b border-slate-200 pb-12">
      <UButton 
        variant="ghost" 
        icon="i-heroicons-arrow-left" 
        label="Back to Portal" 
        class="font-bold text-[#001D6E] hover:bg-transparent hover:text-blue-800 px-0" 
      />
      <UButton 
        color="primary" 
        icon="i-heroicons-arrow-right" 
        trailing 
        label="Save and Continue" 
        size="lg" 
        class="bg-[#001D6E] hover:bg-[#001550] text-white rounded-xl px-6 py-2.5 shadow-md font-semibold" 
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-slate-500 text-xs">
      <div>
        <h4 class="font-bold text-[#001D6E] text-sm mb-2">DepEd Portal</h4>
        <p class="leading-relaxed pr-4">
          The official digital enrollment channel for the Department of Education, Republic of the Philippines.
        </p>
      </div>
      <div>
        <h4 class="font-bold text-[#001D6E] text-xs uppercase tracking-wider mb-3">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-[#001D6E] transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-[#001D6E] transition-colors">Terms of Service</a></li>
          <li><a href="#" class="hover:text-[#001D6E] transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div class="md:text-right flex flex-col justify-between">
        <p class="mb-4 md:mb-0">© 2024 Department of Education. All Rights Reserved.</p>
        <div class="flex gap-3 md:justify-end text-lg text-slate-400">
          <UIcon name="i-heroicons-check-badge" class="w-5 h-5" />
          <UIcon name="i-heroicons-globe-alt" class="w-5 h-5" />
        </div>
      </div>
    </div>

  </div>
</template>