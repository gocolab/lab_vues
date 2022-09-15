<template>
  <div class="row text-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">원본</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <textarea
              class="form-control"
              rows="10"
              v-model="stores.translatestates.source"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">by Google</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <textarea
              class="form-control"
              rows="10"
              v-model="stores.translatestates.byGoogle"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">by Papago</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <textarea
              class="form-control"
              rows="10"
              v-model="stores.translatestates.byPapago"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <button
      class="btn btn-outline-primary"
      @click="$router.push({ name: 'TranslatorMain' })"
    >
      Do Translation
    </button>
  </div>
</template>

<script setup>
import { inject } from "vue";
const stores = inject("stores");
</script>

<style></style>
