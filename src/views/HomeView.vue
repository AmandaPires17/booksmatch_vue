<script setup>
import { ref, onMounted } from 'vue'
import categoriaService from '@/services/categorias.js'

const categorias = ref([])
const currentCategoria = ref({
  name: ''
})

onMounted(async () => {
  const data = await categoriaService.getAllCategorias()
  categorias.value = data
})

async function save() {
  await categoriaService.saveCategoria(currentCategoria.value)
  const data = await categoriaService.getAllCategorias()
  categorias.value = data
  currentCategoria.value = { name: '' }
}

async function deleteCategoria(categoria) {
  await categoriaService.deleteCategoria(categoria)
  const data = await categoriaService.getAllCategorias()
  categorias.value = data
}

function editCategoria(categoria) {
  currentCategoria.value = { ...categoria }
}
</script>

<template>
  <h2>Minhas Categorias de Livros</h2>
  <hr />
  <ul>
    <li v-for="categoria in categorias" :key="categoria.id">
      {{ categoria.name }} - <button @click="deleteCategoria(categoria)">Excluir</button
      ><button @click="editCategoria(categoria)">Editar</button>
    </li>
  </ul>
  <hr />
  <div class="form">
    <input type="text" v-model="currentCategoria.name" />
    <button @click="save">Salvar</button>
  </div>
</template>