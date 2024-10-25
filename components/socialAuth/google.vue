<script setup lang="ts">

	const proxy = getCurrentInstance()!.appContext.config.globalProperties
	const store = useAuthStore()
 const emit = defineEmits(['logged'])

	const state = reactive({
		success: true,
		loading: false
	})

	onMounted(() => {
		store.getGoogleSettings().then(() => addCDN())
	})	
	
	const clientIdGoogle = computed(() => store.getGoogleClientId);

	async function addCDN(){
		let cdn = document.createElement('script')//create CDN google recaptcha
		cdn.setAttribute('src', 'https://accounts.google.com/gsi/client')
		cdn.onload = loadClientId()//callback when loaded cdn
		document.head.appendChild(cdn)//add to head
	}

	//Load Client ID
	async function loadClientId() {
		setTimeout(() => {
			let clientId = clientIdGoogle || null;
			if(!clientId) return;

			// Initialize Google Identity Services
			google.accounts.id.initialize({
				client_id: clientId,
				callback: login(),
				scope: 'profile email openid',
				cancel_on_tap_outside: false,
				context: 'use'
			});
		}, 500)
	}

	//SignIn method
	async function signIn(response) {
		google.accounts.id.prompt()
	}
    //Request Login
  async function login(response) {
		let token = response.credential
		//Validate response
		if (!token) {			
			//error
		}		
		store.authSocialNetwork(token)
		state.loading = false;
		emit('logged')
	}

</script>
  

<template>
	<Button 
		v-if="clientIdGoogle"
		@click="signIn()"		
		class="!tw-rounded-[100%] tw-w-14 tw-h-14 tw-mr-5"
		:loading="state.loading"
	>
		<img src="@/assets/svg/brand-google.svg" alt="google" />
	</Button>
</template>
  