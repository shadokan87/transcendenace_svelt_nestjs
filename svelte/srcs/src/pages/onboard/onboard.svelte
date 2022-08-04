<script lang="ts">
	import { onBoard, profile } from "../../stores/loginStore";
	let onboard = false;
	let myprofile = {};
	onBoard.subscribe( val => onboard = val);
	profile.subscribe( val =>  myprofile = val);
	console.log(profile);
	const func = () => {
		onBoard.update(onBoard => false);
	};
</script>
<main>
	<h1 id="title" on:click={func}>Welcome motoure !</h1>
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
	cursor: pointer;
	/* font-family: 'Fredoka One', cursive; */
	color: white;
	font-size: 3em;
	text-align: center;
}
</style>
