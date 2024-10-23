<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
const store = useAuthStore()
const state = reactive({
	token: ''
})

onMounted(() => {
	state.token = store.getToken
})  

</script>
<template>
  <div class="flex">
		<h1>Home:</h1>
		<div>
			<q-btn
				label="Logout"
				color="primary"
				no-caps
				@click="store.logout()"
			/>
		</div>
    <p>
      {{ state.token }}
    </p>
  </div>
</template>
<style scoped lang="css"></style>
