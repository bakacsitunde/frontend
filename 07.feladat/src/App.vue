<template>
  <nav class="card">
    <RouterLink to="/">Kezdőlap</RouterLink>
    <RouterLink to="/books">Könyvek</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
