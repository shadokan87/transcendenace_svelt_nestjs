<script lang="ts">
	import oneMessage from "./oneMessage.svelte";
	import { msg, err } from "../../stores/alertStore.js"
import { onDestroy } from "svelte";
	let title = "Create room";
	let errors: string[] = [];
	let messages: string[] = [];
	err.subscribe( val => errors = val);
	msg.subscribe( val => messages = val);
	const remove = (message: any) => {
		err.update(err => [err.slice(0, message), ...err.slice(message + 1)]);
	};
</script>
<div class="frame">
	{#each errors as message}
		<svelte:component this={oneMessage} {message}
	 borderColor="red" on:click={ () => remove(message)}/>
	{/each}
	{#each messages as message}
		<svelte:component this={oneMessage} {message} borderColor="green"/>
	{/each}
</div>
<style>
	.frame{
		display: block;
		height: 0;
		width: 0;
		position: absolute;
		margin-left: calc(60vw - 400px);
		z-index: 10;
	}
</style>
