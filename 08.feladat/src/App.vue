<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'

const books = ref([]),
      loading = ref(false),
      error = ref(null)

async function load(){
    loading.value = true
        error.value = null
        try {
            const response = await axios.get('https://api.example.com/books')
            books.value = response.data
        } catch (err) {
            error.value = err.message || 'An error occurred'
        } finally {
            loading.value = false
        }
}

onMounted(load)
</script>

<template>
    <p class="muted">08 fetch, async/await, onMounted</p>
    <h1>API könyvlista</h1>
    <button @click="load" >Betöltés</button>
    <p v-if="loading">Betöltés...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <div class="grid" v-else>
        <article v-for="b in books" :key="b.id" class="card">
            <h2>{{ b.title }}</h2>
            <p>{{ b.author }}</p>
            <p>{{ b.description }}</p>
        </article>
    </div>
</template>