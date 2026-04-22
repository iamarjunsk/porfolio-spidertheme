<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { personalInfo } from "$lib/data/portfolio";

    let mounted = false;
    let visible = false;

    onMount(() => {
        mounted = true;
        setTimeout(() => {
            visible = true;
        }, 100);
    });

    const nameParts = personalInfo.name.split(" ");
    const firstName = nameParts[0];
    const restName = nameParts.slice(1).join(" ");

    const heroSkills = ["Vue.js", "React", "SvelteKit"];
</script>

<section
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-paper"
>
    {#if mounted}
        <div class="absolute inset-0 opacity-30">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#d4c4a8"
                            stroke-width="0.5"
                            stroke-dasharray="2,4"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div class="absolute top-4 left-4 sm:top-8 sm:left-8 w-20 h-20 sm:w-32 sm:h-32 opacity-20">
            <svg viewBox="0 0 100 100" class="w-full h-full">
                <path
                    d="M10,30 Q50,10 90,30 Q70,50 90,70 Q50,90 10,70 Q30,50 10,30"
                    fill="none"
                    stroke="#8b7355"
                    stroke-width="1"
                    class="animate-pulse-slow"
                />
            </svg>
        </div>

        <div class="absolute bottom-8 right-8 sm:bottom-16 sm:right-16 w-16 h-16 sm:w-24 sm:h-24 opacity-15 rotate-12">
            <svg viewBox="0 0 100 100" class="w-full h-full">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#8b7355"
                    stroke-width="1"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="#8b7355"
                    stroke-width="1"
                />
            </svg>
        </div>
    {/if}

    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {#if visible}
            <div
                in:fly={{ y: 40, duration: 800, delay: 200 }}
                class="text-center"
            >
                <div
                    class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-graphite-600 bg-graphite-100 rounded-full"
                >
                    <span
                        class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    ></span>
                    {personalInfo.status} · {personalInfo.location}
                </div>

                <h1
                    class="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-graphite-900 mb-3 sm:mb-4 tracking-tight"
                    style="font-family: 'Caveat', cursive;"
                >
                    <span
                        class="inline-block"
                        in:fly={{ y: 20, duration: 600, delay: 400 }}
                        >{firstName}</span
                    >
                    <span
                        class="inline-block text-graphite-600 ml-2"
                        in:fly={{ y: 20, duration: 600, delay: 500 }}
                        >{restName}</span
                    >
                </h1>

                <p
                    class="font-body text-lg sm:text-xl md:text-2xl text-graphite-600 mb-3 sm:mb-4 max-w-2xl mx-auto px-2 sm:px-0"
                    in:fade={{ duration: 600, delay: 700 }}
                >
                    {personalInfo.title}
                </p>

                <p
                    class="font-handwriting text-base sm:text-lg text-graphite-500 mb-6 sm:mb-8 max-w-xl mx-auto italic px-4 sm:px-0"
                    in:fade={{ duration: 600, delay: 900 }}
                >
                    "{personalInfo.tagline}"
                </p>

                <div
                    class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
                    in:fly={{ y: 20, duration: 600, delay: 1100 }}
                >
                    <div
                        class="px-3 py-1.5 sm:px-4 sm:py-2 bg-graphite-900 text-paper text-xs sm:text-sm font-medium rounded-lg"
                    >
                        {personalInfo.experience_years} Years Exp
                    </div>
                    {#each heroSkills as skill, i}
                        <div
                            class="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-graphite-300 text-graphite-700 text-xs sm:text-sm font-medium rounded-lg hover:border-graphite-900 hover:bg-graphite-900 hover:text-paper transition-all duration-300"
                            in:fly={{
                                y: 10,
                                duration: 400,
                                delay: 1300 + i * 100,
                            }}
                        >
                            {skill}
                        </div>
                    {/each}
                </div>

                <div
                    class="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3"
                    in:fly={{ y: 20, duration: 600, delay: 1600 }}
                >
                    <a
                        href="/Arjun S K Resume.pdf"
                        download="Arjun_S_K_Resume.pdf"
                        class="group flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-graphite-900 text-paper text-sm font-medium rounded-lg hover:bg-graphite-700 transition-all duration-300"
                    >
                        <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Resume
                    </a>
                    <a
                        href="#projects"
                        class="group flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 bg-graphite-900 text-paper font-medium rounded-lg hover:bg-graphite-700 transition-all duration-300"
                    >
                        View Work
                        <svg
                            class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        class="flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 border-2 border-graphite-900 text-graphite-900 font-medium rounded-lg hover:bg-graphite-900 hover:text-paper transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        {/if}
    </div>

    <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
    >
        <span class="text-xs text-graphite-500 font-handwriting">scroll</span>
        <div class="w-px h-8 bg-graphite-400"></div>
    </div>
</section>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Architects+Daughter&family=Patrick+Hand&display=swap");

    .bg-paper {
        background-color: #faf8f3;
        background-image: radial-gradient(
                circle at 20% 30%,
                rgba(139, 115, 85, 0.03) 0%,
                transparent 50%
            ),
            radial-gradient(
                circle at 80% 70%,
                rgba(139, 115, 85, 0.03) 0%,
                transparent 50%
            );
    }

    .font-display {
        font-family: "Caveat", cursive;
    }

    .font-body {
        font-family: "Architects Daughter", cursive;
    }

    .font-handwriting {
        font-family: "Patrick Hand", cursive;
    }

    .text-graphite-900 {
        color: #2d2a26;
    }
    .text-graphite-700 {
        color: #4a4540;
    }
    .text-graphite-600 {
        color: #6b6560;
    }
    .text-graphite-500 {
        color: #8a8580;
    }
    .text-graphite-400 {
        color: #a5a29c;
    }
    .text-graphite-300 {
        color: #c4bfb8;
    }
    .text-graphite-100 {
        color: #e8e5e0;
    }
    .text-paper {
        color: #faf8f3;
    }

    .bg-graphite-900 {
        background-color: #2d2a26;
    }
    .bg-graphite-700 {
        background-color: #4a4540;
    }
    .bg-graphite-100 {
        background-color: #e8e5e0;
    }

    .border-graphite-900 {
        border-color: #2d2a26;
    }
    .border-graphite-300 {
        border-color: #c4bfb8;
    }

    .hover\:bg-graphite-900:hover {
        background-color: #2d2a26;
    }
    .hover\:bg-graphite-700:hover {
        background-color: #4a4540;
    }
    .hover\:text-paper:hover {
        color: #faf8f3;
    }
    .hover\:border-graphite-900:hover {
        border-color: #2d2a26;
    }
</style>
