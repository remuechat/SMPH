<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
import type { ColDef, ColGroupDef } from 'ag-grid-community';
const columnDefs = ref<(ColDef | ColGroupDef)[]>([{
    field: 'name', 
    headerName: 'Name', 
    pinned: 'left',
    editable: false
}, {
    headerName: 'Written Works (30%)', 
    children: [
        {
            field: 'ww1',
            headerName: '1',
        },{
            field: 'ww2',
            headerName: '2'
        },{
            field: 'ww3',
            headerName: '3'
        },{
            field: 'ww4',
            headerName: '4'
        },{
            field: 'ww5',
            headerName: '5'
        },{
            field: 'ww6',
            headerName: '6'
        },
    ]
}, {
    headerName: 'Performance Task (40%)', 
    children: [
        {
            field: 'pt1',
            headerName: '1'
        },{
            field: 'pt2',
            headerName: '2'
        },{
            field: 'pt3',
            headerName: '3'
        },{
            field: 'pt4',
            headerName: '4'
        },{
            field: 'pt5',
            headerName: '5'
        },{
            field: 'pt6',
            headerName: '6'
        },
    ]
},{
    field: 'Exam',
    headerName: 'Quarterly Exam',
},{
    headerName: 'Grade', 
    children: [{
        field: 'Raw',
        pinned: 'right',
        editable: false
    }, {
        field: 'Transmuted',
        pinned: 'right',
        editable: false
    }]
}
])

const rowData = [
  {
    name: 'John Doe',
    ww1: 85, ww2: 90, ww3: 88, ww4: 92,
    pt1: 78, pt2: 85, pt3: 90, pt4: 87,
    quarterlyGrade: 87.5
  },
  {
    name: 'Jane Smith',
    ww1: 92, ww2: 88, ww3: 95, ww4: 90,
    pt1: 85, pt2: 92, pt3: 88, pt4: 90,
    quarterlyGrade: 89.8
  },
  {
    name: 'Mike Johnson',
    ww1: 78, ww2: 82, ww3: 80, ww4: 85,
    pt1: 75, pt2: 80, pt3: 78, pt4: 82,
    quarterlyGrade: 80.2
  }
];

</script>

<template>
    <div>
        <div class="table">
            <AgGridVue :columnDefs="columnDefs" :rowData="rowData" :autoSizeStrategy="{ type: 'fitGridWidth' }" class="ag-theme-alpine table"/>
        </div>
    </div>
</template>

<style>
    .table {
        width: 100%;
        height: 86vh;
    }

    @media (min-width: 768px) {
        .table {
            width: 100%;
            height: 76vh;
        }
    }
</style>