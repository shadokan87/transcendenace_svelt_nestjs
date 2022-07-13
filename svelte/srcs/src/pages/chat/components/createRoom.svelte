<script lang="ts">
    import toggled from "../../../stores/ToggleStore";
    let currentToggled = "";
    let name = "POPUP_CREATE_ROOM";
    toggled.subscribe( val => {currentToggled = val});
    // const toggleOpt = () => {
    //         toggled.set(name);
    //         // console.log(toggled);
    // }
</script>
<style>

</style>