<script lang="ts">
	import { overlay } from "../../stores/ToggleStore";
	import { popup } from "../../stores/ToggleStore";
	import { onDestroy, onMount } from "svelte";
	import { overlayCloseByClick } from "../../stores/ToggleStore";
	import { fly, scale } from "svelte/transition";
	import { quadOut } from "svelte/easing";
	import axios from "axios";

		const getPublicRooms = async () => {
			await axios.get("http://localhost:3000/rooms/public")
			.then( (res) => {
				console.log(res);
			})
			.catch( (res) => {
			});
		}
	onMount(() => {
		overlayCloseByClick.update(overlay => "false")
		});
	getPublicRooms();
	onDestroy(() => overlayCloseByClick.update(overlay => "true"));
	const closeWindow = () =>
	{
		overlay.update(overlay => "off");
		popup.update(popup => "none");
	}
	const link = "POPUP_JOIN_ROOM";
	let currentLink = "";
	let title = "Join a room";
	popup.subscribe( val => {currentLink = val});
</script>
{#if currentLink == link}
	<div class="popupCard-big" in:fly="{{ y: 100, duration: 500 }}" out:scale="{{ delay: 70, duration: 300, easing: quadOut}}">
					<div class="top">
						<div class="titleWrapper">
							<h1 id="title">{title}</h1>
						</div>
						<div class="closeBtnWrapper">
							<img id="close" src="./close.svg" on:click={closeWindow} alt="close-icon">
						</div>
					</div>
				<div class="medButton" id="submit" on:click={getPublicRooms}>
					<h1>Submit</h1>
				</div>
			</div>
{/if}
<style>
	h1{
		color: white;
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
</style>
