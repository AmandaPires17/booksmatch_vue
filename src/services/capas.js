import api from '../plugins/api'

class CapaService {
  async uploadCapa(file) {
    const formData = new FormData()
    formData.set('file', file)
    const response = await api.post('/media/capas/', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    return response.data
  }
}

export default new CapaService()