<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui';

    const route = useRoute()
    const toast = useToast()

    const open = ref(false)

    interface classMenuItem {
        label: string
        to?: string
    }

    const classList : NavigationMenuItem[] = [
        { label: 'Class 1', to: '/parent/class-1', onSelect: () => { open.value = false }},
        { label: 'Class 2', to: '/parent/class-2', onSelect: () => { open.value = false }},
        { label: 'Class 3', to: '/parent/class-3', onSelect: () => { open.value = false }},
    ];

    const links : NavigationMenuItem = [[{
        label: 'Home',
        icon: 'i-lucide-house',
        to: '/teacher',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Report Card',
        icon: 'i-lucide-book-text',
        to: '/teacher/forms',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Schedule',
        icon: 'i-lucide-backpack',
        to: '/teacher/advisory',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Classes',
        icon: 'i-lucide-landmark',
        to: '/teacher/classes',
        onSelect: () => {
            open.value = false
        },
        children: classList,
    }, {
        label: 'Enrollment',
        icon: 'i-lucide-component',
        to: '/teacher/committee',
        onSelect: () => {
            open.value = false
        }
    }]];
</script>

<template>
    <UDashboardGroup unit="rem">
        <UDashboardSidebar 
            id="default"
            v-model:open="open"
            collapsible
            resizable
            :ui="{ footer: 'lg:border-t lg:border-default' }"
        >

        <template #header="{ collapsed }">
            <TeamsMenu :collapsed="collapsed" />
        </template>

        <template #default="{ collapsed }">
            <UDashboardSearchButton :collapsed="collapsed" class="bg-transparent ring-default" />
        
            <UNavigationMenu
                :collapsed="collapsed"
                :items="links[0]"
                orientation="vertical"
                tooltip
                popover
            ></UNavigationMenu>

            <UNavigationMenu
                :collapsed="collapsed"
                :items="links[1]"
                orientation="vertical"
                tooltip
                popover
                class="mt-auto"
            ></UNavigationMenu>
        </template>

        <template #footer="{ collapsed }">
            <UserMenu :collapsed="collapsed" />
        </template>
        </UDashboardSidebar>

        <UDashboardSearch />
        
        <slot></slot>
        
        <NotificationSlideover />
    </UDashboardGroup>
</template>