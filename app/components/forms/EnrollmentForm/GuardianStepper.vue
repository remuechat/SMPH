<script setup lang="ts">
import { ref } from 'vue'

// --- Father's Details ---
const fatherName = ref('')
const fatherContact = ref('')

// --- Mother's Details ---
const motherName = ref('')
const motherContact = ref('')

// --- Guardian's Details ---
const guardianNotApplicable = ref(false)
const guardianName = ref('')
const guardianRelationship = ref('')

// --- Address Details ---
const houseNo = ref('')
const barangay = ref('')
const municipality = ref('')
const province = ref('')
const country = ref('Philippines')
const zipCode = ref('')
</script>

<template>
  <div class="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-sm font-sans pb-12">
    
    <div class="mb-8 relative">
      <UBadge 
        color="warning" 
        variant="soft" 
        class="mb-4 px-3 py-1 font-bold text-[10px] tracking-wider uppercase rounded-sm"
      >
        Step 3 of 4
      </UBadge>
      
      <div class="mb-3">
        <h1 class="text-4xl font-extrabold text-[#001D6E] tracking-tight">
          Parent & Guardian Information
        </h1>
      </div>

      <p class="text-slate-500 text-sm max-w-2xl leading-relaxed">
        "The foundation of every student's success is a strong partnership between home and school."
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      
      <div class="relative bg-white border border-slate-200 shadow-sm rounded-2xl p-6 overflow-hidden">
        <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
        <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
          <UIcon name="i-heroicons-user" class="w-5 h-5" />
          <h2 class="text-md font-bold">Father's Details</h2>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name (Last, First, Middle)</label>
            <UInput v-model="fatherName" placeholder="e.g., DELA CRUZ, JUAN PEDRO" size="lg" class="w-full" variant="outline" />
          </div>
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Contact Number</label>
            <UInput v-model="fatherContact" placeholder="+63 9XX XXX XXXX" size="lg" class="w-full" variant="outline" />
          </div>
        </div>
      </div>

      <div class="relative bg-white border border-slate-200 shadow-sm rounded-2xl p-6 overflow-hidden">
        <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
        <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
          <UIcon name="i-heroicons-user" class="w-5 h-5" />
          <h2 class="text-md font-bold">Mother's Maiden Name</h2>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name (Last, First, Middle)</label>
            <UInput v-model="motherName" placeholder="e.g., SANTOS, MARIA CLARA" size="lg" class="w-full" variant="outline" />
          </div>
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Contact Number</label>
            <UInput v-model="motherContact" placeholder="+63 9XX XXX XXXX" size="lg" class="w-full" variant="outline" />
          </div>
        </div>
      </div>

    </div>

    <div class="relative bg-slate-50/50 border border-slate-200 shadow-sm rounded-2xl p-6 overflow-hidden mb-6">
      <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
      
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <div class="flex items-center gap-2 text-[#001D6E] mb-1">
            <UIcon name="i-heroicons-users" class="w-5 h-5" />
            <h2 class="text-md font-bold">Legal Guardian Details</h2>
          </div>
          <p class="text-[11px] text-slate-400 ml-7">Fill out only if the student is not living with parents.</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-lg px-3 py-1.5">
          <UCheckbox v-model="guardianNotApplicable" label="NOT APPLICABLE" :ui="{ label: 'text-[10px] font-bold text-slate-500 uppercase tracking-wider' }" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name (Last, First, Middle)</label>
          <UInput v-model="guardianName" :disabled="guardianNotApplicable" placeholder="Full Legal Name" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Relationship to Learner</label>
          <UInput v-model="guardianRelationship" :disabled="guardianNotApplicable" placeholder="e.g., Grandmother, Aunt, Uncle" size="lg" class="w-full bg-white" />
        </div>
      </div>
    </div>

    <UCard class="mb-8 border border-slate-200 shadow-sm bg-slate-50/50" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
      <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
        <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
        <h2 class="text-md font-bold">Current Residence</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">House No. / Street</label>
              <UInput v-model="houseNo" placeholder="123 Mabini St." variant="none" class="w-full border-b border-slate-300 focus-within:border-[#001D6E] transition-colors rounded-none px-0 pb-1" />
            </div>
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Barangay</label>
              <UInput v-model="barangay" placeholder="Brgy. 01" variant="none" class="w-full border-b border-slate-300 focus-within:border-[#001D6E] transition-colors rounded-none px-0 pb-1" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Municipality / City</label>
              <UInput v-model="municipality" placeholder="Manila City" variant="none" class="w-full border-b border-slate-300 focus-within:border-[#001D6E] transition-colors rounded-none px-0 pb-1" />
            </div>
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Province</label>
              <UInput v-model="province" placeholder="Metro Manila" variant="none" class="w-full border-b border-slate-300 focus-within:border-[#001D6E] transition-colors rounded-none px-0 pb-1" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Country</label>
              <UInput v-model="country" placeholder="Philippines" variant="none" class="w-full border-b border-slate-300 focus-within:border-[#001D6E] transition-colors rounded-none px-0 pb-1" />
            </div>
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Zip Code</label>
              <UInput v-model="zipCode" placeholder="1000" variant="none" class="w-full border-b border-slate-300 focus-within:border-[#001D6E] transition-colors rounded-none px-0 pb-1" />
            </div>
          </div>
        </div>

        <div class="relative h-64 lg:h-auto rounded-xl overflow-hidden bg-blue-100 border border-slate-200">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-multiply"></div>
          
          <div class="absolute inset-0 flex items-center justify-center">
            <UButton 
              label="VERIFY LOCATION" 
              icon="i-heroicons-map-pin" 
              color="neutral" 
              class="bg-white text-[#001D6E] font-bold text-[10px] tracking-wider rounded-full px-5 py-2 shadow-lg hover:bg-slate-50 hover:scale-105 transition-all" 
            />
          </div>
          
          <div class="absolute bottom-4 left-4 bg-[#001D6E]/80 backdrop-blur-sm text-white text-[10px] px-3 py-1.5 rounded-lg flex items-center gap-2">
            <UIcon name="i-heroicons-home" class="w-3 h-3" />
            NEW! PIN ADDRESS
          </div>
        </div>
      </div>
    </UCard>

    <div class="flex justify-between items-center py-4 border-b border-slate-200 pb-12">
      <UButton 
        variant="ghost" 
        icon="i-heroicons-arrow-left" 
        label="BACK TO LEARNER INFO" 
        class="font-bold text-[#001D6E] text-xs tracking-wider uppercase hover:bg-transparent hover:text-blue-800 px-0" 
      />
      
      <div class="flex items-center gap-4">
        <UButton 
          variant="ghost" 
          label="Save Draft" 
          class="text-slate-400 text-xs hover:text-slate-600 hover:bg-transparent" 
        />
        <UButton 
          color="primary" 
          icon="i-heroicons-arrow-right" 
          trailing 
          label="SAVE AND CONTINUE" 
          size="lg" 
          class="bg-[#001D6E] hover:bg-[#001550] text-white text-xs tracking-wider rounded-xl px-6 py-2.5 shadow-md font-bold" 
        />
      </div>
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