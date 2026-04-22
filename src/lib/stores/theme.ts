import { writable } from 'svelte/store';

export type Theme = 'pencil';

function createThemeStore() {
    const { subscribe, set } = writable<Theme>('pencil');
    return { subscribe, set };
}

export const theme = createThemeStore();
