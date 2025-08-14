<template>
  <div class="devstack-block">
    <div class="devstack-grid">
      <div class="devstack-title">DEV STACK</div>
      <div class="devstack-item">HTML</div>
      <div class="devstack-item">CSS</div>
      <div class="devstack-item">JAVASCRIPT</div>
      <div class="devstack-item">TYPESCRIPT</div>
      <div class="devstack-item">VUE.JS</div>
      <div class="devstack-item">REACT.JS</div>
      <div class="devstack-item">KOTLIN</div>
      <div class="devstack-item">JETPACK COMPOSE</div>
      <div class="devstack-item">SUPABASE</div>
      <div class="devstack-item">POSTGRESQL</div>
      <div class="devstack-item">REST API</div>
      <div class="devstack-item">UX/UI DESIGN</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.devstack-block {
  margin: 2em 0;
}
.devstack-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 1em 1.3em;
  align-items: start;
}
.devstack-title {
  grid-row: 1 / span 4;
  grid-column: 1 / 2;
  font-family: 'Doto Rounded', monospace, sans-serif;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
}
.devstack-item {
  font-family: 'Doto Rounded', monospace, sans-serif;
  font-size: 1em;
  font-weight: bold;
  align-self: start;
  white-space: pre-line;
}
</style>