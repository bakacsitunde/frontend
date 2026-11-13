<script setup>
import { RouterLink } from 'vue-router';
const books = [
  { id: 1, title: 'Az alkimista', author: 'Paulo Coelho' },
  { id: 2, title: '1984', author: 'George Orwell' },
]
</script>

<template>
  <h1>Könyvek</h1>
  <div class="grind">
    <article class="card" v-for="b in books" :key="b.id">
      <h2>{{ b.title }}</h2>
      <p>{{ b.author }}</p>
      <RouterLink :to="'/books/' + b.id">Részletek</RouterLink>
    </article>
  </div>
</template>
