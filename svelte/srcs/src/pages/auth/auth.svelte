<script lang="ts">
	import axios from "axios";import { onMount } from "svelte";
	import { isLogin } from "../../stores/loginStore";

	const title = "Auth test page";
	isLogin.update(isLogin => true);
	// constructor
	onMount( () => {
	});
</script>

<main>
	<h1>{title}</h1>
</main>

<style>
	h1 { color: white;}
</style>
