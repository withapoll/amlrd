<template>
    <div class="left-scroll-images" ref="scrollContainer1">
        <div class="left-scroll-images__item" v-for="img in imagesLeft" :key="img">
            <img :src="img" alt="Image">
        </div>
    </div>

    <div class="right-scroll-images" ref="scrollContainer2">
        <div class="left-scroll-images__item" v-for="img in imagesRight" :key="img">
            <img :src="img" alt="Image">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollContainer1 = ref(null)
const scrollContainer2 = ref(null)
let scrollInterval1 = null
let scrollInterval2 = null

const imagesLeft = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
]

const imagesRight = [
  '/images/6.png',
  '/images/7.png',
  '/images/8.png',
  '/images/9.png',
  '/images/10.png',
  '/images/11.png',
]

onMounted(() => {
  scrollInterval1 = setInterval(() => {
    if (scrollContainer1.value) {
      scrollContainer1.value.scrollLeft += 0.5
      if (
        scrollContainer1.value.scrollLeft + scrollContainer1.value.clientWidth >=
        scrollContainer1.value.scrollWidth
      ) {
        scrollContainer1.value.scrollLeft = 0
      }
    }
  }, 16)
})

onMounted(() => {
  scrollInterval2 = setInterval(() => {
    if (scrollContainer2.value) {
      scrollContainer2.value.scrollLeft -= 0.5
      if (scrollContainer2.value.scrollLeft <= 0) {
        scrollContainer2.value.scrollLeft = scrollContainer2.value.scrollWidth - scrollContainer2.value.clientWidth
      }
    }
  }, 16)
})

onUnmounted(() => {
  clearInterval(scrollInterval1)
  clearInterval(scrollInterval2)
})
</script>

<style scoped>
.left-scroll-images {
    display: flex;
    overflow-x: auto;
    padding: 1em;
    gap: 0.5em;
    scroll-behavior: auto;
    
}
.left-scroll-images__item img {
    max-width: 220px;
    border-radius: 16px;
}

.right-scroll-images {
    display: flex;
    overflow-x: auto;
    padding: 1em;
    gap: 0.5em;
    scroll-behavior: auto;
}
.right-scroll-images__item img {
    max-width: 220px;
    border-radius: 16px;
}

.left-scroll-images,
.right-scroll-images {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.left-scroll-images::-webkit-scrollbar,
.right-scroll-images::-webkit-scrollbar {
  display: none;
}
</style>