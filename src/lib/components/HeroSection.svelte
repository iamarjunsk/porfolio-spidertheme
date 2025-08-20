<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  
  let visible = false;
  
  onMount(() => {
    visible = true;
  });
</script>

<header class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
  <!-- Modern Background Pattern -->
  <div class="absolute inset-0">
    <!-- Grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    <!-- Radial gradient overlay -->
    <div class="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-blue-500/10"></div>
  </div>
  
  <!-- Floating Elements -->
  <div class="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
  <div class="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
  <div class="absolute bottom-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
  
  <!-- Geometric Web Corner -->
  <div class="absolute top-0 right-0 w-64 h-64 opacity-5">
    <svg viewBox="0 0 200 200" class="w-full h-full">
      <path d="M200,0 L0,200 M180,0 L0,180 M160,0 L0,160 M140,0 L0,140 M120,0 L0,120 M100,0 L0,100 M80,0 L0,80 M60,0 L0,60 M40,0 L0,40 M20,0 L0,20" stroke="white" stroke-width="1"/>
    </svg>
  </div>
  
  <!-- Hero Content -->
  <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
    {#if visible}
      <div class="w-full max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          <!-- Main Content - Now appears first on mobile -->
          <div in:scale={{ duration: 1500, start: 0.9, opacity: 0 }} class="text-center lg:text-left space-y-6 order-1 lg:order-1">
            <!-- Header -->
            <div class="mb-6 lg:mb-8">
              <div class="flex flex-col items-center lg:flex-row lg:items-center gap-4 mb-4 lg:mb-6">
                <img src="/src/lib/assets/spider-logo.png" alt="Spider Logo" 
                     class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-2xl" />
                <div>
                  <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-comic text-white leading-tight">
                    Arjun S K
                  </h1>
                  <div class="text-base sm:text-lg md:text-xl text-red-400 font-comic-neue mt-1 lg:mt-2">
                    Web Developer
                  </div>
                </div>
              </div>
              
              <p class="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-comic-neue px-2 lg:px-0">
                Building amazing web experiences with <span class="text-red-400 font-semibold">React</span>, 
                <span class="text-blue-400 font-semibold">Vue</span>, and modern technologies. 
                Your friendly neighborhood developer! 🕷️
              </p>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 lg:gap-4 px-2 lg:px-0">
              <button 
                on:click={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                class="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg 
                       hover:from-red-700 hover:to-red-800 transition-all duration-300 
                       shadow-lg hover:shadow-xl hover:scale-105 transform text-sm lg:text-base">
                <span class="flex items-center justify-center gap-2">
                  🕸️ View My Work
                </span>
              </button>
              <button 
                on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                class="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg 
                       hover:from-blue-700 hover:to-blue-800 transition-all duration-300 
                       shadow-lg hover:shadow-xl hover:scale-105 transform text-sm lg:text-base">
                <span class="flex items-center justify-center gap-2">
                  📨 Get In Touch
                </span>
              </button>
            </div>
            
            <!-- Quick Links -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 text-gray-400 text-sm">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for work</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Remote friendly</span>
              </div>
            </div>
          </div>
          
          <!-- Stats & Skills Card - Now appears below name section on mobile -->
          <div in:scale={{ duration: 1500, start: 0.9, opacity: 0, delay: 300 }} 
               class="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl order-2 lg:order-2">
            
            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div class="text-center p-3 lg:p-4 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-xl border border-red-500/20">
                <div class="text-2xl lg:text-3xl font-comic text-red-400 mb-1 lg:mb-2">3+</div>
                <div class="text-xs lg:text-sm text-gray-300">Years Experience</div>
              </div>
              <div class="text-center p-3 lg:p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
                <div class="text-2xl lg:text-3xl font-comic text-blue-400 mb-1 lg:mb-2">6+</div>
                <div class="text-xs lg:text-sm text-gray-300">Projects</div>
              </div>
              <div class="text-center p-3 lg:p-4 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl border border-green-500/20 col-span-2">
                <div class="text-2xl lg:text-3xl font-comic text-green-400 mb-1 lg:mb-2">∞</div>
                <div class="text-xs lg:text-sm text-gray-300">Lines of Code & Counting</div>
              </div>
            </div>
            
            <!-- Core Technologies -->
            <div class="space-y-3 lg:space-y-4">
              <h3 class="text-base lg:text-lg font-comic text-white mb-3 lg:mb-4 text-center lg:text-left">Core Technologies</h3>
              <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span class="px-2 lg:px-3 py-1 bg-red-500/20 text-red-300 text-xs lg:text-sm rounded-full border border-red-500/30">React.js</span>
                <span class="px-2 lg:px-3 py-1 bg-green-500/20 text-green-300 text-xs lg:text-sm rounded-full border border-green-500/30">Vue.js</span>
                <span class="px-2 lg:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs lg:text-sm rounded-full border border-blue-500/30">Svelte</span>
                <span class="px-2 lg:px-3 py-1 bg-purple-500/20 text-purple-300 text-xs lg:text-sm rounded-full border border-purple-500/30">Next.js</span>
                <span class="px-2 lg:px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs lg:text-sm rounded-full border border-yellow-500/30">TypeScript</span>
                <span class="px-2 lg:px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs lg:text-sm rounded-full border border-cyan-500/30">Tailwind</span>
              </div>
            </div>
          </div>
          
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