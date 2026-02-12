<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  interface Web {
    id: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    opacity: number;
    life: number;
    sway: number;
  }
  
  let webs: Web[] = [];
  let container: HTMLDivElement;
  let animationId: number;
  let lastScrollY = 0;
  let velocity = 0;
  
  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      velocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
      
      // Create web lines based on scroll velocity
      if (velocity > 5 && Math.random() > 0.7) {
        createWeb();
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    animate();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  });
  
  function createWeb() {
    const id = Date.now() + Math.random();
    const startX = Math.random() * window.innerWidth;
    const startY = -50;
    const endX = startX + (Math.random() - 0.5) * 200;
    const endY = window.innerHeight + 50;
    
    webs = [...webs, {
      id,
      startX,
      startY,
      endX,
      endY,
      opacity: 0.3,
      life: 1,
      sway: Math.random() * 15 - 7.5
    }];
    
    // Limit webs
    if (webs.length > 5) {
      webs = webs.slice(-5);
    }
  }
  
  function animate() {
    animationId = requestAnimationFrame(animate);
    
    webs = webs.map(web => ({
      ...web,
      life: web.life - 0.02,
      opacity: web.life * 0.6,
      startY: web.startY + 3
    })).filter(web => web.life > 0);
  }
</script>

<div bind:this={container} class="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
  {#each webs as web (web.id)}
    <svg
      class="absolute"
      style="left: 0; top: 0; width: 100%; height: 100%;"
    >
      <path
        d="M {web.startX} {web.startY} Q {(web.startX + web.endX) / 2 + web.sway} {(web.startY + web.endY) / 2} {web.endX} {web.endY}"
        stroke="url(#webGradient)"
        stroke-width="1.5"
        fill="none"
        opacity={web.opacity}
        class="drop-shadow-[0_0_3px_rgba(255,0,0,0.5)]"
      />
      <defs>
        <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ef4444" stop-opacity="0.8"/>
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.8"/>
        </linearGradient>
      </defs>
    </svg>
  {/each}
</div>
