<script>
	export let name = "";
</script>
	<div class="smallButton" id={name + "Btn"} role="button">
		<h1>{name}</h1>
	</div>
<style>
.smallButton
{
    transition-duration: 0.2s;
    cursor: pointer;
    width: 10em;
    height: 4em;
    background: linear-gradient(180deg, #ff4444 -33.33%, #FA00FF 161.11%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 0 auto;
    color: white;
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    transform: translateY(100px);
}
.smallButton h1
{
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
vertical-align: middle;
    line-height: 2em;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}

.smallButton:hover
{
    transition-duration: 0.2s;
    cursor: pointer;
    width: 10em;
    height: 4em;
    background: linear-gradient(180deg,  #FF0000 -33.33%, #FA00FF 161.11%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: white;
    display: block;
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    transform: translateY(100px);
}


.smallButton:active
{
    transition-duration: 0.2s;
    cursor: pointer;
    width: 10em;
    height: 4em;
    background: linear-gradient(180deg,  #FF0000 -33.33%, #FA00FF 161.11%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: white;
    display: block;
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    transform: translateY(100px);
}
</style>
