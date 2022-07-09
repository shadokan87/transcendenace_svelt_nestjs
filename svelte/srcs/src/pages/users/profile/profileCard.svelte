<script lang="ts">
    export let wins;
    export let loss;
    export let played;
    export let nick;
    export let id;
    export let nav = false;
    export let imgUrl = "";
</script>
<div class="profileCard">
    <!-- <img src="./angry-panda.gif" alt="user-avatar" id="userAvatar">
    <h1 id="nick">{nick}</h1> -->
</div>
<style>
.profileCard
{
    left: 0;
    right: 0;
    height: 6em;
    border-radius: 0.5em;
    padding: 0.5em;
    background-color: #232424;
}
#userAvatar
{
    height: 4em;
    width: 4em;
    border-radius: 0.5em;
    box-sizing: border-box;
    border: 0.2em solid white;
}
</style>