<script lang="ts">
let inputValue;
function getPlaceHolder()
{
	return ("Type a message");
}
function submitInput(event)
{
	if (event.key != "Enter")
		return ;
	inputValue = "";

}
</script>
<input
	type="text"
	placeholder={getPlaceHolder()}
	bind:value={inputValue}
	id="input"
	on:keydown={submitInput}/>
<div id="send" role="button" on:click={submitInput}><h2>send</h2></div>
<style>
#input
{
	margin: 0.2em;
	background-color: #E9E9E9;
	width: 90%;
	outline: none;
	border: 0;
	color: grey;
	font-size: 3em;
	}
	#send
	{
		display: block;
		float: right;
		cursor: pointer;
		color: magenta;
		width: 5em;
	}
</style>
