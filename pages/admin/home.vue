<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
const store = useAuthStore()
</script>
<template>
  <div class="flex justify-center">
    <div>
      <h1>Home Page</h1>
      <p>{{ store.getUsername }}</p>
    </div>
    <div>
      <q-btn label="Logout" color="primary" no-caps @click="store.logout()" />
    </div>
  </div>
</template>
<style scoped lang="css"></style>
