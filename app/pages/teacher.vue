<script setup lang="ts">
import UserLayout from '~/layout/UserLayout.vue';

</script>

<template>
    <div class="flex min-h-screen">
        <UserLayout>
            <main class="flex-1">
                <NuxtPage />
            </main>
        </UserLayout>
    </div>
</template>