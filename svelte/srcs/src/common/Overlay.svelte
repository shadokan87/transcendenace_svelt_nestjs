<script lan="ts">
import { onMount } from "svelte";
import { fade } from "svelte/transition";
import { toggled } from "../stores/ToggleStore";
import { overlay } from "../stores/ToggleStore"
import { overlayCloseByClick } from "../stores/ToggleStore"
let status = "";
let byClick = "";
overlay.subscribe( val => {status = val});
overlayCloseByClick.subscribe( val => {byClick = val});
const closeOverlay = () =>
{
	if (byClick == "true") overlay.update(overlay => "off");
}
onMount(() => console.log("status is:" + status));
</script>
{#if status == "on"}
	<div class="overlay" transition:fade="{{duration: 100}}" on:click={ closeOverlay }>
	</div>
{/if}
<style>
.overlay
{
	background-color: black;
	opacity: 60%;
	position: absolute;
	z-index: 3;
	display: block;
	height: 100vh;
	width: 100vw;
}
</style>