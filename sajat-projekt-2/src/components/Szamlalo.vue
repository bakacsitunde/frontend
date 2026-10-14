<template>
  <div class="szamlalo">
    <h2>{{ uzenet }}</h2>
    <p class="ertek">Számláló: <strong>{{ ertek }}</strong></p>

    <div class="gombok">
      <button @click="novel">Növel (+1)</button>
      <button @click="csokkent">Csökkent (−1)</button>
      <button class="reset" @click="reset">Nulláz</button>
      <button @click="novel5">Növel (+5)</button>
      <button @click="csokkent5">Csökkent (−5)</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Szamlalo',
  setup() {
    const uzenet = ref('Ez egy Vue komponens!')
    const ertek = ref(0)

    const novel = () => ertek.value++
    const csokkent = () => ertek.value--
    const reset = () => { ertek.value = 0 }
    
  
    const novel5 = () => { ertek.value += 5 }
    const csokkent5 = () => { ertek.value -= 5 }

    return { 
      uzenet, 
      ertek, 
      novel, 
      csokkent, 
      reset, 
      novel5, 
      csokkent5 
    }
  }
}
</script>

<style scoped>
.szamlalo {
  border: 2px solid #42b883;
  border-radius: 10px;
  padding: 20px;
  max-width: 320px;
  background: #f9fff9;
  font-family: sans-serif;
}
.ertek {
  font-size: 1.3rem;
  margin: 12px 0;
}
.gombok button {
  margin-right: 8px;
  margin-bottom: 6px;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background: #42b883;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.gombok button:hover {
  background: #369870;
}
.gombok .reset {
  background: #e74c3c;
}
.gombok .reset:hover {
  background: #c0392b;
}
</style>
