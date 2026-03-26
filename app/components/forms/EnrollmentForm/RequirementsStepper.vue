<script setup lang="ts">
import { ref } from 'vue'

// --- Form State ---
const consentChecked = ref(false)

// Optional: You can create a reusable function to trigger a hidden file input later
const triggerFileInput = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.click()
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-sm font-sans pb-12">
    
    <div class="mb-8 text-center md:text-left">
      <UBadge 
        color="warning" 
        variant="soft" 
        class="mb-4 px-3 py-1 font-bold text-[10px] tracking-wider uppercase rounded-sm mx-auto md:mx-0"
      >
        Step 4 of 4
      </UBadge>
      
      <h1 class="text-4xl font-extrabold text-[#001D6E] tracking-tight mb-3">
        Document Requirements
      </h1>

      <p class="text-slate-500 text-sm max-w-2xl leading-relaxed mx-auto md:mx-0">
        Please upload scanned copies of the following documents to complete your application. High-quality JPEG, PNG, or PDF files are preferred.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      
      <UCard class="border border-slate-200 shadow-sm" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="bg-blue-50 text-blue-600 p-2 rounded-lg">
              <UIcon name="i-heroicons-identification" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-[#001D6E]">PSA Birth Certificate</h3>
              <UBadge color="error" variant="soft" class="text-[9px] font-bold px-1.5 py-0 mt-0.5">REQUIRED</UBadge>
            </div>
          </div>
        </div>
        <div @click="triggerFileInput('psa-upload')" class="border-2 border-dashed border-indigo-200 bg-indigo-50/30 hover:bg-indigo-50/60 transition-colors rounded-xl p-6 text-center cursor-pointer group">
          <UIcon name="i-heroicons-cloud-arrow-up" class="w-8 h-8 text-indigo-400 group-hover:text-indigo-600 mx-auto mb-2 transition-colors" />
          <p class="text-xs text-slate-600 font-medium mb-1">
            Drag and drop file here or <span class="text-blue-600 underline">browse</span>
          </p>
          <p class="text-[10px] text-slate-400">PNG, JPG, HEIC, PDF, DOCX (5MB max)</p>
          <input type="file" id="psa-upload" class="hidden" accept=".png,.jpg,.jpeg,.heic,.pdf,.docx" />
        </div>
      </UCard>

      <UCard class="border border-slate-200 shadow-sm" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="bg-blue-50 text-blue-600 p-2 rounded-lg">
              <UIcon name="i-heroicons-camera" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-[#001D6E]">Passport Size (2x2) Picture</h3>
              <UBadge color="error" variant="soft" class="text-[9px] font-bold px-1.5 py-0 mt-0.5">REQUIRED</UBadge>
            </div>
          </div>
        </div>
        <div @click="triggerFileInput('pic-upload')" class="border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl p-6 text-center cursor-pointer group">
          <UIcon name="i-heroicons-document-arrow-up" class="w-8 h-8 text-slate-400 group-hover:text-blue-600 mx-auto mb-2 transition-colors" />
          <p class="text-xs text-slate-600 font-medium mb-1">Upload a recent picture of your child</p>
          <p class="text-[10px] text-slate-400">PNG, JPG, HEIC (10MB max)</p>
          <input type="file" id="pic-upload" class="hidden" accept=".png,.jpg,.jpeg,.heic" />
        </div>
      </UCard>

      <UCard class="border border-slate-200 shadow-sm" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="bg-blue-50 text-blue-600 p-2 rounded-lg">
              <UIcon name="i-heroicons-document-text" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-[#001D6E]">Form 138 / Grade Report Card</h3>
              <UBadge color="error" variant="soft" class="text-[9px] font-bold px-1.5 py-0 mt-0.5">REQUIRED</UBadge>
            </div>
          </div>
        </div>
        <div @click="triggerFileInput('form138-upload')" class="border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl p-6 text-center cursor-pointer group">
          <UIcon name="i-heroicons-document-arrow-up" class="w-8 h-8 text-slate-400 group-hover:text-blue-600 mx-auto mb-2 transition-colors" />
          <p class="text-xs text-slate-600 font-medium mb-1">Upload current grade level report</p>
          <p class="text-[10px] text-slate-400">Max size: 5MB (PDF, JPG, PNG)</p>
          <input type="file" id="form138-upload" class="hidden" accept=".png,.jpg,.jpeg,.pdf" />
        </div>
      </UCard>

      <UCard class="border border-slate-200 shadow-sm" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="bg-blue-50 text-blue-600 p-2 rounded-lg">
              <UIcon name="i-heroicons-pencil-square" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-[#001D6E]">Signed Consent Form</h3>
              <UBadge color="error" variant="soft" class="text-[9px] font-bold px-1.5 py-0 mt-0.5">REQUIRED</UBadge>
            </div>
          </div>
          <UButton variant="link" icon="i-heroicons-arrow-down-tray" label="Template" class="text-[10px] px-0 text-blue-600 font-bold" />
        </div>
        <div @click="triggerFileInput('consent-upload')" class="border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl p-6 text-center cursor-pointer group">
          <UIcon name="i-heroicons-document-arrow-up" class="w-8 h-8 text-slate-400 group-hover:text-blue-600 mx-auto mb-2 transition-colors" />
          <p class="text-xs text-slate-600 font-medium mb-1">Upload the signed consent form</p>
          <p class="text-[10px] text-slate-400">Max size: 5MB (PDF, JPG, PNG)</p>
          <input type="file" id="consent-upload" class="hidden" accept=".png,.jpg,.jpeg,.pdf" />
        </div>
      </UCard>

    </div>

    <div class="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 mb-8">
      <div class="flex items-start gap-4">
        <UCheckbox 
        v-model="consentChecked" 
        color="warning" 
        size="md"
        class="mt-1" 
        />
        <p class="text-xs text-amber-900 leading-relaxed font-medium">
          I hereby certify that the above information given are true and correct to the best of my knowledge and I allow the Department of Education to use my child’s details to create and/or update his/her learner profile in the Learner Information System. The information herein shall be treated as confidential in compliance with the Data Privacy Act of 2012.
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center py-4 border-b border-slate-200 pb-12">
      <UButton 
        variant="outline" 
        icon="i-heroicons-arrow-left" 
        label="Back to Guardian Info" 
        color="primary"
        class="font-bold text-[#001D6E] text-xs tracking-wider rounded-xl px-5 py-2 hover:bg-slate-50 border-slate-300" 
      />
      <UButton 
        color="primary" 
        trailing 
        label="Submit Enrollment" 
        size="lg" 
        :disabled="!consentChecked"
        class="bg-[#001D6E] hover:bg-[#001550] text-white text-xs tracking-wider rounded-xl px-8 py-2.5 shadow-md font-bold disabled:opacity-50 disabled:cursor-not-allowed" 
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