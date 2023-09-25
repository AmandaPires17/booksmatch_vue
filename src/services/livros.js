import api from '../plugins/api'

class LivroService {
  async getAllLivros() {
    const response = await api.get('/livros/')
    return response.data
  }
  async saveLivro(livro) {
    let response
    if (livro.id) {
      response = await api.put(`/livros/${livro.id}/`, livro)
    } else {
      response = await api.post('/livros/', livro)
    }
    return response.data
  }
}

export default new LivroService()