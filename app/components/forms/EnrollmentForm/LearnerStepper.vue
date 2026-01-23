<script setup lang="ts">
    import type { CheckboxGroupItem } from '@nuxt/ui';
    import { CalendarDate } from '@internationalized/date'

    const learnerStatusItems = ref<CheckboxGroupItem[]>([
        {
            label: 'Balik Aral',
            description: 'Is the child a returning or balik aral student?',
            value: 'balikAralStatus'
        }, {            
            label: 'Disability',
            description: 'Is the child a Learner with Disability?',
            value: 'disability'
        }, {            
            label: 'IP/IC Community',
            description: 'Belonging to any Indigenous Peoples (IP) or Indigenous Cultural Community?',
            value: 'indigenousPeople'
        }, 
    ]) 
    
    const extensionNameItems = ref(['N/A','Jr.', 'Sr.', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'])

    const learnerStatusValue = ref([])
    const extensionNameValue = ref('')

    const inputDate = useTemplateRef('inputDate')
    const modelValue = shallowRef(new CalendarDate(2022, 1, 10))
</script>

<template>
    <div>
        <div>
            <p>Learner Resource Number (LRN)</p>
            <UInput/>
        </div>
        <div>    
            <p>First Name</p>
            <UInput/>
        </div>
        <div>    
            <p>Middle Name</p>
            <UInput/>
        </div>
        <div>    
            <p>Last Name</p>
            <UInput/>
        </div>
        <div>
            <p>Extension (N/A if not applicable)</p>
            <USelect :value="extensionNameValue" :items="extensionNameItems"></USelect>
        </div>
    </div>

    <div>
        <div>
            <p>Birthdate</p>
            <UInputDate ref="inputDate" v-model="modelValue">
                <template #trailing>
                <UPopover :reference="inputDate?.inputsRef[3]?.$el">
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
            <p>Birthplace (Municipality/City)</p>
            <UInput />
        </div>
    </div>

    <div>
        <p>Learner's Status</p>
        <LazyUCheckboxGroup v-model="learnerStatusValue" :items="learnerStatusItems" />
    </div>
</template>