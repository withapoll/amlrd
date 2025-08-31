<template>
    <div class="mssg">
        <p>~ HI, я эндрю, digital</p>
    </div>
    <div class="promo">
        <h1>{{ typedPromo }}</h1>
    </div>
    <div class="icons">
        <a :href="links.github" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon :icon="['fab', 'github']" />
        </a>
        <a :href="links.pinterest" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon :icon="['fab', 'pinterest']" />
        </a>
        <a :href="links.instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon :icon="['fab', 'instagram']" />
        </a>
    </div>
    <div class="undertext">
        <p>Я дизайню и разрабатываю web продукты и мобильные приложения под Android</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faGithub, faPinterest } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faGithub, faPinterest)

const fullPromo = 'product designer who can code'
const typedPromo = ref('')

const links = ref({
    github: 'https://github.com/withapoll',
    pinterest: 'https://pin.it/3XxleNIyS',
    instagram: 'https://instagram.com/withapoll',
})

onMounted(() => {
  let i = 0
  const interval = setInterval(() => {
    typedPromo.value += fullPromo[i]
    i++
    if (i >= fullPromo.length) clearInterval(interval)
  }, 120)
})
</script>

<style scoped>
.mssg {
    text-transform: uppercase;
    font-size: 1.2em;
    color: #B7B7B7;
}

.promo {
    text-transform: uppercase;
    font-size: 1.4em;
}

.promo h1::after {
    content: '|';
    animation: blink 1s steps(1) infinite;
    margin-left: 2px;
}

@keyframes blink {
    50% { opacity: 0; }
}

.icons {
    display: flex;
    gap: 1rem;
    color: #000000;
    font-size: 2em;
}

.icons a {
    color: #000000;
    transition: color 0.3s ease;
}

.icons a:hover {
    color: #FF611B;
}

.undertext {
    text-transform: uppercase;
    font-size: 1.2em;
    color: #B7B7B7;
}
</style>