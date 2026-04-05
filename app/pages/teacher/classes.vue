<script setup lang="ts">
import ClassCard from '~/components/common/ClassCard.vue';
import { useTeacherDashboard } from '~/compostables/useTeacherDashboard';
// import TeacherLayout from '~/layout/TeacherLayout.vue';
</script>

<template>
        <UDashboardPanel id="home">
            <template #header>
                <UDashboardNavbar title="Home" :ui="{ right: 'gap-3'}">
                    <template #leading>
                        <UDashboardSidebarCollapse />
                    </template>
                </UDashboardNavbar>
            </template>

            <template #body >      
                <div class="cards">      
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>
                    <ClassCard :title="'Araling Panlipunan 10'" :code="'101110'" :schedule="'MWF 8:00-9:00'" :instructor="'Mr. Smith'"/>

              </div>         
            </template>
        </UDashboardPanel>
</template>


<style scoped>
.class-card-container {
  width: 100%;
  height: 100%;
  min-height: 0; 
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 8px; 
  padding: 0.5em;
  
  overflow-y: auto;
  max-height: 100vh;
  
  scrollbar-width: thin;
}

.cards > *:last-child {
  margin-bottom: 6em;
}

.cards::-webkit-scrollbar {
  width: 8px;
}

.cards::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.cards::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.cards::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>