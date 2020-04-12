import Api from './Api'
import Csrf from './Csrf'

async function register(form) {
	await Csrf.getCookie()
	return Api.post('/register',form)
}

async function login(form){
	await Csrf.getCookie()
	return Api.post('/login',form)
}

async function logout(){
	await Csrf.getCookie()
	return Api.post('/logout')
}

function auth(){
	return Api.get('/user')
}

async function isAuthenticated() {
	let response = await Api.get('/auth')
	let auth = await response
	console.log('auth?',auth.data)
	return auth
}

export default {
	register,
	login,
	logout,
	auth,
	isAuthenticated
}