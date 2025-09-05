import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // ✅ ไม่ต้องระบุโดเมน
})

export default api
