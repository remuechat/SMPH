<template>
    <div className="credentials">
        <div>
            <p>First Name</p>
            <UInput />
        </div>

        <div>
            <p>Last Name</p>
            <UInput />
        </div>

        <div>
            <p>Middle Name</p>
            <UInput />
        </div>

        <div>
            <p>Contact No.</p>
            <UInput />
        </div>
    </div>
</template>

<style>
    .credentials {
        display: flex;
        flex-direction: row;
    }
    
    .field {
        flex-direction: column;
    }
</style>