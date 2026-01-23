<script setup lang="ts">
import AttendanceModal from './AttendanceModal.vue';

    const modalTitle = "Roll Call"
</script>

<template>
    <div className="attendance-modal">
        <UModal 
            title='Roll Call Attendance for Araling Panlipunan' 
            description='Class 12324 | January 23, 2026 12:00PM-1:00PM'
            :close="{
            color: 'primary',
            variant: 'outline',
            class: 'rounded-full'
        }">
            <UButton label='Open' color='neutral' variant='subtle' />

            <template #body>
                <AttendanceModal />
            </template>
        </UModal>
    </div>
</template>

<style>
    .attendance-modal {
        height: 100vh;
        margin: 1.5em;
    }
</style>