<script setup lang="ts">
const authStore = useAuthStore()
onMounted(() => {
  authStore.refreshSession()
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
