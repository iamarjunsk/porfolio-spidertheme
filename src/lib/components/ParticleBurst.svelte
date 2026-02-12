<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let particleCount: number = 12;
  export let colors: string[] = ['#ef4444', '#3b82f6', 'rgba(255,255,255,0.8)'];
  
  interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
  }
  
  let particles: Particle[] = [];
  let container: HTMLDivElement;
  let animationId: number;
  
  export function burst(x: number, y: number) {
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 4;
      
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: 2 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    particles = [...particles, ...newParticles];
    
    if (particles.length > 100) {
      particles = particles.slice(-100);
    }
    
    if (!animationId) {
      animate();
    }
  }
  
  function animate() {
    particles = particles
      .map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        vy: p.vy + 0.2, // gravity
        life: p.life - 0.02,
        rotation: p.rotation + p.rotationSpeed
      }))
      .filter(p => p.life > 0);
    
    if (particles.length > 0) {
      animationId = requestAnimationFrame(animate);
    } else {
      animationId = 0;
    }
  }
  
  onMount(() => {
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  });
</script>

<div 
  bind:this={container}
  class="fixed inset-0 pointer-events-none z-[9997]"
>
  {#each particles as particle (particle.id)}
    <div
      class="absolute rounded-full"
      style="
        left: {particle.x}px;
        top: {particle.y}px;
        width: {particle.size}px;
        height: {particle.size}px;
        background-color: {particle.color};
        opacity: {particle.life};
        transform: rotate({particle.rotation}deg);
        box-shadow: 0 0 {particle.size * 2}px {particle.color};
      "
    />
  {/each}
</div>
