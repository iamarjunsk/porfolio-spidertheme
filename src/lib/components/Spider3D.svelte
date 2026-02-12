<script lang="ts">
  import { onMount } from 'svelte';
  
  let container: HTMLDivElement;
  let rotation = 0;
  let targetRotation = 0;
  let isHovered = false;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!container || !isHovered) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    targetRotation = x * 60;
  };
  
  const handleMouseEnter = () => {
    isHovered = true;
  };
  
  const handleMouseLeave = () => {
    isHovered = false;
    targetRotation = 0;
  };
  
  onMount(() => {
    let animationId: number;
    
    const animate = () => {
      rotation += (targetRotation - rotation) * 0.1;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationId);
  });
</script>

<div 
  bind:this={container}
  class="relative w-24 h-24 cursor-pointer group"
  on:mousemove={handleMouseMove}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  style="perspective: 600px;"
>
  <!-- 3D Spider Container -->
  <div
    class="relative w-full h-full transition-transform duration-300"
    style="
      transform: rotateY({rotation}deg);
      transform-style: preserve-3d;
    "
  >
    <!-- Main spider body -->
    <div 
      class="absolute inset-0 flex items-center justify-center"
      style="transform: translateZ(20px);"
    >
      <svg viewBox="0 0 100 100" class="w-16 h-16 drop-shadow-lg">
        <!-- Web legs -->
        <g stroke="currentColor" stroke-width="3" fill="none" class="text-spider-red">
          <!-- Top legs -->
          <path d="M 35 30 L 20 15" />
          <path d="M 65 30 L 80 15" />
          <path d="M 30 40 L 10 30" />
          <path d="M 70 40 L 90 30" />
          <!-- Bottom legs -->
          <path d="M 35 70 L 20 85" />
          <path d="M 65 70 L 80 85" />
          <path d="M 30 60 L 10 70" />
          <path d="M 70 60 L 90 70" />
        </g>
        
        <!-- Spider body -->
        <ellipse cx="50" cy="50" rx="20" ry="25" fill="currentColor" class="text-spider-red" />
        <ellipse cx="50" cy="35" rx="12" ry="15" fill="currentColor" class="text-spider-red" />
        
        <!-- Spider symbol -->
        <path 
          d="M 50 25 L 50 45 M 40 35 L 50 40 L 60 35 M 45 42 L 50 48 L 55 42" 
          stroke="black" 
          stroke-width="2" 
          fill="none"
        />
      </svg>
    </div>
    
    <!-- Glow effect -->
    <div 
      class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style="
        background: radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%);
        transform: translateZ(-10px);
      "
    />
  </div>
</div>
