<template>
    <div class="mssg">
        <p>~ HI, я эндрю, digital</p>
    </div>
    <div class="promo">
        <h1>{{ typedPromo }}</h1>
    </div>
    <div class="icons">
        <FontAwesomeIcon :icon="['fab', 'linkedin']" />
        <FontAwesomeIcon :icon="['fab', 'github']" />
        <FontAwesomeIcon :icon="['fab', 'pinterest']" />
    </div>
    <div class="undertext">
        <p>Я дизайню и разрабатываю web продукты и мобильные приложения под Android</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faPinterest } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub, faPinterest)

const fullPromo = 'product designer who can code'
const typedPromo = ref('')

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
    cursor: pointer;
}

.undertext {
    text-transform: uppercase;
    font-size: 1.2em;
    color: #B7B7B7;
}

</style>