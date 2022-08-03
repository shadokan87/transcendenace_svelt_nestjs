<script lang="ts">
	import { isLogin } from "../../stores/loginStore";
	import  axios  from "axios";
const logout = () => {
	axios.get("http://localhost:3000/auth/logout");
	isLogin.update(isLogin => false);
};
</script>
<main>
	<h1> This is play page.</h1>
	<h1 style="cursor:pointer" on:click={logout}>logout</h1>
</main>

<style>
	h1{
		text-align: center;
		color: white;
		font-size: 5em;
	}
</style>
