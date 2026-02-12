<script lang="ts">
  export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  export let size: number = 200;
  export let animated: boolean = true;
  
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };
  
  const rotationClasses = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-left': '-rotate-90',
    'bottom-right': 'rotate-180'
  };
</script>

<div 
  class="absolute pointer-events-none overflow-hidden {positionClasses[position]}"
  style="width: {size}px; height: {size}px;"
>
  <svg 
    viewBox="0 0 200 200" 
    class="w-full h-full {rotationClasses[position]}"
    class:animate-pulse={animated}
    style="animation-duration: 4s;"
  >
    <!-- Main corner web -->
    <g opacity="0.4">
      <!-- Radial lines -->
      {#each [0, 15, 30, 45, 60, 75] as angle}
        <line 
          x1="0" 
          y1="0" 
          x2={200 * Math.cos((angle * Math.PI) / 180)}
          y2={200 * Math.sin((angle * Math.PI) / 180)}
          stroke="url(#webGradient)"
          stroke-width="1.5"
          class={animated ? 'animate-pulse' : ''}
          style="animation-delay: {angle * 0.02}s; animation-duration: 3s;"
        />
      {/each}
      
      <!-- Concentric arcs -->
      {#each [40, 80, 120, 160] as r, i}
        <path 
          d="M 0 {r} A {r} {r} 0 0 1 {r} 0"
          fill="none"
          stroke="url(#webGradient)"
          stroke-width="1"
          opacity={0.3 + i * 0.15}
          class={animated ? 'web-arc' : ''}
          style="--delay: {i * 0.3}s"
        />
      {/each}
      
      <!-- Diagonal web connectors -->
      <line x1="40" y1="0" x2="0" y2="80" stroke="url(#webGradient)" stroke-width="0.5" opacity="0.3"/>
      <line x1="80" y1="0" x2="0" y2="120" stroke="url(#webGradient)" stroke-width="0.5" opacity="0.3"/>
      <line x1="120" y1="0" x2="0" y2="160" stroke="url(#webGradient)" stroke-width="0.5" opacity="0.3"/>
    </g>
    
    <!-- Glow effect center -->
    <circle cx="0" cy="0" r="30" fill="url(#glowGradient)" opacity="0.3" class={animated ? 'animate-ping' : ''} style="animation-duration: 3s;"/>
    
    <defs>
      <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.9"/>
      </linearGradient>
      
      <radialGradient id="glowGradient">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.8"/>
        <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
  </svg>
</div>

<style>
  @keyframes webArc {
    0%, 100% { 
      stroke-opacity: 0.3;
      filter: drop-shadow(0 0 2px rgba(239, 68, 68, 0.5));
    }
    50% { 
      stroke-opacity: 0.8;
      filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.8));
    }
  }
  
  .web-arc {
    animation: webArc 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }
</style>
