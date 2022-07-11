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
    <img src="./angry-panda.gif" alt="user-avatar" id="userAvatar">
    <div class="userInfo">
        <h1 id="nick">{nick}</h1>
        <h1 id="userId">#{id}</h1>
    </div>
</div>
<style>
    #nick
    {
        color: white;
        font-size: 1em;
        float: right;
    }
    #userId
    {
        color: grey;
        font-size: 0.8em;
        flex-wrap: wrap;
        position: relative;
        bottom: 1em;
    }
.profileCard
{
    display: flex;
    flex-wrap: nowrap;
    left: 0;
    right: 0;
    height: 6em;
    border-radius: 0.5em;
    padding: 0.5em;
    background-color: #232424;
}
#userAvatar
{
    transition-duration: 0.2s;
    margin: 0.5em;
    height: 4em;
    width: 4em;
    border-radius: 0.5em;
    box-sizing: border-box;
    border: 0.2em solid white;
    cursor: pointer;
}
</style>