<script lang="ts">
    import { theme } from '$lib/stores/theme';
    import { Sparkles, Hexagon } from 'lucide-svelte';
    
    let currentTheme: 'spider' | 'precision';
    theme.subscribe(value => currentTheme = value);
</script>

<button
    on:click={() => theme.toggle()}
    class="fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
    class:bg-black={currentTheme === 'spider'}
    class:bg-white={currentTheme === 'precision'}
    class:border-white={currentTheme === 'spider'}
    class:border-gray-200={currentTheme === 'precision'}
    class:border-2={true}
    class:shadow-lg={true}
    class:hover:shadow-xl={true}
    aria-label="Toggle theme"
    title={currentTheme === 'spider' ? 'Switch to Precision theme' : 'Switch to Spider theme'}
>
    {#if currentTheme === 'spider'}
        <Sparkles class="w-5 h-5 text-white" />
    {:else}
        <Hexagon class="w-5 h-5 text-gray-900" />
    {/if}
</button>

<style>
    button {
        cursor: pointer;
    }
</style>
