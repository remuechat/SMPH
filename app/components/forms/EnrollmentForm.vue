<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'
import LearnerStepper from './EnrollmentForm/LearnerStepper.vue';
import GuardianStepper from './EnrollmentForm/GuardianStepper.vue';
import RequirementsStepper from './EnrollmentForm/RequirementsStepper.vue';

const items = [
  {
    slot: 'address' as const,
    title: 'School Info',
  }, {
    slot: 'learnerInfo' as const,
    title: 'Learner Info',
  }, {
    slot: 'GuardianInfo' as const,
    title: 'Guardian Info',
  }, {
    slot: 'RequirementsInfo' as const,
    title: 'Requirements'
  }
] satisfies StepperItem[]
</script>

<template>
  <div className="enrollment-card">
    <UStepper :items="items" class="w-full">
      <template #address>
        <Placeholder class="aspect-video">
          asdsa
        </Placeholder>
      </template>

      <template #learnerInfo>
        <Placeholder class="aspect-video">
          <LearnerStepper />
        </Placeholder>
      </template>

      <template #GuardianInfo>
        <Placeholder class="aspect-video">
          <GuardianStepper />
        </Placeholder>
      </template>

      <template #RequirementsInfo>
        <Placeholder class="aspect-video">
          <RequirementsStepper />

        </Placeholder>
      </template>
    </UStepper>
  </div>
</template>

<style>
  .enrollment-card {
    background: fixed;
    background-color:blueviolet;
    margin: 1.5em;
    height: 100vh;
    border-radius: 16px;
  }
</style>
