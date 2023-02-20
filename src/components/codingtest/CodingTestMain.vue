<script setup>
import NetworkGraph from 'v-network-graph';

const graphData = [
  { id: '1', label: 'Node 1' },
  { id: '2', label: 'Node 2' },
  { id: '3', label: 'Node 3' },
  { id: '4', label: 'Node 4' },
  { id: '12', from: '1', to: '2' },
  { id: '23', from: '2', to: '3' },
  { id: '24', from: '2', to: '4' },
];
const graphOptions = {
  layout: {
    name: 'cose'
  },
  node: {
    shape: 'ellipse'
  },
  edge: {
    shape: 'bezier'
  },
}
</script>

<template>
  <div class="row g-5">
    <!-- contents left -->
    <div class="col">
      <h4 class="pb-1"><i class="bi-map"></i> Main</h4>

      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
</div>
      </div>
    </div>
  </div>
</template>

<style></style>
