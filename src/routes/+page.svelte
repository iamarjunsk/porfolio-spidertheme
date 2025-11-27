<script lang="ts">
    import HeroSection from "$lib/components/HeroSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import ExperienceSection from "$lib/components/ExperienceSection.svelte";
    import ProjectsSection from "$lib/components/ProjectsSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<svelte:head>
    <title
        >Arjun S K | Web Developer Portfolio - React, Vue & Modern Web
        Technologies</title
    >
    <meta
        name="description"
        content="Arjun S K - Experienced Web Developer specializing in React.js, Vue.js, and modern web technologies. Building amazing web experiences with Spider-Man flair. Your friendly neighborhood developer!"
    />
    <meta
        name="keywords"
        content="Arjun S K, web developer, react developer, vue developer, javascript, typescript, frontend developer, portfolio, spider-man portfolio"
    />
</svelte:head>

<HeroSection />
<AboutSection />
<ExperienceSection />
<ProjectsSection />
<ContactSection />

<!-- Footer -->
<footer
    class="py-12 bg-[#050505] text-white text-center relative overflow-hidden border-t border-white/5"
>
    <div
        class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"
    ></div>
    <div class="relative z-10">
        <p
            class="text-lg font-comic-neue mb-2 flex items-center justify-center gap-2"
        >
            Made with <span class="text-spider-red animate-pulse">🕷️</span> and
            <span class="text-red-400">❤️</span>
            by
            <span
                class="bg-gradient-to-r from-spider-red to-spider-blue bg-clip-text text-transparent font-bold"
                >Arjun S K</span
            >
        </p>
        <p class="text-gray-500 text-sm">
            © 2025 - With great code comes great responsibility
        </p>
    </div>
</footer>
