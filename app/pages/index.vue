
<script setup>
    import EnrollmentForm from '~/components/forms/EnrollmentForm.vue';
</script>


<template>
    <div>
        <UButton>
            <NuxtLink to="/enrollment">
                Enrollment
            </NuxtLink>
        </UButton>
        
        <UButton>
            <NuxtLink to="/teacher/classes">
                Classes
            </NuxtLink>
        </UButton>
        
        <UButton>
            <NuxtLink to="/teacher">
                Attendance
            </NuxtLink>
        </UButton>
    </div>
</template>