<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui';

    const route = useRoute()
    const toast = useToast()

    const open = ref(false)

    const links = [[{
        label: 'Home',
        icon: 'i-lucide-house',
        to: '/teacher',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Reports',
        icon: 'i-lucide-book-text',
        to: '/teacher/reports',
        onSelect: () => {
            open.value = false
        }
    }, {
        label: 'Advisory',
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
        }
    }, {
        label: 'Committee',
        icon: 'i-lucide-component',
        to: '/teacher/committee',
        onSelect: () => {
            open.value = false
        }
    }], [{
        
    }]]
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