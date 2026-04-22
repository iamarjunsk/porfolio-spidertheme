<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { experiences } from '$lib/data/portfolio';

  let mounted = false;
  let visible = false;

  onMount(() => {
    mounted = true;
    setTimeout(() => visible = true, 100);
  });
</script>

<section id="experience" class="py-24 bg-paper-alt relative overflow-hidden">
  <div class="absolute inset-0 opacity-15">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="0" y2="100%" stroke="#8b7355" stroke-width="1" stroke-dasharray="4,8"/>
    </svg>
  </div>

  <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
    {#if mounted}
      <div in:fly="{{ y: 30, duration: 600 }}" class="mb-10 sm:mb-16">
        <h2 class="font-display text-4xl sm:text-5xl md:text-6xl text-graphite-900 mb-2">Experience</h2>
        <div class="w-24 h-1 bg-graphite-900"></div>
      </div>

      <div class="space-y-0">
        {#each experiences as exp, index}
          <div
            class="relative pl-8 sm:pl-12 py-6 sm:py-8 border-l-2 border-graphite-300 hover:border-graphite-900 transition-colors duration-300"
            in:fly="{{ y: 30, duration: 600, delay: 200 + (index * 150) }}"
          >
            <div class="absolute left-0 top-8 sm:top-10 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-graphite-900 rounded-full border-2 sm:border-4 border-paper-alt"></div>

            <div class="group">
              <span class="inline-block px-3 py-1 text-sm font-handwriting text-graphite-600 bg-graphite-100 rounded-full mb-2">
                {exp.period}
              </span>

              <h3 class="font-display text-xl sm:text-2xl md:text-3xl text-graphite-900 group-hover:text-graphite-700 transition-colors">
                {exp.role}
              </h3>

              <p class="font-handwriting text-base sm:text-lg text-graphite-600 mb-2">
                {exp.company} · {exp.location}
              </p>

              <p class="font-body text-sm sm:text-base text-graphite-600 mb-4">
                {exp.description}
              </p>

              <ul class="space-y-2">
                {#each exp.achievements as achievement}
                  <li class="flex items-start gap-2 text-graphite-600">
                    <span class="mt-1.5 sm:mt-2 w-1.5 h-1.5 bg-graphite-400 rounded-full shrink-0"></span>
                    <span class="font-handwriting text-xs sm:text-sm">{achievement}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Architects+Daughter&family=Patrick+Hand&display=swap');

  .bg-paper-alt { background-color: #f5f2eb; }
  .font-display { font-family: 'Caveat', cursive; }
  .font-body { font-family: 'Architects Daughter', cursive; }
  .font-handwriting { font-family: 'Patrick Hand', cursive; }

  .text-graphite-900 { color: #2d2a26; }
  .text-graphite-700 { color: #4a4540; }
  .text-graphite-600 { color: #6b6560; }
  .text-graphite-400 { color: #a5a29c; }
  .text-graphite-300 { color: #c4bfb8; }
  .text-graphite-100 { color: #e8e5e0; }

  .bg-graphite-900 { background-color: #2d2a26; }
  .bg-graphite-100 { background-color: #e8e5e0; }
  .bg-paper-alt { background-color: #f5f2eb; }
  .border-graphite-300 { border-color: #c4bfb8; }
  .border-graphite-900 { border-color: #2d2a26; }
</style>
