<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { projects } from '$lib/data/portfolio';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="projects" class="py-24 bg-paper relative overflow-hidden">
  <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
    <svg viewBox="0 0 100 100" class="w-full h-full">
      <rect x="10" y="10" width="80" height="80" fill="none" stroke="#8b7355" stroke-width="1"/>
      <rect x="20" y="20" width="60" height="60" fill="none" stroke="#8b7355" stroke-width="1"/>
    </svg>
  </div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
    {#if mounted}
      <div in:fly="{{ y: 30, duration: 600 }}" class="mb-10 sm:mb-16">
        <h2 class="font-display text-4xl sm:text-5xl md:text-6xl text-graphite-900 mb-2">Projects</h2>
        <div class="w-24 h-1 bg-graphite-900"></div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {#each projects as project, index}
          <article
            class="group relative p-4 sm:p-6 bg-white rounded-xl border-2 border-graphite-200 hover:border-graphite-900 transition-all duration-300 hover:shadow-lg"
            in:fly="{{ y: 30, duration: 500, delay: 200 + (index * 100) }}"
          >
            <div class="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </div>

            {#if project.category}
              <span class="inline-block px-2 py-0.5 text-xs font-handwriting text-graphite-500 bg-graphite-50 rounded mb-2">
                {project.category}
              </span>
            {/if}

            <h3 class="font-display text-xl sm:text-2xl text-graphite-900 mb-2 group-hover:text-graphite-700 transition-colors">
              {project.title}
            </h3>

            <p class="font-handwriting text-xs sm:text-sm text-graphite-600 mb-4 line-clamp-2">
              {project.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tech_stack.slice(0, 4) as tech}
                <span class="px-2 py-1 text-xs font-handwriting text-graphite-600 bg-graphite-50 rounded">
                  {tech}
                </span>
              {/each}
            </div>

            {#if project.live_url}
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-sm font-medium text-graphite-700 hover:text-graphite-900 transition-colors"
              >
                <span>View Live</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            {/if}
          </article>
        {/each}
      </div>

      <div class="mt-12 text-center" in:fade="{{ duration: 600, delay: 800 }}">
        <a
          href="https://github.com/arjunsk"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 bg-graphite-900 text-paper font-medium rounded-lg hover:bg-graphite-700 transition-all duration-300"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View All on GitHub
        </a>
      </div>
    {/if}
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Architects+Daughter&family=Patrick+Hand&display=swap');

  .bg-paper { background-color: #faf8f3; }
  .font-display { font-family: 'Caveat', cursive; }
  .font-handwriting { font-family: 'Patrick Hand', cursive; }

  .text-graphite-900 { color: #2d2a26; }
  .text-graphite-700 { color: #4a4540; }
  .text-graphite-600 { color: #6b6560; }
  .text-graphite-500 { color: #8a8580; }
  .text-graphite-200 { color: #d8d4ce; }
  .text-graphite-100 { color: #e8e5e0; }
  .text-graphite-50 { color: #f4f1ed; }
  .text-paper { color: #faf8f3; }

  .bg-white { background-color: #ffffff; }
  .bg-paper { background-color: #faf8f3; }
  .bg-graphite-900 { background-color: #2d2a26; }
  .bg-graphite-700 { background-color: #4a4540; }
  .bg-graphite-50 { background-color: #f4f1ed; }

  .border-graphite-900 { border-color: #2d2a26; }
  .border-graphite-200 { border-color: #d8d4ce; }

  .hover\:border-graphite-900:hover { border-color: #2d2a26; }
  .hover\:shadow-lg:hover { box-shadow: 0 10px 25px -5px rgba(45, 42, 38, 0.1); }
</style>
