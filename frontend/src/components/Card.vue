<script setup>
  import { onMounted, ref } from 'vue'
  import api from '@/service/api'

  const message = ref('')

  onMounted(async () => {
    try {
      const res = await api.get('/hello')
      message.value = res.data.message
    } catch (error) {
      console.error('API error:', error)
      message.value = 'API not working ❌'
    }
  })
</script>

<template>
  <v-container>
    <v-card class="pa-4">
      <h2>{{ message }}</h2>
    </v-card>
  </v-container>
</template>
