<template>
  <div class="awards-block">
    <div class="awards-grid">
      <div class="awards-title">AWARDS</div>
      <div class="awards-item">CUP MOSCOW 2024 15%<br>HIGH QUALITY AWARDS</div>
      <div class="awards-item">30/350 ALFA CASE<br>CAMP 2024</div>
      <div class="awards-item">SEMI-FINALIST<br>HIGHER SCHOOL OF ECONOMICS</div>
      <div class="awards-item">1ST PLACE IN ENGINEER HACKATHON<br>UNI STANKIN</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.awards-block {
  margin: 2em 0;
}
.awards-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 1em 2em;
  align-items: start;
}
.awards-title {
  grid-row: 1 / span 2;
  grid-column: 1 / 2;
  font-family: 'Doto Rounded', monospace, sans-serif;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
}
.awards-item {
  font-family: 'Doto Rounded', monospace, sans-serif;
  font-size: 1em;
  font-weight: bold;
  align-self: start;
  white-space: pre-line;
}

</style>