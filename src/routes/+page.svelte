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
<footer class="py-8 bg-gray-900 text-white text-center">
  <p class="text-lg font-comic-neue">
    Made with 🕷️ and ❤️ by Arjun S K
  </p>
  <p class="mt-2 opacity-75">
    © 2025 - With great code comes great responsibility
  </p>
</footer>
