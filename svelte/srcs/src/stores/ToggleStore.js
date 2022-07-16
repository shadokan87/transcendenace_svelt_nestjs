import { write } from "fs";
import { writable } from "svelte/store";

export const toggled = writable("none");
export const overlay = writable("off");
export const overlayCloseByClick = writable("true");
export const popup = writable("none");

// export default toggled;