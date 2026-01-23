<script setup>

defineProps({
    title: String,
    code: String,
    schedule: String,
    instructor: String,
})

</script>

<template>
        <UCard class="class-card m-2">
            <UCardHeader>
                <UCardTitle>{{ title }}</UCardTitle>
                <UCardSubtitle>{{ code }}</UCardSubtitle>
            </UCardHeader>
            <UCardBody>
                <p>Instructor: {{ instructor }}</p>
                <p>Schedule: {{ schedule }}</p>
            </UCardBody>
            <UCardFooter>
                <NuxtLink :to="`/teacher/${code}/attendance`">
                    <UButton>View Class</UButton>
                </NuxtLink>
            </UCardFooter>
        </UCard>
</template>

<style> 
.class-card {
    width: 16em;
    height: 12em;
}
</style>

