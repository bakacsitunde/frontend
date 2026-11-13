<script setup>
defineProps({
    book: { 
        type: Object, 
        required: true } })
const emit = defineEmits(['details'])
</script>

<template>
  <article class="card">
    <img
    v-if="book.image"
    :src="book.image"
    :alt="book.title"
    />

    <h3>{{ book.title }}</h3>

    <p>{{ book.author }}</p>

    <p v-if="book.year" class="muted">
       Megjelenési év: {{ book.year }}
    </p>
    
    <button @click="emit('details', book.id)">Részletek</button>
  </article>
</template>
