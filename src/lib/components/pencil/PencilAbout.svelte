<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { professionalSummary, metrics, skills } from '$lib/data/portfolio';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  const skillBars = [
    { label: 'Frameworks', value: 95, color: 'bg-graphite-900' },
    { label: 'Design', value: 90, color: 'bg-graphite-700' },
    { label: 'Backend', value: 65, color: 'bg-graphite-500' },
    { label: 'DevOps', value: 60, color: 'bg-graphite-400' },
  ];

  const skillTags = [
    ...skills.frameworks.slice(0, 4),
    ...skills.languages_core.slice(0, 2),
    ...skills.design_styling.slice(0, 3),
    ...skills.special_techniques.slice(0, 2),
  ];
</script>

<section id="about" class="py-24 bg-paper relative overflow-hidden">
  <div class="absolute inset-0 opacity-20">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="#d4c4a8"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>

  <div class="max-w-6xl mx-auto px-6 relative z-10">
    {#if mounted}
      <div in:fly="{{ y: 30, duration: 600 }}" class="mb-16">
        <h2 class="font-display text-5xl md:text-6xl text-graphite-900 mb-2">About Me</h2>
        <div class="w-24 h-1 bg-graphite-900"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div in:fly="{{ y: 30, duration: 600, delay: 200 }}">
          <div class="p-6 bg-white rounded-xl shadow-sm border-2 border-graphite-200 mb-8">
            <p class="font-handwriting text-xl text-graphite-700 leading-relaxed">
              {professionalSummary}
            </p>
          </div>

          <div class="flex gap-6">
            {#each [
              { label: 'Years Exp', value: metrics.experience },
              { label: 'Projects', value: metrics.projects_completed },
              { label: 'Uptime', value: metrics.uptime_delivered }
            ] as metric, i}
              <div
                class="flex-1 p-4 bg-graphite-100 rounded-lg text-center"
                in:fly="{{ y: 20, duration: 400, delay: 400 + (i * 100) }}"
              >
                <div class="font-display text-3xl text-graphite-900">{metric.value}</div>
                <div class="text-sm text-graphite-500 font-handwriting">{metric.label}</div>
              </div>
            {/each}
          </div>
        </div>

        <div in:fly="{{ y: 30, duration: 600, delay: 300 }}" class="space-y-4">
          <h3 class="font-display text-2xl text-graphite-700 mb-4">Tools of the Trade</h3>

          <div class="space-y-3">
            {#each skillBars as bar}
              <div class="flex items-center gap-3">
                <span class="w-20 text-sm text-graphite-500 font-handwriting">{bar.label}</span>
                <div class="flex-1 h-3 bg-graphite-100 rounded-full overflow-hidden">
                  <div class="h-full {bar.color} rounded-full transition-all duration-1000" style="width: {bar.value}%"></div>
                </div>
              </div>
            {/each}
          </div>

          <div class="mt-6 flex flex-wrap gap-2">
            {#each skillTags as skill, i}
              <span
                class="px-3 py-1 text-sm font-handwriting text-graphite-700 bg-white border border-graphite-300 rounded-full"
                in:fade="{{ duration: 300, delay: 600 + (i * 50) }}"
              >
                {skill}
              </span>
            {/each}
          </div>
        </div>
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
  .text-graphite-500 { color: #8a8580; }
  .text-graphite-400 { color: #a5a29c; }
  .text-graphite-300 { color: #c4bfb8; }
  .text-graphite-200 { color: #d8d4ce; }
  .text-graphite-100 { color: #e8e5e0; }
  .text-graphite-50 { color: #f4f1ed; }

  .bg-white { background-color: #ffffff; }
  .bg-graphite-900 { background-color: #2d2a26; }
  .bg-graphite-700 { background-color: #4a4540; }
  .bg-graphite-500 { background-color: #8a8580; }
  .bg-graphite-400 { background-color: #a5a29c; }
  .bg-graphite-100 { background-color: #e8e5e0; }

  .border-graphite-900 { border-color: #2d2a26; }
  .border-graphite-300 { border-color: #c4bfb8; }
  .border-graphite-200 { border-color: #d8d4ce; }
</style>
