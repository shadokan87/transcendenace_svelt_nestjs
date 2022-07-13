<script lang="ts">
    export let opts;
    import toggled from "../../../stores/ToggleStore";
    let currentToggled = "";
    let name = opts.link;
    toggled.subscribe( val => {currentToggled = val});
    const toggleOpt = () => {
            toggled.set(name);
            // console.log(toggled);
    }
</script>
      <div class="dropDown">
                {#each opts as opt}
                <div class="dropDownOpt" id={opt.link} on:click={toggleOpt}>
                    <h1>
                        {opt.description}
                    </h1>
                </div>
                {/each}
        </div>
<style>
    .dropDown
    {
        height: auto;
        width: 200px;
        background-color: #232424;
        border: 0.5px solid #242424;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 200px;
        padding: 1em;
        transform: translateY(-10em);
        border-radius: 0.5em;
        float: right;
    }
    .dropDownOpt
    {
        cursor: pointer;
        border-radius: 1em;
        text-align: left;
    }
    .dropDownOpt:hover
    {
        transition-duration: 0.3s;
        cursor: pointer;
        background-color: magenta;
        border-radius: 0.2em;
    }
    .dropDown h1{
        margin: 1em;
        color: white;
        font-size: 1em;
    }
</style>