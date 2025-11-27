<script lang="ts">
    import "../app.css";
    import SpiderCursor from "$lib/components/SpiderCursor.svelte";

    let { children } = $props();
</script>

<SpiderCursor />

<main>
    {@render children?.()}
</main>
