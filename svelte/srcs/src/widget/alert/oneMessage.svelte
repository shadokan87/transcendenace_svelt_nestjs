<script lang="ts">
import { onDestroy, onMount } from "svelte";
	import { msg, err } from "../../stores/alertStore.js"
	import { fly, scale, fade } from "svelte/transition";
	export let message;
	export let borderColor;
	let toggle = true;
	let errors: string[] = [];
	let messages: string[] = [];
	err.subscribe( val => errors = val);
	msg.subscribe( val => messages = val);
	setTimeout(() => {
		toggle = false;
		/* console.log("here"); */
		/* errors.splice(0, -1); */
		/* err.set(errors); */
	}, 2000);
</script>
		{#if toggle}
			<div class="box" id={borderColor} in:scale out:fly={{x:100}} on:click={() => toggle = false }>
				<h2>{message}</h2>
			</div>
		{/if}
<style>
	h2{ color: white; }
	#red { border: 0.1em solid red; }
	#green { border: 0.1em solid green; }
	.box{
		cursor: pointer;
		display: inline-block;
		vertical-align: top;
		align-self: center;
		text-align: center;
		border-radius: 0.5em;
		padding: 1em;
		margin: 1em auto;
		height: 5em;
		width: 400px;
		background-color: #333;
		z-index: 10;
	}
</style>
