<script setup>
import { ref, computed } from 'vue'

import AppHeader from './components/AppHeader.vue'
import BookList from './components/BookList.vue'
import BookSearch from './components/BookSearch.vue'

const books = ref([
  {
    id: 1,
    title: 'A kis herceg',
    author: 'Antoine de Saint-Exupéry',
    year: 1943,
  },
  {
    id: 2,
    title: 'Egri csillagok',
    author: 'Gárdonyi Géza',
    year: 1901,
  },
  {
    id: 3,
    title: 'A Pál utcai fiúk',
    author: 'Molnár Ferenc',
    year: 1906,
  }
])

const query = ref('')

const filteredBooks = computed(() => {
  const search = query.value.toLowerCase().trim()

  return books.value.filter(book => 
    book.title.toLowerCase().includes(search) ||
    book.author.toLowerCase().includes(search)
    )

})

const selectedBookId = ref(null)

function showDetails(bookId) {
  selectedBookId.value = 
  books.value.find(book => book.id === bookId) || null
}

</script>

<template>
  <AppHeader />
  <main>
    <BookSearch
      :query="query"
      @search="query = $event"
    />
    <BookList
      :books="filteredBooks"
      @details="showDetails"
    />
    <section v-if="selectedBookId" class="card">
      <h2>{{ selectedBookId.title }}</h2>

      <p>Szerző: {{ selectedBookId.author }}</p>

      <p v-if="selectedBookId.year">
        Megjelenési év: {{ selectedBookId.year }}
      </p>

      <button @click="selectedBookId = null">Bezárás</button>
    </section>
  </main>
</template>

