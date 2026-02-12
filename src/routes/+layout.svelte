<script lang="ts">
    import "../app.css";
    import SpiderCursor from "$lib/components/SpiderCursor.svelte";
    import ScrollProgress from "$lib/components/ScrollProgress.svelte";
    import ParticleBurst from "$lib/components/ParticleBurst.svelte";
    import { onMount } from 'svelte';

    let { children } = $props();
    let particleBurst: ParticleBurst;
    
    onMount(() => {
        // Add click burst effect to buttons
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('button, a')) {
                particleBurst?.burst(e.clientX, e.clientY);
            }
        };
        
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });
</script>

<SpiderCursor />
<ScrollProgress />
<ParticleBurst bind:this={particleBurst} />

<main>
    {@render children?.()}
</main>
