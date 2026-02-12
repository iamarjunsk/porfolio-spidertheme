<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let scrollProgress = 0;
  let scrollDirection: 'up' | 'down' = 'down';
  let lastScrollY = 0;
  let webs: Array<{ id: number; progress: number; side: 'left' | 'right' }> = [];
  let animationId: number;
  let isActive = false;
  let inactivityTimeout: number;
  
  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      scrollProgress = (currentScrollY / docHeight) * 100;
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
      
      // Activate on scroll
      isActive = true;
      clearTimeout(inactivityTimeout);
      inactivityTimeout = window.setTimeout(() => {
        isActive = false;
      }, 150);
      
      // Create web markers at certain intervals
      if (Math.floor(scrollProgress) % 10 === 0 && Math.random() > 0.7) {
        createWebMarker();
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    animate();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(inactivityTimeout);
      cancelAnimationFrame(animationId);
    };
  });
  
  function createWebMarker() {
    const id = Date.now();
    const side: 'left' | 'right' = Math.random() > 0.5 ? 'left' : 'right';
    
    webs = [...webs, { id, progress: scrollProgress, side }];
    
    if (webs.length > 3) {
      webs = webs.slice(-3);
    }
  }
  
  function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Fade out old webs
    webs = webs.map(web => ({
      ...web,
      progress: web.progress + (scrollDirection === 'down' ? 0.5 : -0.5)
    })).filter(web => web.progress > -10 && web.progress < 110);
  }
</script>

<!-- Progress Bar -->
<div class="fixed top-0 left-0 w-full h-1 z-[9999]">
  <!-- Background track -->
  <div class="absolute inset-0 bg-white/10"></div>
  
  <!-- Progress fill -->
  <div 
    class="h-full bg-gradient-to-r from-spider-red via-spider-blue to-spider-red transition-all duration-100 ease-out"
    style="width: {scrollProgress}%; box-shadow: 0 0 10px rgba(239,68,68,0.5);"
  ></div>
  
  <!-- Spider marker -->
  <div 
    class="absolute top-1/2 -translate-y-1/2 text-xs transition-all duration-100 ease-out"
    style="left: {scrollProgress}%; transform: translate(-50%, -50%) {isActive ? 'scale(1.3)' : 'scale(1)'};"
  >
    <span class="drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">🕷️</span>
  </div>
</div>

<!-- Side web markers -->
<div class="fixed right-4 top-1/2 -translate-y-1/2 z-[9998] flex flex-col gap-3">
  {#each webs.filter(w => w.side === 'right') as web (web.id)}
    <div 
      class="w-8 h-0.5 bg-gradient-to-l from-spider-red to-transparent transition-opacity duration-500"
      style="opacity: {1 - Math.abs(web.progress - scrollProgress) / 20};"
    ></div>
  {/each}
</div>

<div class="fixed left-4 top-1/2 -translate-y-1/2 z-[9998] flex flex-col gap-3">
  {#each webs.filter(w => w.side === 'left') as web (web.id)}
    <div 
      class="w-8 h-0.5 bg-gradient-to-r from-spider-blue to-transparent transition-opacity duration-500"
      style="opacity: {1 - Math.abs(web.progress - scrollProgress) / 20};"
    ></div>
  {/each}
</div>
