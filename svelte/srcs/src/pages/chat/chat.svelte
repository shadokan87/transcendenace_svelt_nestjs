<script lang="ts">
import chatFeed from "./chatFeed.svelte"
import ChatInput from "./chatInput.svelte";
</script>

<main>
	<div class="chatWrapper">
		<div class="chatNav">
		<input type="text" placeholder="Search a message / channel" id="searchMessage">
		</div>
		<div class="chatContent">
			<div class="displaySection">
				<h1 style="text-align: center;color: E9E9E9;font-size: 2em;">Room Name</h1>
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
		background-color: #E2E2E2;
	}
	.inputSection
	{
		padding: 2em;
		display: flex;
		justify-content: center;
		background-color: #E2E2E2;
	}
	.inputContainer
	{
		display: flex;
		justify-content: left;
		height: 5em;
		width: 100%;
		background-color: #E9E9E9;
		border-radius: 1em;
		padding: 0.5em;
	}
	#searchMessage
	{
		margin-left: auto;
		transition-duration: 0.2s;
		height: 3em;
		margin: 1em;
		outline: none;
		border-radius: 1em;
		border: 0.3em solid magenta;
	}
	#searchMessage:focus
	{
		transition-duration: 0.2s;
		outline: none;
		border-radius: 10px;
	}
</style>
