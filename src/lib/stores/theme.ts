import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'spider' | 'precision';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme(): Theme {
    if (browser) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'spider' || stored === 'precision') {
            return stored;
        }
    }
    return 'precision';
}

function createThemeStore() {
    const { subscribe, set, update } = writable<Theme>(getInitialTheme());

    return {
        subscribe,
        set: (value: Theme) => {
            if (browser) {
                localStorage.setItem(STORAGE_KEY, value);
            }
            set(value);
        },
        toggle: () => {
            update(current => {
                const newTheme = current === 'spider' ? 'precision' : 'spider';
                if (browser) {
                    localStorage.setItem(STORAGE_KEY, newTheme);
                }
                return newTheme;
            });
        }
    };
}

export const theme = createThemeStore();
