<template>
  <div class="recent-projects">
    <div class="project">
      <img class="project__img" src="/images/netwrk.png" alt="netwrk - соцсеть для нетворка" />
      <div class="project__content">
        <div class="project__meta">
          <span class="project__year">2025</span>
          <span class="project__title">netwrk - соцсеть для нетворка</span>
        </div>
        <a class="project__link" href="#">
          <FontAwesomeIcon :icon="['fas', 'link']" />
                    link
        </a>
      </div>
    </div>
    <div class="project">
      <img class="project__img" src="/images/dotcalendar.png" alt=".Calendar" />
      <div class="project__content">
        <div class="project__meta">
          <span class="project__year">2025</span>
          <span class="project__title">.Calendar</span>
        </div>
        <a class="project__link" href="#">
          <FontAwesomeIcon :icon="['fas', 'link']" />
                    link
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink } from '@fortawesome/free-solid-svg-icons'
library.add(faLink)
</script>

<style scoped >
.recent-projects {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em 0;
}
.project {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 0.5em;
}
.project__img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.project__meta {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1em;
  font-weight: medium;
  margin-top: 0.5em;
}
.project__year {
  font-family: inherit;
}
.project__title {
  font-family: inherit;
}
.project__link {
  color: #888;
  font-size: 0.95em;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5em;
}
</style>