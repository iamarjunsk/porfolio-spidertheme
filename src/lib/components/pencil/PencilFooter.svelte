<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<footer class="py-10 sm:py-12 bg-paper-alt border-t border-graphite-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    {#if mounted}
      <div in:fade="{{ duration: 600 }}" class="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 flex items-center justify-center bg-graphite-900 rounded-full">
            <span class="text-paper font-display text-xl">A</span>
          </div>
          <div>
            <p class="font-display text-lg text-graphite-900">Arjun S K</p>
            <p class="text-sm text-graphite-500 font-handwriting">Web Developer & UI/UX Engineer</p>
          </div>
        </div>
        
        <div class="flex items-center gap-6">
          <a 
            href="https://github.com/arjunsk" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 text-graphite-500 hover:text-graphite-900 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/arjunsk" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 text-graphite-500 hover:text-graphite-900 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 2.37-1.85 2.507 0 2.963 1.645 2.963 3.808v4.912zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="mailto:dev.arjunsk@gmail.com"
            class="p-2 text-graphite-500 hover:text-graphite-900 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-graphite-200 text-center relative">
        <p class="font-handwriting text-xs sm:text-sm text-graphite-500">
          &copy; 2026 Arjun S K. Crafted with care and curiosity.
        </p>

        <!-- Tiny hidden Spider-Man doodle -->
        <div class="absolute right-0 -bottom-1 sm:bottom-0 opacity-[0.22] rotate-[-8deg] pointer-events-none select-none">
          <svg width="24" height="24" class="sm:w-7 sm:h-7" viewBox="0 0 100 100" fill="none" stroke="#2d2a26" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Head -->
            <ellipse cx="50" cy="48" rx="30" ry="34"/>
            <!-- Left eye -->
            <path d="M32 38 Q25 32 22 42 Q24 50 35 48 Q38 44 32 38Z"/>
            <!-- Right eye -->
            <path d="M68 38 Q75 32 78 42 Q76 50 65 48 Q62 44 68 38Z"/>
            <!-- Web lines on mask -->
            <path d="M50 14 Q50 30 50 48" stroke-dasharray="2,3"/>
            <path d="M50 48 Q35 55 22 60" stroke-dasharray="2,3"/>
            <path d="M50 48 Q65 55 78 60" stroke-dasharray="2,3"/>
            <!-- Tiny body hint -->
            <path d="M40 80 Q50 85 60 80" stroke-dasharray="2,2"/>
          </svg>
        </div>
      </div>
    {/if}
  </div>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&display=swap');
  
  .bg-paper-alt { background-color: #f5f2eb; }
  .font-display { font-family: 'Caveat', cursive; }
  .font-handwriting { font-family: 'Patrick Hand', cursive; }
  
  .text-graphite-900 { color: #2d2a26; }
  .text-graphite-500 { color: #8a8580; }
  .text-graphite-200 { color: #d8d4ce; }
  .text-paper { color: #faf8f3; }
  
  .bg-graphite-900 { background-color: #2d2a26; }
  .border-graphite-200 { border-color: #d8d4ce; }
</style>