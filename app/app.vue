<script setup lang="ts">
  const toaster = { position: 'top-right', max: 3 } as const
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>