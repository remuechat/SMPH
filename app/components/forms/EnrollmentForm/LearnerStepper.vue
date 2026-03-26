<script setup lang="ts">
import { ref, shallowRef, useTemplateRef } from 'vue'
import type { CheckboxGroupItem } from '@nuxt/ui';
import { CalendarDate } from '@internationalized/date'

// --- User's Provided Data Models ---
const learnerStatusItems = ref<CheckboxGroupItem[]>([
  {
    label: 'Balik Aral',
    description: 'Is the child a returning or balik aral student?',
    value: 'balikAralStatus'
  }, 
  {            
    label: 'Disability',
    description: 'Is the child a Learner with Disability?',
    value: 'disability'
  }, 
  {            
    label: 'IP/IC Community',
    description: 'Belonging to any Indigenous Peoples (IP) or Indigenous Cultural Community?',
    value: 'indigenousPeople'
  }, 
]) 

const extensionNameItems = ['N/A','Jr.', 'Sr.', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

const learnerStatusValue = ref([])
const extensionNameValue = ref('N/A')

const inputDate = useTemplateRef('inputDate')
const modelValue = shallowRef(new CalendarDate(2022, 1, 10))

// --- Additional Data Models for the Form ---
const psaNumber = ref('')
const lrn = ref('')
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const age = ref('')
const birthplace = ref('')
const gender = ref('')
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
]

const motherTongue = ref('Tagalog')
const motherTongueOptions = ['Tagalog', 'Cebuano', 'Ilocano', 'Hiligaynon', 'Waray', 'Bikol', 'Kapampangan', 'Pangasinense', 'Other']

// Address Models
const houseNo = ref('')
const barangay = ref('')
const municipality = ref('')
const province = ref('')
const country = ref('Philippines')
const zipCode = ref('')
const sameAsCurrent = ref(true)
</script>

<template>
  <div class="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-sm font-sans pb-12">
    
    <div class="mb-8">
      <UBadge 
        color="warning" 
        variant="soft" 
        class="mb-4 px-3 py-1 font-bold text-[10px] tracking-wider uppercase rounded-sm"
      >
        Step 2 of 4
      </UBadge>
      
      <h1 class="text-4xl font-extrabold text-[#001D6E] mb-3 tracking-tight">
        Learner Information
      </h1>
      <p class="text-slate-500 text-sm max-w-2xl leading-relaxed">
        Please ensure all details match the official civil registry documents. The information provided here will be the basis for the Learner's permanent academic record.
      </p>
    </div>

    <UCard class="mb-6 border border-slate-200 shadow-sm bg-slate-50/50" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
      <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
        <UIcon name="i-heroicons-identification" class="w-5 h-5" />
        <h2 class="text-md font-bold">Core Identifiers</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">PSA Birth Certificate Number</label>
          <UInput v-model="psaNumber" placeholder="13-digit number" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Learner Reference Number (LRN)</label>
          <UInput v-model="lrn" placeholder="12-digit permanent ID" size="lg" class="w-full bg-white" />
        </div>
      </div>
    </UCard>

    <UCard class="mb-6 border border-slate-200 shadow-sm bg-slate-50/50" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
      <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
        <UIcon name="i-heroicons-user" class="w-5 h-5" />
        <h2 class="text-md font-bold">Learner's Name</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
          <UInput v-model="lastName" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">First Name</label>
          <UInput v-model="firstName" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Middle Name</label>
          <UInput v-model="middleName" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Extension (e.g. Jr, III)</label>
          <USelectMenu v-model="extensionNameValue" :options="extensionNameItems" size="lg" class="w-full bg-white" />
        </div>
      </div>
    </UCard>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      
      <UCard class="border border-slate-200 shadow-sm bg-slate-50/50" :ui="{ root: 'rounded-2xl', body: 'p-6 h-full' }">
        <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
          <UIcon name="i-heroicons-calendar-days" class="w-5 h-5" />
          <h2 class="text-md font-bold">Birth Details</h2>
        </div>
        
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="col-span-2">
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Date of Birth</label>
            <UInputDate ref="inputDate" v-model="modelValue" size="lg" class="w-full bg-white">
              <template #trailing>
                <UPopover :reference="inputDate?.inputsRef?.[3]?.$el">
                  <UButton
                    color="neutral"
                    variant="link"
                    size="sm"
                    icon="i-lucide-calendar"
                    aria-label="Select a date"
                    class="px-0"
                  />
                  <template #content>
                    <UCalendar v-model="modelValue" class="p-2" />
                  </template>
                </UPopover>
              </template>
            </UInputDate>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Age</label>
            <UInput v-model="age" type="number" size="lg" class="w-full bg-white" />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Place of Birth (Municipality/City)</label>
          <UInput v-model="birthplace" size="lg" class="w-full bg-white" />
        </div>

        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Gender</label>
          <URadioGroup v-model="gender" :items="genderOptions" orientation="horizontal" :ui="{ label: 'text-[#1A1B22]' }" />
        </div>
      </UCard>

      <UCard class="border border-slate-200 shadow-sm bg-slate-50/50" :ui="{ root: 'rounded-2xl', body: 'p-6 h-full' }">
        <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
          <UIcon name="i-heroicons-users" class="w-5 h-5" />
          <h2 class="text-md font-bold">Background</h2>
        </div>

        <div class="mb-6">
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Mother Tongue</label>
          <USelectMenu v-model="motherTongue" :options="motherTongueOptions" size="lg" class="w-full bg-white" />
        </div>

        <div class="mb-2">
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Learner's Status</label>
          <LazyUCheckboxGroup 
            v-model="learnerStatusValue" 
            :items="learnerStatusItems" 
            :ui="{ label: 'text-[#1A1B22] font-medium', description: 'text-slate-500 text-xs' }"
          />
        </div>
      </UCard>
    </div>

    <UCard class="mb-8 border border-slate-200 shadow-sm bg-slate-50/50" :ui="{ root: 'rounded-2xl', body: 'p-6' }">
      <div class="flex items-center gap-2 mb-6 text-[#001D6E]">
        <UIcon name="i-heroicons-home" class="w-5 h-5" />
        <h2 class="text-md font-bold">Residential Address</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">House No. / Street</label>
          <UInput v-model="houseNo" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Barangay</label>
          <UInput v-model="barangay" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Municipality/City</label>
          <UInput v-model="municipality" size="lg" class="w-full bg-white" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Province</label>
          <UInput v-model="province" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Country</label>
          <UInput v-model="country" size="lg" class="w-full bg-white" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Zip Code</label>
          <UInput v-model="zipCode" size="lg" class="w-full bg-white" />
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200">
        <UCheckbox v-model="sameAsCurrent" label="Permanent Address is the same as Current Address" :ui="{ label: 'text-sm font-medium text-[#1A1B22]' }" />
      </div>
    </UCard>

    <div class="flex justify-between items-center py-4 border-b border-slate-200 pb-12">
      <UButton 
        variant="ghost" 
        icon="i-heroicons-arrow-left" 
        label="Back" 
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