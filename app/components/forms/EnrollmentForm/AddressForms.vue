<script>
    const countryItems = ref(["1","2"])
    const provinceItems = ref(["1","2"])    
    const barangayItems = ref(["1","2"])
</script>

<template>
    <div>
        <p>House No.</p>
        <UInput />

        <p>Sitio/Street Name</p>
        <UInput />
    </div>    

    <div className="dropdown-list">
        <div>
            <p>Country</p>
            <USelect :items="countryItems"></USelect>
        </div>

        <div>
            <p>Province</p>
            <USelect :items="provinceItems"></USelect>
        </div>

        <div>
            <p>Barangay</p>
            <USelect :items="barangayItems"></USelect>
        </div>
    </div>
</template>

<style>
    .dropdown-list {
        display: flex;
        flex-direction: row;
    }
</style>