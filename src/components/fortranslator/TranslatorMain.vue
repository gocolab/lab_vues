<template>
  <div class="row">
    <div class="col-6">
      <div class="col-6" data-bs-spy="scroll" data-bs-smooth-scroll="true">
        {{ strores.translatestates.source }}
      </div>
      <div class="col-6" data-bs-spy="scroll" data-bs-smooth-scroll="true">
        {{ strores.translatestates.byGoogle }}
      </div>
      <div class="col-6" data-bs-spy="scroll" data-bs-smooth-scroll="true">
        {{ strores.translatestates.byPapago }}
      </div>
    </div>
    <div class="col-6">
      <div class="input-group">
        <textarea
          class="form-control"
          rows="20"
          @keydown="writeTranslatingTerms"
          @click="moveTranslatingTerms"
          placeholder="Choose a term to translate..."
          v-model="strores.translatestates.byMe"
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

<style></style>
