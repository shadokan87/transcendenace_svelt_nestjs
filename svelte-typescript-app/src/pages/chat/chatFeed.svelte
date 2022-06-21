<script lang="ts">
import ChatBubble from "../../chatBubble.svelte";
let bubble = {
	content: "test",
	sender: "motoure"
};
</script>
<ChatBubble {...bubble}/>
	<ChatBubble {...bubble}/>
<style>
</style>
