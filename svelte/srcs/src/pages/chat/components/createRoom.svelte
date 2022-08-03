<script lang="ts">
    import toggled from "../../../stores/ToggleStore";
    let currentToggled = "";
    let name = "POPUP_CREATE_ROOM";
    toggled.subscribe( val => {currentToggled = val});
</script>
<style>

</style>
