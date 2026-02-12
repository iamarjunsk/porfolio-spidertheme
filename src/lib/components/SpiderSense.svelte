<script lang="ts">
  import { onMount } from 'svelte';
  
  export let intensity: 'low' | 'medium' | 'high' = 'medium';
  export let trigger: 'hover' | 'always' | 'click' = 'hover';
  
  let isActive = trigger === 'always';
  let element: HTMLDivElement;
  
  const intensityConfig = {
    low: { lines: 4, spread: 30, length: 15 },
    medium: { lines: 6, spread: 45, length: 25 },
    high: { lines: 8, spread: 60, length: 35 }
  } as const;
  
  $: config = intensityConfig[intensity] || intensityConfig.medium;
  
  function getLines() {
    return Array.from({ length: config.lines }, (_, i) => {
      const angle = (360 / config.lines) * i;
      const spread = config.spread;
      const length = config.length;
      return { angle, spread, length, id: i };
    });
  }
  
  onMount(() => {
    if (trigger === 'hover' && element) {
      const parent = element.parentElement;
      if (parent) {
        parent.addEventListener('mouseenter', () => isActive = true);
        parent.addEventListener('mouseleave', () => isActive = false);
      }
    }
    
    if (trigger === 'click' && element) {
      const parent = element.parentElement;
      if (parent) {
        parent.addEventListener('click', () => {
          isActive = true;
          setTimeout(() => isActive = false, 1000);
        });
      }
    }
  });
</script>

<div 
  bind:this={element}
  class="absolute inset-0 pointer-events-none z-50 flex items-center justify-center"
  class:opacity-0={!isActive}
  class:opacity-100={isActive}
  style="transition: opacity 0.2s ease;"
>
  {#each getLines() as line (line.id)}
    <div
      class="absolute w-0.5 bg-gradient-to-t from-spider-red via-white to-transparent origin-bottom spider-sense-line"
      style="
        height: {line.length}px;
        transform: rotate({line.angle}deg) translateY(-{line.spread}px);
        animation: spiderSensePulse 0.5s ease-in-out infinite;
        animation-delay: {line.id * 0.05}s;
      "
    />
  {/each}
  
  <!-- Center glow -->
  <div 
    class="absolute w-2 h-2 bg-spider-red rounded-full blur-sm spider-sense-glow"
    class:animate-ping={isActive}
  />
</div>

<style>
  @keyframes spiderSensePulse {
    0%, 100% { 
      opacity: 0.4;
      transform: rotate(var(--rotation)) translateY(calc(var(--spread) * 0.8px));
    }
    50% { 
      opacity: 1;
      transform: rotate(var(--rotation)) translateY(calc(var(--spread) * 1.2px));
    }
  }
  
  .spider-sense-line {
    box-shadow: 0 0 6px rgba(239, 68, 68, 0.8), 0 0 12px rgba(255, 255, 255, 0.5);
  }
</style>
