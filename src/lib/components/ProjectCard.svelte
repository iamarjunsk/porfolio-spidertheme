<script lang="ts">
  export let title = '';
  export let description = '';
  export let image = '';
  export let liveUrl = '';
  export let githubUrl = '';
  export let tags: string[] = [];
  
  import { ExternalLink, Github } from 'lucide-svelte';
</script>

<article class="group relative bg-white/20 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden 
                border border-white/20 hover:border-spider-red/50
                transition-all duration-500 hover:-translate-y-2 hover:rotate-1
                shadow-xl hover:shadow-2xl hover:shadow-spider-red/25">
  
  <!-- Web Pattern Overlay -->
  <div class="absolute -top-1/2 -right-1/2 w-full h-full 
              bg-web-pattern bg-[length:50px_50px] opacity-5 
              group-hover:opacity-10 transition-opacity duration-300"></div>
  
  <!-- Image -->
  {#if image}
    <div class="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        class="w-full h-full object-cover group-hover:scale-110 
               transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  {/if}
  
  <!-- Content -->
  <div class="relative p-6">
    <h3 class="text-2xl font-comic bg-gradient-to-r from-spider-red to-spider-blue bg-clip-text text-transparent mb-3">
      {title}
    </h3>
    
    <p class="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
      {description}
    </p>
    
    <!-- Tags -->
    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <span class="px-3 py-1 bg-gradient-to-r from-spider-red/10 to-spider-blue/10 
                       text-spider-red dark:text-white rounded-full text-sm font-semibold
                       border border-spider-red/20 hover:border-spider-red/40
                       transition-colors duration-300">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
    
    <!-- Action Buttons - Hidden as requested -->
    <!-- 
    <div class="flex gap-3">
      {#if liveUrl}
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-2 px-4 
                 bg-spider-red text-white rounded-full font-bold 
                 hover:bg-spider-dark-red transition-colors duration-300 
                 hover:scale-105 transform"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      {/if}
      
      {#if githubUrl}
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-2 px-4 
                 bg-spider-blue text-white rounded-full font-bold 
                 hover:bg-spider-dark-blue transition-colors duration-300 
                 hover:scale-105 transform"
        >
          <Github size={18} />
          GitHub
        </a>
      {/if}
    </div>
    -->
  </div>
</article>