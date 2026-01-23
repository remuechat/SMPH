<template>
    <div>
        attendance is working
         <p>Class ID: {{ $route.params.code }}</p>
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