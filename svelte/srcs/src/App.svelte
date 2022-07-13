<script lang="ts">
	import { Router, Route, Link } from "svelte-navigator";
	import Nav from './Nav.svelte';
	import "./common.css";
	import Chat from "./pages/chat/chat.svelte"
	import Leaderboard from './pages/leaderboard/leaderboard.svelte';
	import Play from './pages/play/play.svelte';

	let login = false;
	const loginUser = () =>{ !login ? (login = true) : (login = false); }
</script>

{#if login}
	<Router>
		<div class="overlay">
			<div class="hide"></div>
			<div class="test">
					<button>TEST</button>
					<h1>testtset</h1>
			</div>
		</div>
	<div id="appHolder">
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
	.test
	{
		height: 200px;
		width: 200px;
		background-color: grey;
		z-index: 10;
	}
	.hide
	{
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.5);
		position: absolute;
		display: block;
	}
main
{
	display: flex;
	background-color: #2d2d2d;
	justify-content: center;
	height: 100vh;
	background-color: black;
	z-index: 3;
}
.overlay
{
	position: fixed;
	z-index: 10;
	display: block;
	height: 100vh;
	width: 100vw;
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
