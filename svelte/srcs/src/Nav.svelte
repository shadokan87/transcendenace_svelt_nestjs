<script lang="ts">
import App from "./App.svelte";
import NavButton from "./NavButton.svelte";
import navselect from "./stores/NavStore.js";
let selected = "";
navselect.subscribe( val => { selected = val });
let TLogo = {
    alt: "Square with letter T inside of it",
    extension: "svg",
    selected: "-selected",
    name: "Home",
    src: "./TLogo"
};

let gamepad = {
    src: "./gamepad",
    extension: "svg",
    selected: "-selected",
    alt: "gamepad logo",
    name: "play"
};

let chat = {
    src: "./chat",
    selected: "-selected",
    extension: "svg",
    alt: "chat logo",
    name: "chat"
};

let leaderboard = {
    src: "./Leaderboard",
    selected: "-selected",
    extension: "svg",
    alt: "leaderboard logo",
    name: "leaderboard"
};

</script>
    <nav>
        <div class="navWrapper" role="navigation">
            <NavButton {...TLogo} />
            <div class="navEmptySpace"></div>
            <NavButton {...gamepad} />
            <NavButton {...chat} />
            <NavButton {...leaderboard} />
			<div class="navEmptySpace"></div>
		</div>
	</nav>
<style>
:global(body){
padding: 0;
margin: 0;
}
.navWrapper
{
   display: grid;
   grid-template-rows: 0.5fr 0.6fr 0.5fr 0.5fr 0.5fr 1fr;
   grid-row-gap: 1em;
   height: 100vh;
   background-color: #242323;
   width: 7em;
   margin: 0px;
}
nav{
    margin: 0;
    width: 5em;
}
</style>
