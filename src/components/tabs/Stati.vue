<template>
  <div class="articles">
    <div class="article">
      <img class="article__img" src="/images/article1.png" alt="Молодежная подписка для Альфа Банка" />
      <div class="article__content">
        <h2 class="article__title">Молодежная подписка для Альфа Банка</h2>
        <p class="article__desc">
          Как Я и моя команда придумывали концепцию молодежной подписки для Альфа Банка и попали в топ 30
        </p>
        <a class="project__link" href="#">
          <FontAwesomeIcon :icon="['fas', 'link']" />
                    link
        </a>
      </div>
    </div>
    <div class="article">
      <img class="article__img" src="/images/article2.png" alt="Приложение OneHome" />
      <div class="article__content">
        <h2 class="article__title">Приложение OneHome</h2>
        <p class="article__desc">
          Умное приложение для Умного Дома. OneHome — дизайн-кейс с хакатона
        </p>
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

<style scoped>
.articles {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em 0;
}
.article {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.article__img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.article__title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.5em 0 0.2em 0;
}
.article__desc {
  font-size: 1em;
  margin-bottom: 0.5em;
}
.article__link {
  color: #B7B7B7;
  font-size: 0.95em;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5em;
}
</style>