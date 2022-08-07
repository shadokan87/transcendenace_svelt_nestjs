<script lang="ts">
	import { overlay } from "../../stores/ToggleStore";
	import { popup } from "../../stores/ToggleStore";
	import { onDestroy, onMount } from "svelte";
	import { overlayCloseByClick } from "../../stores/ToggleStore";
	import { fly, scale } from "svelte/transition";
	import { quadOut } from "svelte/easing";
	import axios from "axios";

	onMount(() => overlayCloseByClick.update(overlay => "false"));
	onDestroy(() => overlayCloseByClick.update(overlay => "true"));
	let link = "POPUP_CREATE_ROOM";
	let currentLink = "";
	popup.subscribe( val => {currentLink = val});

	let inputName = "";
	const submitName = (event) =>
	{
		if (event.key != "Enter")
			return ;
		/* inputName = ""; */
	}

	let inputPswd = "";
	const submitPswd = (event) =>
	{
		if (event.key != "Enter")
			return ;
		/* inputPswd = ""; */
	}
	const closeWindow = () =>
	{
		overlay.update(overlay => "off");
		popup.update(popup => "none");
		inputPswd = "";
		inputName = "";
	}
	const submitRoom = async () => {
		let dto = {
		  name: inputName,
		  password: inputPswd,
		  visibility: (visimode == "public" ? true : false),
		  avatar: "",
		  UserId: 0
		}
		console.log(dto.visibility);
		await axios.post("http://localhost:3000/rooms/create", dto)
		.then( (res) => {
			console.log(res);
		})
		.catch( (res) => {
		});
	}
	let placeholder = "Create a room";
	let visimode = "public";
	let Visibilty = "Visibility: " + visimode;
	let passwordVisi = "text";
	const changeVisiMode = () => {
	if (visimode == "public")
		visimode = "private";
	else
		visimode = "public";
	Visibilty = "Visibilty: " + visimode; };
	const changePswdVisi = () => {passwordVisi = passwordVisi == "password" ? "text" : "password"; };
	const getNamePreview = () => {
		return (inputName);
	};
	let nmBreakpoint = 15;
</script>
{#if currentLink == link}
	<div class="popupCard-big" in:fly="{{ y: 100, duration: 500 }}" out:scale="{{ delay: 70, duration: 300, easing: quadOut}}">
					<div class="top">
						<div class="titleWrapper">
							<h1 id="title">{placeholder}</h1>
						</div>
						<div class="closeBtnWrapper">
							<img id="close" src="./close.svg" on:click={closeWindow} alt="close-icon">
						</div>
					</div>
		<div class="sides-wrapper">
			<div class="lhs">
				<div>
					<h1 id="namelabel">Name</h1>
					<input
							type="text"
								  bind:value={inputName}
							class="input"
							id="nameInput"
							on:keydown={submitName}/>   
				</div>
				<div>
					<h1 id="pswdlabel">Password</h1>
					<h1 id="shwpswd" on:click={changePswdVisi}>Show password</h1>
					<input
							type="password"
							bind:value={inputPswd}
							class="input"
							id="nameInput"
							on:keydown={submitPswd}>
				</div>
				<div>
					<h1>{Visibilty}</h1>
					<label class="switch">
						<input type="checkbox" on:click={changeVisiMode}>
						<span class="slider round"></span>
					</label>
				</div>
			</div>
			<div class="rhs">
				<h1 id="room-name">{inputName.length == 0
				? "My room"
				: inputName.length < nmBreakpoint
				? inputName
				: inputName.substring(0, nmBreakpoint) + ". . ."}</h1>
				<div class="avatarWrapper">
					<img src="./import_icon.svg" alt="import icon" id="import">
					<img src="./room-default-avatar.png" alt="room-avatar" id="room-avatar">
				</div>
				<div class="medButton" id="submit" on:click={submitRoom}>
					<h1>Submit</h1>
				</div>
			</div>
		</div>
	</div>
{/if}
<style>
	h1{
		color: white;
	}
	.sides-wrapper
		{
		display: grid;
		grid-template-columns: 4fr 3fr;
		/* background-color: red; */
		height: 100%;
		margin: 50px;
	}
	.lhs
		{
		/* background-color: blue; */
	}
	.rhs
		{
		/* background-color: purple; */
		height: 100%;
		padding: 1em;
		text-align: center;
	}
	.top
		{
		display: grid;
		grid-template-columns: 92% 8%;
		height: 10%;
		width: 100%;
		/* background-color: cyan; */
	}
	.titleWrapper
		{
		/* background-color: yellow; */
		display: flex;
		justify-content: center;
		transform: translateX(8%);
	}
	.avatarWrapper
	{
		height: 10em;
		width: 10em;
		/* background-color: red; */
		margin: 0 auto;
	}
	.closeBtnWrapper
		{
		/* background-color: green; */
		z-index: 4;
		display: flex;
		justify-content: center;
		}
		#close
			{
			place-self: center;
			cursor: pointer;
			height: 2em;
			width: 2em;
		}
	#title
		{
	}
	#shwpswd{ color: rgba(255, 255, 255, 0.5);
	font-size: 0.8em;
	cursor: pointer;}
#shwpswd:hover { color: rgba(255, 255, 255, 100%); }
#room-avatar
	{
    margin: 0.5em;
    height: 8em;
    width: 8em;
    border-radius: 0.5em;
    box-sizing: border-box;
	border: 0.4em solid white;
    /* cursor: pointer; */
}
#import
	{
	float: right;
	position: absolute;
	cursor: pointer;
	transform: translateX(6em);
	width: 4em;
}
.input
	{
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
