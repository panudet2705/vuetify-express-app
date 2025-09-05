<script setup>
  import { onMounted, ref } from 'vue'
  import api from '@/service/api'

  const message = ref('')

  onMounted(async () => {
    const res = await api.get('/api/hello')
    message.value = res.data.message
  })
</script>

<template>
  <v-container>
    <v-card class="pa-4">
      <h2>{{ message }}</h2>
    </v-card>
  </v-container>
</template>
