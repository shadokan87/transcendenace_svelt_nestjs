<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import SecureRoute from "./secureRoute/secureRoute.svelte";
	import Nav from './Nav.svelte';
	import "./common.css";
	import Chat from "./pages/chat/chat.svelte"
	import Leaderboard from './pages/leaderboard/leaderboard.svelte';
	import Play from './pages/play/play.svelte';
	import OnBoardPage from "./pages/onboard/onboard.svelte";
	import Overlay from './common/Overlay.svelte';
	import Login from "./pages/login/login.svelte";
	import CreateRoom from './pages/chat/createRoom.svelte';
	import { onMount } from "svelte";
	import { isLogin, onBoard, profile } from "./stores/loginStore";
	import profileCard from "./widget/users/profile/profileCard.svelte"
	import axios from "axios";
import ProfileCard from "./widget/users/profile/profileCard.svelte";

	let login = false;
	let onboard = false;
	isLogin.subscribe(val => { login = val});
	onBoard.subscribe(val => { onboard = val});
	axios.defaults.withCredentials = true
	onMount( () => {
		// check login status
		axios({
			method: 'Get',
			url: 'http://localhost:3000/users/see_status',
			withCredentials: true,
		})
		.then( (res) => {
			console.log(res);
			if (res.data == "onboard")
				onBoard.update( onBoard => true );

			// get profile
				axios.get("http://localhost:3000/users/profile")
				.then( profileRes => {
					profile.set(profileRes.data)
					console.log(profileRes)
				})
				.catch ( () => {
					console.log("failed to get user profile");
				});

			console.log(res);
			console.log(onboard);
			isLogin.update( isLogin => true );
		})
		.catch( () => {
			isLogin.update( isLogin => false );
		});
	})
</script>

{#if onboard}
	<OnBoardPage />
{:else if login}
	<Router>
		<div id="appHolder">
			<Overlay/>
			<ProfileCard />
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
