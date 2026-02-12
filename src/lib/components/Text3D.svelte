<script lang="ts">
  import { onMount } from 'svelte';
  
  export let text: string = "3D TEXT";
  export let className: string = "";
  
  let container: HTMLDivElement;
  let mouseX = 0;
  let mouseY = 0;
  let rotationX = 0;
  let rotationY = 0;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX = (x - 0.5) * 30;
    mouseY = (y - 0.5) * 30;
    
    rotationX = -mouseY;
    rotationY = mouseX;
  };
  
  const handleMouseLeave = () => {
    rotationX = 0;
    rotationY = 0;
  };
</script>

<div 
  bind:this={container}
  class="relative inline-block {className}"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  style="perspective: 1000px;"
>
  <div
    class="relative transform-gpu transition-transform duration-200 ease-out"
    style="
      transform: rotateX({rotationX}deg) rotateY({rotationY}deg);
      transform-style: preserve-3d;
    "
  >
    <!-- Shadow layer -->
    <span 
      class="absolute top-2 left-2 text-spider-blue/40 blur-sm select-none"
      style="transform: translateZ(-20px);"
    >
      {text}
    </span>
    
    <!-- Main text -->
    <span class="relative z-10">
      {text}
    </span>
    
    <!-- Highlight layer -->
    <span 
      class="absolute top-0 left-0 text-white/80 select-none"
      style="transform: translateZ(10px);"
    >
      {text}
    </span>
  </div>
</div>
