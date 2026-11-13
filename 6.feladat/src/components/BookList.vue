<script setup>
import BookCard from './BookCard.vue'

defineProps({
    books: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['details'])
</script>

<template>
    <section id="books">
        <h2>Könyveim</h2>

        <p v-if="books.length === 0" class="muted">
            Nincs megjeleníthető könyv.
        </p>

        <div v-else class="grid">
            <BookCard
                v-for="book in books"
                :key="book.id"
                :book="book"
                @details="emit('details', $event)"
            />
        </div>
    </section>
</template>
 