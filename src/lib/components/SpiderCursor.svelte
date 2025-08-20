<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  
  let mounted = false;
  let mouseX = spring(0, { stiffness: 0.1, damping: 0.25 });
  let mouseY = spring(0, { stiffness: 0.1, damping: 0.25 });
  
  onMount(() => {
    mounted = true;
    
    const handleMouseMove = (/** @type {{ clientX: number; clientY: number; }} */ e) => {
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
    style="transform: translate({$mouseX - 12}px, 0)"
  >
    <!-- Web line -->
    <div 
      class="absolute w-0.5 bg-gradient-to-b from-spider-red/80 via-white/60 to-spider-red/20 origin-top shadow-lg"
      style="height: {$mouseY + 24}px; left: 12px"
    ></div>
    <!-- Glow effect -->
    <div 
      class="absolute w-1 bg-gradient-to-b from-spider-red/40 to-transparent origin-top blur-sm"
      style="height: {$mouseY + 24}px; left: 11.875px"
    ></div>
    <!-- Spider -->
    <div 
      class="absolute text-2xl animate-dangle drop-shadow-lg"
      style="top: {$mouseY}px; left: 12px; 
             filter: hue-rotate(0deg) saturate(1.5) brightness(1.2) drop-shadow(0 0 8px rgba(255,0,0,0.6));"
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