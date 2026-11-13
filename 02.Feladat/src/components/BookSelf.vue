<script setup>
import { ref } from 'vue'
const kolcsonzott = ref(0)
function kolcsonzes() { kolcsonzott.value++ }
function visszahozas() {
  if (kolcsonzott.value > 0) kolcsonzott.value--
}
</script>

<template>
  <h2>Kikölcsönzött: {{ kolcsonzott }}</h2>
  <button @click="kolcsonzes">Kölcsönzés</button>
  <button @click="visszahozas">Visszahozás</button>
  <p v-if="kolcsonzott >= 5">Sok könyv van kint!</p>
</template>
