<script setup lang="ts">
import AddressForms from './AddressForms.vue';
import GuardianForm from './GuardianForm.vue';


</script>

<template>
    <!-- Dynamically generate this later on -->
    <p>Father's Name</p>
    <GuardianForm />

    <p>Mother's Maiden Name</p>
    <GuardianForm />

    <p>Guardians's Name</p>
    <GuardianForm />

    
    <div>            
        <div className="side-directed">
            <p>Permanent address</p>
            <UCheckbox label="Same as your current address?"></UCheckbox>
        </div>
        <AddressForms></AddressForms>
    </div>

    <div>
        <div>
            <p>Current address</p>
        </div>
        <AddressForms></AddressForms>
    </div>

</template>

<style>
    /* rename this awfully named CSS */
    .side-directed {
        display: flex;
        flex-direction: row;
        
    }
</style>
