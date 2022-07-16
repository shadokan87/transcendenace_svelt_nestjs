<script lang="ts">
let inputValue;
function getPlaceHolder()
{
	return ("Type a message . . .");
}
export function submitInput(event)
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
<style>
#input
{
	margin: 0.2em;
	background-color: #5C5C5C;
	width: 90%;
	outline: none;
	border: 0;
	color: white;
	font-size: 2em;
}
</style>
