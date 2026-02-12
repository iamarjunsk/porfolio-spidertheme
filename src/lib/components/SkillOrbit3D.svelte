<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Orb3D from './Orb3D.svelte';
  
  export let skills: string[] = [];
  export let colors: string[] = ['#ef4444', '#3b82f6', '#a855f7', '#10b981'];
  
  let container: HTMLDivElement;
  let orbs: Array<{ x: number; y: number; z: number; skill: string; color: string; speed: number }> = [];
  let animationId: number;
  let time = 0;
  let isVisible = false;
  
  onMount(() => {
    // Initialize orb positions
    orbs = skills.map((skill, i) => ({
      skill,
      color: colors[i % colors.length],
      x: 0,
      y: 0,
      z: Math.random() * 100,
      speed: 0.5 + Math.random() * 0.5
    }));
    
    // Check visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationId) {
          animate();
        }
      },
      { threshold: 0.1 }
    );
    
    if (container) observer.observe(container);
    
    return () => {
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  });
  
  function animate() {
    if (!isVisible) {
      animationId = 0;
      return;
    }
    
    time += 0.01;
    
    orbs = orbs.map((orb, i) => {
      const angle = time * orb.speed + (i * Math.PI * 2) / orbs.length;
      const radius = 120;
      
      return {
        ...orb,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle * 0.8) * radius * 0.6,
        z: Math.sin(angle) * 50 + 50
      };
    });
    
    animationId = requestAnimationFrame(animate);
  }
</script>

<div 
  bind:this={container}
  class="relative w-full h-80"
  style="perspective: 800px;"
>
  <div 
    class="absolute inset-0"
    style="transform-style: preserve-3d;"
  >
    {#each orbs as orb, i}
      <div
        class="absolute left-1/2 top-1/2 transition-transform duration-100 ease-out"
        style="
          transform: translate3d({orb.x}px, {orb.y}px, {orb.z}px) translate(-50%, -50%);
          z-index: {Math.floor(orb.z)};
        "
      >
        <Orb3D 
          label={orb.skill} 
          color={orb.color}
          size={70 + orb.z * 0.2}
        />
      </div>
    {/each}
  </div>
  
  <!-- Center label -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div class="text-center">
      <span class="text-4xl">🕷️</span>
      <p class="text-gray-500 text-sm mt-2">Hover orbs</p>
    </div>
  </div>
</div>
