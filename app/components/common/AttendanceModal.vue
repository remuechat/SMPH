<script setup lang="ts">
    const toast = useToast()

    const studentName = 'Skibidi Toilet';
    const studentLRN = '12345678987';

    type AttendanceRecord = {
        studentLRN: string
        studentName: string
        status: 'Present' | 'Excused' | 'Late' | 'Absent'
        description?: string
        documentation?: string
        recordDate: Date    
    }

    const attendanceData = ref<AttendanceRecord[]>([
        {
            studentLRN: '12345678987',
            studentName: 'Skibidi Toilet',
            status: 'Present',
            recordDate: new Date(),
            description: 'No description',
            documentation: 'No documentation'
        }, {
            studentLRN: '12345678987',
            studentName: 'Skibidi Toilet',
            status: 'Present',
            recordDate: new Date(),
            description: 'No description',
            documentation: 'No documentation'
        },
        {
            studentLRN: '12345678987',
            studentName: 'Skibidi Toilet',
            status: 'Present',
            recordDate: new Date(),
            description: 'No description',
            documentation: 'No documentation'
        }
    ])

    function attendanceButtonClicked(status: 'present' | 'absent' | 'excused') {
        toast.add({
            description: 'The student XXX was logged as ' + status + ' at 6PM',
            progress: false 
        })
    }
</script>

<template>
    <div>
        <div>
            <!-- <UTable :data="attendanceData"></UTable> -->
        </div>
        <br />
        
        <div>
            <div class='attendance-button-group'>                
                <UProgress :model-value="75"></UProgress>
                <UCheckbox />
            </div>

            <div class='rollcall-text-group'>
                <h1>{{studentName}}</h1>
                <p>LRN: {{studentLRN}}</p>
            </div>
            
            <br />
            <div class='attendance-button-group'>  
                <UButton label='Present' color='primary' :shortcuts="['z']" @click="() => attendanceButtonClicked('present')"></UButton>
                <UButton label='Absent' color='error' :shortcuts="['x']" @click="() => attendanceButtonClicked('absent')"></UButton>
                <UButton label='Excused' color='warning' :shortcuts="['c']" @click="() => attendanceButtonClicked('excused')"></UButton>        
            </div>
        </div>
    </div>
</template>

<style>
    .rollcall-text-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .attendance-button-group {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>