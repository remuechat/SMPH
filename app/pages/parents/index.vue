<script setup lang="ts">
import RollCallModel from '~/components/common/RollCallModel.vue';
import { useTeacherDashboard } from '~/compostables/useTeacherDashboard';
import TeacherLayout from '~/layout/TeacherLayout.vue';
</script>

<template>
        <UDashboardPanel id="home">
            <template #header>
                <UDashboardNavbar title="Home" :ui="{ right: 'gap-3'}">
                    <template #leading>
                        <UDashboardSidebarCollapse />
                    </template>
                </UDashboardNavbar>
            </template>

            <template #body>            
                <div>
                    Teacher Dashboard
                    <UButton>
                        <NuxtLink to="/teacher/gradebook">
                            Gradebook
                        </NuxtLink>
                    </UButton>
                    
                    <UButton>
                        <NuxtLink to="/enrollment">
                            Enrollment
                        </NuxtLink>
                    </UButton>

                     <UButton>
                        <NuxtLink to="/teacher/slug-class">
                            Class (but not slugged yet)
                        </NuxtLink>
                    </UButton>

                    <RollCallModel />
                </div>         
            </template>
        </UDashboardPanel>
</template>