<script lang="ts">
    export let src = "";
    export let extension = "";
    export let selected = "";
    export let name = "";
    export let alt = "";

	import navselect from "./stores/NavStore.js";
    import { fade, fly, scale} from 'svelte/transition';
    import { onMount } from  "svelte";
    import { Router, Route, Link } from "svelte-navigator";
    let select = "";
    navselect.subscribe( val => { select = val});
	const toggleNav = () => { navselect.update(navselect => name); };
    onMount( () => {
        console.log("Mounted");
    });
</script>

        <Link to={name}>
        {#if select != name}
          <div class="navBtn" id={name} role="button" on:click={toggleNav}>
                <img src={src + "." + extension} {alt} id="img">
            </div>
        {:else}
			<div class="navBtn" id={name} role="button" on:click={toggleNav}>
                <img src={src + selected + "." + extension} {alt} in:fade>
            </div>
        {/if}
        </Link>
<style>
.navBtn
{
    transition-duration: 0.2s;
    cursor: pointer;
    height: 5em;
    padding: 1em;
	height: 1.5em;
	display: flex;
	justify-content: center;
}
.navBtn:hover
{
    transition-duration: 0.2s;
    background-color: #1d1d1d;
    cursor: pointer;
    height: 5em;
    padding: 1em;
	height: 1.5em;
	display: flex;
	justify-content: center;
}
.navBtn:active
{
    transition-duration: 0.2s;
    background-color: #141414;
    cursor: pointer;
    height: 5em;
    padding: 1em;
    height: 1.5em;
	display: flex;
	justify-content: center;
}
.navBtn img
{
    height: 1.8em;
	width: 3em;
}
.btnSelected
{
    background-color: #1d1d1d;
}
</style>
