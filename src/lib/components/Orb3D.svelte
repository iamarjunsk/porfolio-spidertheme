<script lang="ts">
  export let label: string = "";
  export let color: string = "#ef4444";
  export let size: number = 80;
  
  let isHovered = false;
  let rotationX = 0;
  let rotationY = 0;
  
  const handleMouseMove = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    rotationX = -y * 30;
    rotationY = x * 30;
  };
  
  const handleMouseLeave = () => {
    isHovered = false;
    rotationX = 0;
    rotationY = 0;
  };
</script>

<div 
  class="relative cursor-pointer"
  style="width: {size}px; height: {size}px; perspective: 400px;"
  on:mouseenter={() => isHovered = true}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <div
    class="w-full h-full rounded-full transition-all duration-300 ease-out flex items-center justify-center"
    style="
      background: radial-gradient(circle at 30% 30%, {color}, rgba(0,0,0,0.8));
      transform: rotateX({rotationX}deg) rotateY({rotationY}deg) scale({isHovered ? 1.1 : 1});
      transform-style: preserve-3d;
      box-shadow: 
        0 0 {isHovered ? 30 : 15}px {color}40,
        inset 0 0 20px rgba(255,255,255,0.1);
    "
  >
    <!-- Shine effect -->
    <div 
      class="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/30 blur-sm"
      style="transform: translateZ(10px);"
    />
    
    <!-- Label -->
    <span class="text-white text-xs font-bold text-center px-2 leading-tight z-10">
      {label}
    </span>
  </div>
</div>
