<script lang="ts">
  import '../app.css';
  import SpiderCursor from '$lib/components/SpiderCursor.svelte';
  import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';

  let { children } = $props();
</script>

<SpiderCursor />
<DarkModeToggle />

<main>
  {@render children?.()}
</main>
