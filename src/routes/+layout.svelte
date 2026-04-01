<script lang="ts">
    import "../app.css";
    import SpiderCursor from "$lib/components/SpiderCursor.svelte";
    import ScrollProgress from "$lib/components/ScrollProgress.svelte";
    import ParticleBurst from "$lib/components/ParticleBurst.svelte";
    import { onMount } from 'svelte';
    import { theme } from '$lib/stores/theme';

    let { children } = $props();
    let particleBurst: ParticleBurst;
    let currentTheme = $state<'spider' | 'precision'>('precision');
    
    theme.subscribe(value => currentTheme = value);
    
    onMount(() => {
        document.body.style.cursor = 'auto';
        
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('button, a') && currentTheme === 'spider') {
                particleBurst?.burst(e.clientX, e.clientY);
            }
        };
        
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });
    
    $effect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.cursor = currentTheme === 'spider' ? 'none' : 'auto';
        }
    });
</script>

{#if currentTheme === 'spider'}
    <SpiderCursor />
    <ScrollProgress />
{/if}

<ParticleBurst bind:this={particleBurst} />

<main>
    {@render children?.()}
</main>
