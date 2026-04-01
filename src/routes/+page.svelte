<script lang="ts">
    import { theme } from '$lib/stores/theme';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';

    import HeroSection from "$lib/components/HeroSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import ExperienceSection from "$lib/components/ExperienceSection.svelte";
    import ProjectsSection from "$lib/components/ProjectsSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
    import WebCorner from "$lib/components/WebCorner.svelte";

    import PrecisionHero from "$lib/components/precision/PrecisionHero.svelte";
    import PrecisionAbout from "$lib/components/precision/PrecisionAbout.svelte";
    import PrecisionExperience from "$lib/components/precision/PrecisionExperience.svelte";
    import PrecisionProjects from "$lib/components/precision/PrecisionProjects.svelte";
    import PrecisionContact from "$lib/components/precision/PrecisionContact.svelte";
    import PrecisionFooter from "$lib/components/precision/PrecisionFooter.svelte";
</script>

<svelte:head>
    <title
        >Arjun S K | Web Developer Portfolio - React, Vue & Modern Web
        Technologies</title
    >
    <meta
        name="description"
        content="Arjun S K - Experienced Web Developer specializing in React.js, Vue.js, and modern web technologies. Building amazing web experiences. Your friendly neighborhood developer!"
    />
    <meta
        name="keywords"
        content="Arjun S K, web developer, react developer, vue developer, javascript, typescript, frontend developer, portfolio"
    />
</svelte:head>

<ThemeToggle />

{#if $theme === 'spider'}
    <HeroSection />

    <div class="relative">
        <WebCorner position="bottom-right" size={200} animated={true} />
        <AboutSection />
    </div>

    <div class="relative">
        <WebCorner position="top-left" size={180} animated={true} />
        <ExperienceSection />
    </div>

    <div class="relative">
        <WebCorner position="bottom-left" size={220} animated={true} />
        <ProjectsSection />
    </div>

    <ContactSection />

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
{:else}
    <PrecisionHero />
    <PrecisionAbout />
    <PrecisionExperience />
    <PrecisionProjects />
    <PrecisionContact />
    <PrecisionFooter />
{/if}
