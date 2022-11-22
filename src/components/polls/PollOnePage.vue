<template>
  <div class="">
    <!-- buttons -->
    <div class="">
      <button class="btn btn-success">Prev</button>
      <button class="btn btn-success">Next</button>
    </div>
    <!-- polls -->
    <div>
      <!-- poll question -->
      <div>1. 교수는 수업 전 강의 목표를 명확히 제시하였습니까?</div>
      <!-- poll answers -->
      <div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="anwers"
            id="anwers"
            value="A01"
          />
          <label class="form-check-label" for="anwers"> (1)전혀 아니다. </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="anwers"
            id="anwers"
            value="A02"
          />
          <label class="form-check-label" for="anwers"> (2)아니다. </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="anwers"
            id="anwers"
            value="A03"
          />
          <label class="form-check-label" for="anwers"> (3)그렇다. </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
button {
  margin: 0.125rem;
}
</style>
