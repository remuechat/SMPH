// ~/plugins/ag-grid.client.ts
import { AgGridVue } from 'ag-grid-vue3';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default defineNuxtPlugin((nuxtApp) => {
  // Register AG Grid Vue component globally
  nuxtApp.vueApp.component('AgGridVue', AgGridVue);
  
  // Register AG Grid modules
  ModuleRegistry.registerModules([AllCommunityModule]);
  
  // You can also provide AG Grid configuration globally
  nuxtApp.provide('agGridOptions', {
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
    }
  });
});