<script setup lang="ts">

const proxy = getCurrentInstance()!.appContext.config.globalProperties

const store = useAuthStore()

 const emit = defineEmits(['logged'])
	const props = defineProps({
		buttonProps: {
			default: () => {
				return {}
			}
		}
	})

	const state = reactive({
		success: true,
		loading: false
	})

   onMounted(() => {
		store.getFacebookSettings().then(() => addCDN())
	})	
    
  
  const appIdFacebook = computed(() => store.getFacebookClientId);
	
	const propsButton = computed( () => {
		return {
			color: 'blue',
			icon: 'fab fa-facebook',
			loading: state.loading,
			vIf: state.success,
			...props.buttonProps
		}
	})
  
	////add CDN  to head
	async function  addCDN() {
		let appId = appIdFacebook.value
		window.fbAsyncInit = function () {
			FB.init({
				appId: appId,
				autoLogAppEvents: true,
				xfbml: true,
				version: 'v4.0'
			});
		};
  
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs?.parentNode?.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
	
	//SignIn method
  async function signIn() {
		//let app = this //assigned this to another variable
		state.loading = true
		//Request login to facebook
		FB.getLoginStatus(function (response) {
			if (response.status == 'connected') return login(response)
			FB.login(response => {
				login(response)
			}, {auth_type: 'reauthorize', scope: 'public_profile,email'})//Open window to login with facebook
		})
	}
      //Request Login
  async function login(response) {		
		//Validate response
		if (response.status != 'connected') return state.loading = false
		//Get access Token
		let token = response.authResponse.accessToken

	}   

 </script>
  

<template>
	<SocialAuthSocialBtn
		@click.native="signIn()"
		v-if="appIdFacebook"
		:loading="state.loading"
		:title="'--'"
		icon=""
	/>
</template>
  