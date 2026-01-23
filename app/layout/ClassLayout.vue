<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import RollCallModel from '~/components/common/RollCallModel.vue';

import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();
const classID: string = String(route.params.code);

interface BaseMenuItem {
    label: string
    to?: string
    icon: string
    children?: BaseMenuItem
}

const menuItem = ref<BaseMenuItem[]>([
    {
        label: 'Attendance',
        icon: 'i-lucide-user',
        to: `/teacher/${classID}/attendance`, // Absolute path
    }, {
        label: 'Gradebook',
        icon: 'i-lucide-table-properties',
        to: `/teacher/${classID}/gradebook`,
    }, {
        label: 'Assessments',
        icon: 'i-lucide-scroll-text',
        to: `/teacher/${classID}/assessments`,
    }, {
        label: 'Lesson Plan',
        icon: 'i-lucide-book-text',
        to: `/teacher/${classID}/lesson-plan`,
    }, {
        label: 'School Forms',
        icon: 'i-lucide-form',
        to: `/teacher/${classID}/school-forms`,
    }, {
        label: 'Equipment',
        icon: 'i-lucide-cable',
        to: `/teacher/${classID}/equipment`, // Fixed: Added slash
    }, {
        label: 'Analytics',
        icon: 'i-lucide-chart-pie',
        to: `/teacher/${classID}/analytics`,
    }, {
        label: 'Settings',
        icon: 'i-lucide-settings',        
        to: `/teacher/${classID}/settings`,
    },
])

const tabsItems = computed<NavigationMenuItem[]>(() => menuItem.value.map(item => ({
    label: item.label,
    to: item.to,
    icon: item.icon,
})))

const currentTabLabel = ref('Attendance');
const dropDownItems = computed(() => menuItem.value.map(item => ({
    label: item.label,
    icon: item.icon,
    to: item.to,
    click: ( () => {
        if (item.to) {
            currentTabLabel.value = item.to
            navigateTo(item.to)
        }
    })
})))
</script>

<template>
    <UDashboardLayout>
            <UDashboardPanel id="home" resizable>
            <template #header>
                <UDashboardNavbar>
                    <template #leading>
                        <UDashboardSidebarCollapse />
                        <div>
                            <h2>Araling Panlipunan 10</h2>
                            <p>101011 | 730A-12A</p>
                        </div>
                    </template>
                    <template #right>                        
                        <div class="lg:hidden flex-row">      
                            <span></span>                      
                            <UDropdownMenu :items="dropDownItems" :popper="{ placement: 'bottom-start' }">
                                <UButton
                                :label="currentTabLabel"
                                trailing-icon="i-heroicons-chevron-down-20-solid"
                                size="sm"
                                class="w-full justify-between"
                                />
                            </UDropdownMenu>
                        </div>
                    </template>
                </UDashboardNavbar>
                <UDashboardToolbar class="nav-menu hidden lg:block">                        
                    <div >                        
                        <UNavigationMenu trailing-icon="i-lucide-arrow-down"  
                                         orientation="horizontal" color="neutral" 
                                         :items="tabsItems"  class="w-full"   />
                    </div>                
                </UDashboardToolbar>
            </template>

            <template #body>           
                <main class="flex-1">
                    <slot></slot>
                </main>
            </template>
        </UDashboardPanel>
    </UDashboardLayout>
</template>

<style>
.nav-menu {
    overflow-x: auto;
    width: 100%;
}
</style>