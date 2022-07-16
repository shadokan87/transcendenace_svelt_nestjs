<script lang="ts">
    import { overlay } from "../../stores/ToggleStore";
    import { popup } from "../../stores/ToggleStore";
    import { onDestroy, onMount } from "svelte";
    import { overlayCloseByClick } from "../../stores/ToggleStore";
	import { fly } from "svelte/transition";

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
    	inputName = "";
    }

    let inputPswd = "";
    const submitPswd = (event) =>
    {
    	if (event.key != "Enter")
    		return ;
    	inputPswd = "";
    }

    const closeWindow = () =>
    {
        overlay.update(overlay => "off");
        popup.update(popup => "none"); 
    }
    let placeholder = "Create a room";
	let visimode = "public";
	let Visibilty = "Visibility: " + visimode;
	let passwordVisi = "text";
	const changeVisiMode = () => { if (visimode == "public") visimode = "private";
	else visimode = "public"; Visibilty = "Visibilty: " + visimode; };
	const changePswdVisi = () => {passwordVisi = passwordVisi == "password" ? "text" : "password"; };
</script>
{#if currentLink == link}
<div class="popupCard-big" in:fly="{{ y: 100, duration: 500 }}" out:fly>
    <div class="content">
        <div class="titleWrapper"
        style="display: flex; justify-content: center; width: 100%;">
            <h1 id="title">{placeholder}</h1>
            <div class="crossWrapper">
                <img  style="cursor: pointer;" src="./close.svg" on:click={closeWindow} alt="close-icon">
            </div>
        </div>
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
				<input type="checkbox" on:click={ changeVisiMode }>
                <span class="slider round"></span>
              </label>
        </div>
	</div>
	<div class="right-side">
		<h1>{inputName}</h1>
	</div>
</div>
{/if}
<style>
h1{
    color: white;
}
.crossWrapper
{
    float: right;
}
#title
{
}
#shwpswd{ color: rgba(255, 255, 255, 0.5);
        font-size: 0.8em;
        cursor: pointer;}
#shwpswd:hover { color: rgba(255, 255, 255, 100%); }
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
