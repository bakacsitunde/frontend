<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
const route = useRoute();
const books = [
  { id: 1, title: 'Az alkimista', author: 'Paulo Coelho', description: 'A könyv egy fiatal pásztorfiú...' },
  { id: 2, title: '1984', author: 'George Orwell', description: 'A könyv egy disztópikus jövőképet mutat be, ahol a totalitárius állam mindent ellenőriz' },
];

const book = computed(() => books.find(b => b.id == Number(route.params.id)))
</script>

<template>
  <section class="card" v-if="book">
    <h1>{{ book.title }}</h1>
    <h3>{{ book.author }}</h3>
    <p>{{ book.description }}</p>
    <RouterLink to="/books">Vissza</RouterLink>
  </section>
  <section v-else class="card">
    <h1>A könyv nem található</h1>
    <RouterLink to="/books">Vissza</RouterLink>
  </section>
</template>
