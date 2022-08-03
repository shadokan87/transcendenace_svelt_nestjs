<script lang="ts">
	import "../../common.css"
	import { Route, useNavigate, useLocation } from "svelte-navigator";
	import { subscribe } from "svelte/internal";
	import { isLogin } from "../../stores/loginStore.js"

	let loginState = false;
	const navigate = useNavigate();
	const loc = useLocation();
	isLogin.subscribe( val => { loginState = val });
	$: if (!loginState) {
		navigate("/login", {
			state: { from: $loc.pathname },
			replace: true,
		});
	}
</script>
<main>
<div class="mainPage">
	<h1 id="title">Transcendance</h1>
	<img src="./botpong.gif" alt="robot playing ping pong" id="cannyPic">
	<a href="http://localhost:3000/auth/login">
	<div class="bigButton">
		<h1>Sign in with 42</h1>
	</div>
	</a>
</div>
</main>
<style>
main
{
	display: flex;
	background-color: #2d2d2d;
	justify-content: center;
	height: 100vh;
}
#title
{
	/* font-family: 'Fredoka One', cursive; */
	color: white;
	font-size: 3em;
	text-align: center;
}
</style>
