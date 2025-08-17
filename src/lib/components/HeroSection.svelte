<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  
  let visible = false;
  
  onMount(() => {
    visible = true;
  });
</script>

<header class="relative min-h-screen bg-gradient-to-br from-spider-blue to-spider-red overflow-hidden">
  <!-- Web Pattern Background -->
  <div class="absolute inset-0 bg-web-pattern bg-[length:100px_100px] opacity-20 animate-float"></div>
  
  <!-- Hero Content -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
    {#if visible}
      <div in:scale={{ duration: 2000, start: 0, opacity: 0 }}>
        <h1 class="text-6xl md:text-8xl font-comic text-white text-center animate-heroText">
          <span class="inline-block">🕷️</span>
          <span class="inline-block drop-shadow-[3px_3px_0_#CC0000] 
                       md:drop-shadow-[6px_6px_0_#000080]">
            Arjun S K
          </span>
          <span class="inline-block animate-clockTick">🕸️</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-white text-center mt-6 font-comic-neue">
          Web Developer • Problem Solver • Code Slinger
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex gap-4 justify-center mt-8">
          <button 
            on:click={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            class="px-8 py-3 bg-white text-spider-blue font-bold rounded-full 
                   hover:scale-110 transition-transform duration-300 
                   shadow-lg hover:shadow-2xl">
            View Projects
          </button>
          <button 
            on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            class="px-8 py-3 bg-spider-blue text-white font-bold rounded-full 
                   border-2 border-white hover:scale-110 transition-transform 
                   duration-300 shadow-lg hover:shadow-2xl">
            Contact Me
          </button>
        </div>
      </div>
    {/if}
  </div>
  
  <!-- Animated Web Lines -->
  <svg class="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 100">
    <path
      d="M0,50 Q300,0 600,50 T1200,50"
      stroke="white"
      stroke-width="2"
      fill="none"
      opacity="0.3"
      class="animate-pulse"
    />
  </svg>
</header>