<template>
  <div class="projects-list">
    <div class="project-row" v-for="(project, idx) in projects" :key="project.title">
      <div class="project-info">
        <div class="project-num">{{ String(idx + 1).padStart(2, '0') }}</div>
        <div>
          <div class="project-year">{{ project.year }}</div>
          <div class="project-title">{{ project.title }}</div>
          <div class="project-role">{{ project.role }}</div>
        </div>
      </div>
      <div class="project-img-wrap">
        <img class="project-img" :src="project.img" :alt="project.title" />
        <span class="project-arrow">></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    year: '2025',
    title: '.CALENDAR',
    role: 'ANDROID DEVELOPER',
    img: '/images/dotcalendar-snap.png'
  },
  {
    year: '2025',
    title: 'NETWRK',
    role: 'UX/UI DESIGNER',
    img: '/images/netwrk-snap.png'
  },
  {
    year: '2025',
    title: '.HABIT',
    role: 'ANDROID DEV',
    img: '/images/.habit-snap.png'
  },
  {
    year: '2023, 2025',
    title: 'DOUBLEB',
    role: 'WEB DEVELOPER (VUE.JS)',
    img: '/images/doubleb-snap.png'
  },
  {
    year: '2024',
    title: 'INLINK',
    role: 'UX/UI DESIGNER',
    img: '/images/inlink-snap.png'
  },
  {
    year: '2024',
    title: 'IT-PARK',
    role: 'WEB DESIGNER',
    img: '/images/it-park-snap.png'
  },
  {
    year: '2022',
    title: 'RUSTORE REDESIGN',
    role: 'UX/UI DESIGNER',
    img: '/images/rustore-snap.png'
  }
]
</script>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em 0;
}
.project-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  padding: 1.2em 0;
  gap: 2em;
}
.project-info {
  display: flex;
  align-items: flex-start;
  gap: 1.5em;
  font-family: 'Doto Rounded', monospace, sans-serif;
}
.project-num {
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #000;
}
.project-year {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.2em;
}
.project-title {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.2em;
}
.project-role {
  font-size: 1em;
  color: #000;
  margin-bottom: 0.2em;
}
.project-img-wrap {
  display: flex;
  align-items: center;
}
.project-img {
  width: 120px;
  height: 56px;
  object-fit: cover;
  border-radius: 10px;
  background: #f6f6f6;
}
.project-arrow {
  font-size: 2.5em;
  color: #ff6a18;
  font-family: 'Doto Rounded', monospace, sans-serif;
  font-weight: bold;
  margin-left: 0.5em;
  user-select: none;
}


</style>