<template>
  <div class="row">
    <div class="col-6">
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-smooth-scroll="true"
        class="scrollspy-example p-3 rounded-2 border"
        tabindex="0"
      >
        {{ stores.translatestates.source }}
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-light p-3 rounded-2 border"
        tabindex="0"
      >
        {{ stores.translatestates.byFirst }}
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-light p-3 rounded-2 border"
        tabindex="0"
      >
        {{ stores.translatestates.bySecond }}
      </div>
    </div>
    <div class="col-6">
      <div class="input-group">
        <textarea
          class="form-control"
          rows="25"
          @keydown="writeTranslatingTerms"
          @click="moveTranslatingTerms"
          placeholder="Choose a term to translate..."
          v-model="stores.translatestates.byMe"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const stores = inject("stores");

function writeTranslatingTerms() {}
function moveTranslatingTerms() {}
</script>

<style scoped>
.scrollspy-example {
  height: 200px;
  margin-bottom: 0.5rem;
  overflow: auto;
}
</style>
