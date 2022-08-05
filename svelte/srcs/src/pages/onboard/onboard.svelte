<script lang="ts" type="module" src="qs">
	import { onBoard, profile } from "../../stores/loginStore";
	import axios from "axios";

	let onboard = false;
	let inputNick: string = "";
	let myprofile = {};
	let step: number = 1;
	onBoard.subscribe( val => onboard = val);
	profile.subscribe( val =>  myprofile = val);
	console.log(profile);
axios.defaults.headers.common = {
  "Content-Type": "application/json"
}
	const func = () => {
		onBoard.update(onBoard => false);
	};
	const checkNick = async () => {
		console.log(inputNick);
		if (inputNick == "")
			return ;
		await axios.patch("http://localhost:3000/users/change_nickname", {val: inputNick} )
		.then( (res) => {
			console.log(res);
			if (res.data == inputNick)
			{
				myprofile.nickname = inputNick;
				profile.update(profile => myprofile);
				onBoard.update(onBoard => false);
			}
		})
		.catch( (res) => {
			console.log(res);
		});
		inputNick = "";
	};
	const submitNick = (event) => {
	if (event.key != "Enter")
			return ;
		checkNick();
		inputNick = "";
	}
</script>
<main>
	<h1 id="title" on:click={func}>Welcome <span id="login">{myprofile.username}</span> !</h1>
	{#if step == 1}
		<div class="nickNameWrapper">
			<h1 id="getNick">Please enter your nickname</h1>
			<input
					type="text"
					bind:value={inputNick}
					class="input"
					id="getNickInput"
					on:keydown={submitNick}>
			<div class="medButton" id="submit" on:click={checkNick}>
					<h1>Submit</h1>
				</div>
		</div>
	{/if}
</main>
<style>
	*{
		padding: 0;
		margin: 0;
	}
main
{
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #2d2d2d;
	justify-content: center;
	height: 100vh;
}
h1
	{
	color: white;
}
.nickNameWrapper
	{
	align-self: center;
	margin: 2em;
	width: 50vw;
}
#title
	{
	cursor: pointer;
	/* font-family: 'Fredoka One', cursive; */
	font-size: 3em;
	text-align: center;
	margin: 2em;
}
#login
	{
	color: magenta;
}
.input
	{
	height: 2em;
	margin: 0.2em;
	background-color: #232424;
	width: 40%;
	outline: none;
	border: 0;
	border-radius: 0.5em;
	color: white;
	font-size: 2em;
}
</style>
