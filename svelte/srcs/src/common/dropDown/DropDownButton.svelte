<script lang="ts">
    export let src;
    export let name;
    export let alt;
    export let opts;
    import { toggled } from "../../stores/ToggleStore";
    import DropDown from "./DropDown.svelte"
    let currentToggled = "";
    toggled.subscribe( val => {currentToggled = val});
    const toggleBtn = () => { toggled.update(toggled => (name == currentToggled ? "none" : name)); }
</script>
<div class="dropDownBtn" id={name}>
    <div class="toggle" on:click={ toggleBtn }>
        <img {src} {alt}>
        {#if currentToggled == name}
            <DropDown {opts}/>
        {/if}
    </div>
</div>

<style>
    .dropDownBtn
    {
        /* display: flex; */
    }
    .toggle
    {
        float: right;
        transition-duration: 0.2s;
        display: flex;
        justify-content: center;
        height: 1em;
        width: 1em;
        margin: 1em;
        padding: 1em;
        border-radius: 0.5em;
        background-color: #232424;
        cursor: pointer;
    }
    .toggle:hover
    {
        transition-duration: 0.2s;
        display: flex;
        justify-content: center;
        height: 1em;
        width: 1em;
        margin: 1em;
        padding: 1em;
        border-radius: 0.5em;
        background-color: #1d1d1d;
        cursor: pointer;
    }
</style>
