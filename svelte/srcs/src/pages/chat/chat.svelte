<script lang="ts">
import chatFeed from "./components/feed/chatFeed.svelte"
import ChatInput from "./components/chatInput.svelte";
import ProfileCard from "../users/profile/profileCard.svelte";
import App from "../../App.svelte";
import ChatBubble from "./components/feed/chatBubble.svelte";
import ChatFeed from "./components/feed/chatFeed.svelte";
import DropDownButton from "../../common/dropDown/DropDownButton.svelte";
import CreateRoom from "./createRoom.svelte";
function getRoomName()
{
	return ("Room name");
}
let profile = {
	wins: "187",
	loss: "26",
	played: "213",
	nick: "shadokan87",
	id: "2459",
	nav: true
};

let plusBtnOpts = [
	{ link: "POPUP_CREATE_ROOM", description: "create a room"},
	{ link: "POPUP_JOIN_ROOM", description: "join a room"},
];

let plusBtn = {
	src: "./cross.svg",
	name: "chat-footer-plusBtn",
	triggers: "DropDown",
	alt: "plus-icon",
	opts: plusBtnOpts
};
</script>

<main>
	<div class="chatWrapper">
		<div class="chatNav">
			<div class="top-footer-wrapper">
				<div class="chatNav-top">
					<ProfileCard {...profile} />
				</div>
				<div class="chatNav-footer">
					<div class="chatNav-footer-left">
					</div>
					<div class="chatNav-footer-right">
						<DropDownButton {...plusBtn} />
					</div>
				</div>
			</div>
		</div>
		<div class="chatContent">
			<div class="displaySection">
				<h1 style="text-align: center;color: white;font-size: 2em;">{getRoomName()}</h1>
				<svelte:component this={chatFeed}/>
			</div>
			<div class="inputSection">
				<div class="inputContainer">
					<ChatInput />
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.chatWrapper
	{
		display: grid;
		grid-template-columns: 2fr 6.5fr;
		grid-template-rows: 1fr;
		height: 100vh;
	}
	.chatNav
	{
		padding: 0.5em;
		display: block;
		flex-direction: row;
		justify-content: center;
		background-color: #2D2D2D;
	}
	.chatContent
	{
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 12fr 1fr;
		height: 100vh;
	}
	.displaySection
	{
		padding: 1em;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		background-color: #383838;
	}
	.inputSection
	{
		padding: 2em;
		display: flex;
		justify-content: center;
		background-color: #383838;
	}
	.inputContainer
	{
		display: flex;
		justify-content: left;
		height: 3em;
		width: 100%;
		background-color: #5C5C5C;
		box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
		border-radius: 1em;
		padding: 0.5em;
	}
	.top-footer-wrapper
	{
		display: inline-block;
		width: 100%;
		height: 100%;
		/* background-color: red; */
	}
	.chatNav-top
	{
		height: 95%;
		/* background-color: green; */
	}
	.chatNav-footer
	{
		height: 5%;
		/* background-color: purple; */
	}
</style>
