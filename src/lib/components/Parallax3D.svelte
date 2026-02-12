<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  export let intensity: number = 0.5;
  
  let container: HTMLDivElement;
  let scrollY = 0;
  let layers: HTMLElement[] = [];
  
  onMount(() => {
    const handleScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Only animate when section is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        
        layers.forEach((layer, i) => {
          const depth = (i + 1) * intensity;
          const translateY = (progress - 0.5) * depth * 100;
          layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  // Register layer function
  export function registerLayer(element: HTMLElement, index: number) {
    layers[index] = element;
  }
</script>

<div bind:this={container} class="relative overflow-hidden">
  <slot {registerLayer} />
</div>
