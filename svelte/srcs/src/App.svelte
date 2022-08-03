<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import SecureRoute from "./secureRoute/secureRoute.svelte";
	import Nav from './Nav.svelte';
	import "./common.css";
	import Chat from "./pages/chat/chat.svelte"
	import Leaderboard from './pages/leaderboard/leaderboard.svelte';
	import Play from './pages/play/play.svelte';
	import Overlay from './common/Overlay.svelte';
	import Login from "./pages/login/login.svelte";
	import CreateRoom from './pages/chat/createRoom.svelte';
	import { onMount } from "svelte";
	import { isLogin } from "./stores/loginStore";
	import axios from "axios";

	let login = false;
	isLogin.subscribe(val => { login = val});
	onMount( () => {
		axios({
			method: 'Get',
			url: 'http://localhost:3000/users/see_status',
			withCredentials: true,
		})
		.then( () => {
			isLogin.update( isLogin => true );
		})
		.catch( () => {
			isLogin.update( isLogin => false );
		});
	})
</script>

{#if login}
	<Router>
	<div id="appHolder">
	<Overlay/>
	<CreateRoom />
		<div class="navSection">
			<Nav/>
		</div>
		<div class="canvas">
				<Route path="chat">
					<Chat />
				</Route>
				<Route path="leaderboard">
					<Leaderboard />
				</Route>
				<Route path="play">
					<Play />
				</Route>
		</div>
	</div>
	</Router>
{:else}
	<Router>
		<Login />
	</Router>
{/if}
<style>
.navSection
{
	margin: 0;
	padding: 0;
	width: 5em;
}
#appHolder
{
	display: grid;
	grid-template-columns: 0.2fr 8fr;
	height: 100vh;
	background-color: #2D2D2D;
	}
	.canvas
	{
		background-color: grey;
		width: 100%;
	}
</style>
