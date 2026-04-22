<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { contact } from '$lib/data/portfolio';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  const contactLinks = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`
    },
    {
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>`
    },
    {
      label: 'LinkedIn',
      value: 'arjunsk',
      href: `https://${contact.linkedin}`,
      isExternal: true,
      isBrand: true,
      icon: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 2.37-1.85 2.507 0 2.963 1.645 2.963 3.808v4.912zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`
    },
    {
      label: 'GitHub',
      value: 'arjunsk',
      href: `https://${contact.github}`,
      isExternal: true,
      isBrand: true,
      icon: `<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>`
    }
  ];
</script>

<section id="contact" class="py-24 bg-graphite-900 relative overflow-hidden">
  <div class="absolute inset-0 opacity-20">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 0 20 L 40 20" fill="none" stroke="#4a4540" stroke-width="0.5"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#lines)" />
    </svg>
  </div>

  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-graphite-700 to-transparent"></div>
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-graphite-700 to-transparent"></div>

  <div class="max-w-4xl mx-auto px-6 relative z-10">
    {#if mounted}
      <div in:fly="{{ y: 30, duration: 600 }}" class="text-center mb-12">
        <h2 class="font-display text-5xl md:text-6xl text-paper mb-2">Get in Touch</h2>
        <div class="w-24 h-1 bg-paper mx-auto"></div>
      </div>

      <div in:fade="{{ duration: 600, delay: 300 }}" class="text-center mb-12">
        <p class="font-handwriting text-xl text-graphite-400">
          Have a project in mind? Let's create something amazing together.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6 mb-12">
        {#each contactLinks as link, i}
          <a
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
            class="group flex items-center gap-4 p-6 bg-graphite-800 rounded-xl hover:bg-graphite-700 transition-all duration-300"
            in:fly="{{ y: 20, duration: 400, delay: 400 + (i * 100) }}"
          >
            <div class="w-12 h-12 flex items-center justify-center bg-graphite-900 rounded-lg group-hover:bg-graphite-600 transition-colors">
              {#if link.isBrand}
                <svg class="w-6 h-6 text-paper" fill="currentColor" viewBox="0 0 24 24">
                  {@html link.icon}
                </svg>
              {:else}
                <svg class="w-6 h-6 text-paper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {@html link.icon}
                </svg>
              {/if}
            </div>
            <div>
              <p class="text-sm text-graphite-500 font-handwriting">{link.label}</p>
              <p class="text-paper font-medium">{link.value}</p>
            </div>
          </a>
        {/each}
      </div>

      <div in:fade="{{ duration: 600, delay: 900 }}" class="text-center">
        <p class="font-display text-2xl text-paper">
          Or simply say hi 👋
        </p>
      </div>
    {/if}
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Architects+Daughter&family=Patrick+Hand&display=swap');

  .bg-graphite-900 { background-color: #2d2a26; }
  .bg-graphite-800 { background-color: #3d3935; }
  .bg-graphite-700 { background-color: #4a4540; }
  .font-display { font-family: 'Caveat', cursive; }
  .font-handwriting { font-family: 'Patrick Hand', cursive; }

  .text-paper { color: #faf8f3; }
  .text-graphite-500 { color: #a5a29c; }
  .text-graphite-400 { color: #c4bfb8; }
</style>
