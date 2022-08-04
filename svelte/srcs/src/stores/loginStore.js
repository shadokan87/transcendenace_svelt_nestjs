import { writable } from "svelte/store";

export const isLogin = writable(false);
export const onBoard = writable(false);
export const profile = writable({});
