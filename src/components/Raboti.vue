<template>
  <div class="headline" ref="headlineRef">
    <h1>{{ typedHeadline }}</h1>
  </div>
  <div class="undertext">
    <p>Благодаря опыту в дизайне и разработке, и активной коммуникации с командой я вижу видение продукта & понимаю как вести продукт от дизайна до его разработки</p>
  </div>

  <div class="switch">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      :class="{ active: activeTab === tab.key }"
      @click="activeTab = tab.key"
    >
      {{ tab.label }}
    </button>
  </div>

  <div class="tab-content">
    <Lenta v-if="activeTab === 'lenta'" />
    <Nedavno v-if="activeTab === 'nedavno'" />
    <Stati v-if="activeTab === 'stati'" />
    <Proyekty v-if="activeTab === 'proyekty'" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import Lenta from './tabs/Lenta.vue'
import Nedavno from './tabs/Nedavno.vue'
import Stati from './tabs/Stati.vue'
import Proyekty from './tabs/Proyekty.vue'

const activeTab = ref('lenta')
const tabs = [
  { key: 'lenta', label: 'LENTA' },
  { key: 'nedavno', label: 'NEDAVNO' },
  { key: 'stati', label: 'STAT`I' },
  { key: 'proyekty', label: 'PROYEKTY' }
]

const fullHeadline = '-> raboti'
const typedHeadline = ref('')
const headlineRef = ref(null)
let interval = null

function startTyping() {
  if (typedHeadline.value) return
  let i = 0
  interval = setInterval(() => {
    typedHeadline.value += fullHeadline[i]
    i++
    if (i >= fullHeadline.length) clearInterval(interval)
  }, 200)
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      startTyping()
      observer.disconnect()
    }
  }, { threshold: 0.5 })
  if (headlineRef.value) observer.observe(headlineRef.value)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.headline {
    text-transform: uppercase;
    font-size: 1.1em;
    color: #FF611B;
}


.undertext {
      font-size: 1.5em;
    text-transform: uppercase;
}

.switch {
  display: flex;
  background: #fff;
  border-radius: 48px;
  padding: 1em;
  gap: 0.3em;
  align-items: center;
    justify-content: center;
}
.switch button {
  background: none;
  border: none;
  font-family: 'Doto', sans-serif;
  font-size: 0.9em;
  color: #333;
  padding: 0.6em 0.6em;
  border-radius: 2em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.switch button.active {
  background: #ff6a18;
  color: #fff;
}
</style>