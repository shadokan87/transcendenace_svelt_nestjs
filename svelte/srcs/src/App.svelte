<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import Nav from './Nav.svelte';
	import "./common.css";
	import Chat from "./pages/chat/chat.svelte"
	import Leaderboard from './pages/leaderboard/leaderboard.svelte';
	import Play from './pages/play/play.svelte';
	import Overlay from './common/Overlay.svelte';
	import CreateRoom from './pages/chat/createRoom.svelte';
	let login = true;
	const loginUser = () =>{ !login ? (login = true) : (login = false); }
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
				<Route>
					<Play />
				</Route>
		</div>
	</div>
	</Router>
{:else}
<main>
<div class="mainPage">
	<h1 id="title">Transcendance</h1>
	<img src="./botpong.gif" alt="robot playing ping pong" id="cannyPic">
		<div class="bigButton" on:click={loginUser} role="button">
			<h1>
				Sign in with 42
			</h1>
		</div>
</div>
</main>
{/if}
<style>
main
{
	display: flex;
	background-color: #2d2d2d;
	justify-content: center;
	height: 100vh;
}
.navSection
{
	margin: 0;
	padding: 0;
	width: 5em;
}
#title
{
	font-family: 'Fredoka One', cursive;
	color: white;
	font-size: 3em;
	text-align: center;
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
