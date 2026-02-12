<script lang="ts">
  import { onMount } from 'svelte';
  
  export let active: boolean = false;
  
  let card: HTMLDivElement;
  let rotationX = 0;
  let rotationY = 0;
  let glareX = 50;
  let glareY = 50;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    rotationX = -y * 10;
    rotationY = x * 10;
    glareX = (x + 0.5) * 100;
    glareY = (y + 0.5) * 100;
  };
  
  const handleMouseLeave = () => {
    rotationX = 0;
    rotationY = 0;
    glareX = 50;
    glareY = 50;
  };
</script>

<div
  bind:this={card}
  class="relative group cursor-pointer"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  style="perspective: 1000px;"
>
  <div
    class="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl overflow-hidden hover:border-spider-blue/50 transition-all duration-300"
    style="
      transform: rotateX({rotationX}deg) rotateY({rotationY}deg);
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;
    "
  >
    <!-- Glare effect -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style="
        background: radial-gradient(circle at {glareX}% {glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%);
        transform: translateZ(1px);
      "
    />
    
    <!-- Content slot -->
    <div style="transform: translateZ(20px);">
      <slot />
    </div>
    
    <!-- Depth shadow -->
    <div
      class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style="
        background: linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%);
        transform: translateZ(-10px);
      "
    />
  </div>
</div>
