<template>
    <div class="headline" ref="headlineRef">
    <h1>{{ typedHeadline }}</h1>
  </div>
    <div class="undertext">
        <p>сейчас я занимаюсь активным поиском новых возможностей в android разработке. А пока всячески пробую себя в различных кейс чемпионатах и хакатонах</p>
    </div>
    <div class="button-block">
        <div class="switch">
        <button class="button">
            <a href="https://t.me/withapoll" target="_blank" rel="noopener noreferrer">Connect</a>
        </button>
    </div>
    </div>
    <div class="img">
        <img src="/images/i.png" alt="It' me" />
    </div>
  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const fullHeadline = '-> I'
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
        font-size: 1.2em;
    color: #FF611B;
}
.undertext {
    text-transform: uppercase;
    font-size: 1.5em;
}
.button {
    width: 160px;
    height: 52px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    background: #FF611B;
    border-radius: 48px;
    border: none;
    font-family: "Doto Rounded", sans-serif;
    font-size: 1.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

a {
    color: #fff;
    text-decoration: none;
}
.button:hover {
    background-color: #e55a16;
}
.img {
    display: flex;
    justify-content: center;
    margin-top: 1em;
}

.img img {
    width: 100%;
    height: auto;
    border-radius: 10%;
}

.button-block {
    display: flex;
    justify-content: center;
    margin-top: 1em;
}

.switch {
    width: 180px;
    border-radius: 48px;    
    display: flex;
    gap: 0.3em;
    align-items: center;
    justify-content: center;
    background: #fff;
}
</style>