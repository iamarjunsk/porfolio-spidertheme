<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  
  let mounted = false;
  let mouseX = spring(0, { stiffness: 0.1, damping: 0.25 });
  let mouseY = spring(0, { stiffness: 0.1, damping: 0.25 });
  
  onMount(() => {
    mounted = true;
    
    const handleMouseMove = (e) => {
      $mouseX = e.clientX;
      $mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

{#if mounted}
  <div 
    class="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
    style="transform: translate({$mouseX}px, 0)"
  >
    <!-- Web line -->
    <div 
      class="absolute w-0.5 bg-gradient-to-b from-white/80 to-white/20 origin-top"
      style="height: {$mouseY}px"
    ></div>
    <!-- Spider -->
    <div 
      class="absolute text-2xl animate-dangle text-white"
      style="top: {$mouseY}px; left: 0px; filter: hue-rotate(0deg) saturate(2) brightness(0.8) sepia(1) contrast(1.5);"
    >
      🕷️
    </div>
  </div>
{/if}

<style>
  :global(body) {
    cursor: none;
  }
  
  @media (max-width: 768px) {
    :global(body) {
      cursor: auto;
    }
  }
</style>