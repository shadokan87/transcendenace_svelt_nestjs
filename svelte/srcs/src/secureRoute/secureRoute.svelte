<script lang="ts">
	import { Route, useNavigate, useLocation } from "svelte-navigator";
	import { subscribe } from "svelte/internal";
	import { isLogin } from "../stores/loginStore";

	let loginState = false;
	const navigate = useNavigate();
	const loc = useLocation();
	export let path;
	isLogin.subscribe( val => { loginState = val });
	$: if (!loginState) {
		navigate("/login", {
			state: { from: $loc.pathname },
			replace: true,
		});
	}
	console.log("secureRoute");
</script>
{#if loginState}
	<Route {path}>
	</Route>
{/if}
<style>
</style>
