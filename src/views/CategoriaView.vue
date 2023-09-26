<script setup>
import { ref, onMounted } from 'vue'
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import ContentSaveIcon from 'vue-material-design-icons/ContentSave.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'

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
  <h2>Gêneros de filmes</h2>
  <div class="row center">
    <form class="form">
      <div class="row">
        <div class="row form-item">
          <input type="text" placeholder="Gênero" v-model="currentCategoria.name" @keyup.enter="save" />
          <label for="">Gênero</label>
        </div>
        <button @click="save">
          <ContentSaveIcon />
          Salvar
        </button>
      </div>
    </form>
  </div>
  <div class="row center">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th style="width: 10%">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.name }}</td>
          <td>
            <DeleteIcon @click="deleteCategoria(categoria)" />
            <PencilIcon @click="editCategoria(categoria)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.form {
  margin-bottom: 1rem;
}

table {
  width: 50%;
  border-collapse: collapse;
  border: 1px solid #eee;
}

table tr {
  border-bottom: 1px solid #eee;
}

table td {
  padding: 0 0.5rem;
}

table td:last-child {
  text-align: center;
}

table tr:nth-child(even) {
  background-color: #eee;
}

thead {
  background-color: #dde;
  height: 2rem;
  font: 1em sans-serif;
}
</style>