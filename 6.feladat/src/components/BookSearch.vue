<script setup>
defineProps({
    query: {
        type: String,
        required: ''
    }
})
const emit = defineEmits(['search'])
</script>

<template>
<section class="card">
    <label for="book-search">Könyv keresése cím vagy szerző alapján</label>

    <input
        id="book-search"
        type="search"
        :value="query"
        placeholder="PL. A kis herceg"
        @input="emit('search', $event.target.value)"
    />
</section>
</template>