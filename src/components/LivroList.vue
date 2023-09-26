<script setup>
import { ref, onMounted } from 'vue'
import StarIcon from 'vue-material-design-icons/Star.vue'

import livroService from '@/services/livros.js'

const livros = ref([])

onMounted(async () => {
  const data = await livroService.getAllLivros()
  livros.value = data
})
</script>

<template>
  <div class="row wrap">
    <div v-for="livro in livros" :key="livro.id" class="card">
      <img :src="livro.cover.url" :alt="livro.title" />
      <div class="livro-detail">
        <h3>{{ livro.title }}</h3>
        <div class="livro-year-rating">
          <p>{{ livro.year }}</p>
          <div class="rating">
            <StarIcon v-for="n in livro.rating" :key="n" fillColor="orange" size="18" />
            <StarIcon v-for="n in 5 - livro.rating" :key="n" fillColor="gray" size="18" />
          </div>
        </div>
        <p>{{ livro.categoria }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.livro-detail p {
  margin: 0;
}

.livro-year-rating {
  display: flex;
  column-gap: 2rem;
}

.livro-detail h3 {
  margin: 0;
  font-size: 1.2rem;
}
</style>