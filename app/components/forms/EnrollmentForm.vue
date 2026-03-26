<script setup lang="ts">
import { ref } from 'vue'
import type { StepperItem } from '@nuxt/ui'
import LearnerStepper from './EnrollmentForm/LearnerStepper.vue';
import GuardianStepper from './EnrollmentForm/GuardianStepper.vue';
import RequirementsStepper from './EnrollmentForm/RequirementsStepper.vue';
import SchoolStepper from './EnrollmentForm/SchoolStepper.vue';

// State to track which step the user is currently on (0-indexed)
const activeStep = ref(0)

const items = [
  {
    slot: 'SchoolInfo' as const,
    title: 'School Info',
  }, {
    slot: 'LearnerInfo' as const,
    title: 'Learner Info',
  }, {
    slot: 'GuardianInfo' as const,
    title: 'Guardian Info',
  }, {
    slot: 'RequirementsInfo' as const,
    title: 'Requirements'
  }
] satisfies StepperItem[]

// HELPER FUNCTION: Finds the index of the current step since Nuxt UI doesn't expose it directly
const getStepIndex = (slotName: string) => {
  return items.findIndex(item => item.slot === slotName)
}
</script>

<template>
  <div class="enrollment-card relative">
    
    <div class="max-w-5xl mx-auto px-4 md:px-8 pt-10 pb-4">
      <UStepper v-model="activeStep" :items="items" class="w-full">
        
        <template #indicator="{ item }">
          <div v-if="getStepIndex(item.slot) < activeStep" class="w-11 h-11 rounded-[14px] bg-[#10b981] flex items-center justify-center text-white border-4 border-white shadow-sm z-10 transition-all">
            <UIcon name="i-heroicons-check" class="w-6 h-6 font-bold" />
          </div>
          
          <div v-else-if="getStepIndex(item.slot) === activeStep" class="w-11 h-11 rounded-[14px] bg-[#001D6E] flex items-center justify-center text-white ring-4 ring-indigo-100 shadow-sm z-10 transition-all">
            <span class="font-bold text-lg">{{ getStepIndex(item.slot) + 1 }}</span>
          </div>
          
          <div v-else class="w-11 h-11 rounded-[14px] bg-[#e2e8f0] flex items-center justify-center text-slate-500 border-4 border-[#F4F3FD] shadow-sm z-10 transition-all">
            <span class="font-bold text-lg">{{ getStepIndex(item.slot) + 1 }}</span>
          </div>
        </template>

        <template #title="{ item }">
          <span 
            class="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-3 block transition-colors"
            :class="getStepIndex(item.slot) === activeStep ? 'text-[#001D6E]' : (getStepIndex(item.slot) < activeStep ? 'text-slate-600' : 'text-slate-400')"
          >
            {{ item.title }}
          </span>
        </template>

        <template #SchoolInfo>
          <div class="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SchoolStepper />
          </div>
        </template>

        <template #LearnerInfo>
          <div class="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <LearnerStepper />
          </div>
        </template>

        <template #GuardianInfo>
          <div class="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <GuardianStepper />
          </div>
        </template>

        <template #RequirementsInfo>
          <div class="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <RequirementsStepper />
          </div>
        </template>

      </UStepper>
    </div>

    <div class="fixed bottom-8 right-8 z-50">
      <UButton
        icon="i-heroicons-question-mark-circle"
        label="Need Help?"
        size="lg"
        class="bg-[#725a1e] hover:bg-[#5c4818] text-white shadow-lg rounded-xl px-5 py-2.5 font-bold transition-transform hover:scale-105"
      />
    </div>
  </div>
</template>

<style scoped>
  .enrollment-card {
    background-color: #F4F3FD;
    margin: 1.5em;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    border-radius: 16px;
    min-height: 85vh; /* Ensures the background color stretches nicely */
    overflow: hidden; 
  }
</style>