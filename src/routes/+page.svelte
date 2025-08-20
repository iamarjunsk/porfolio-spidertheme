<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<svelte:head>
  <title>Arjun S K | Web Developer Portfolio</title>
  <meta name="description" content="Arjun S K - Experienced Web Developer specializing in React.js, Vue.js, and modern web technologies" />
</svelte:head>

<HeroSection />
<AboutSection />
<ProjectsSection />
<ContactSection />

<!-- Footer -->
<footer class="py-12 bg-gradient-to-r from-deep-space via-gray-900 to-deep-space text-white text-center relative overflow-hidden">
  <div class="absolute inset-0 bg-web-pattern bg-[length:60px_60px] opacity-5"></div>
  <div class="relative z-10">
    <p class="text-lg font-comic-neue mb-2">
      Made with <span class="text-spider-red animate-pulse">🕷️</span> and <span class="text-red-400">❤️</span> by 
      <span class="bg-gradient-to-r from-spider-red to-spider-blue bg-clip-text text-transparent font-bold">Arjun S K</span>
    </p>
    <p class="text-white/60 text-sm">
      © 2025 - With great code comes great responsibility
    </p>
  </div>
</footer>
