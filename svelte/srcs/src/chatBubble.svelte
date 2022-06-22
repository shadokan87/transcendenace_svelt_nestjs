<script lang="ts">
export let content = "";
export let sender = "senderName";
</script>
<div id="bubble">
	<p id="content">{content}</p>
	<h3 id="sender">{sender}</h3>
</div>
<style>
	#bubble
	{
		transition-duration: 0.2s;
		margin: 0.4em;
		background-color: #E9E9E9;
		width:100%;
		word-wrap: break-word;
		align-self: flex-end;
	}
	#bubble:hover
	{
		transition-duration: 0.2s;
		margin: 0.4em;
		background-color: #E9E9E9;
		border: 0.2em solid magenta;
		width:100%;
		word-wrap: break-word;
		align-self: flex-end;
	}
	#sender
	{
		margin: 1em;
		font-size: 1em;
		color: #535353;
	}
	#content
	{
		margin: 1em;
		font-size: 2em;
		color: #535353;
	}
</style>
