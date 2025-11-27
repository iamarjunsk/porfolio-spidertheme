<script>
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";

    let experiences = [
        {
            company: "Spatium Offices",
            role: "Web Developer",
            period: "Nov 2025 – Present",
            location: "Bengaluru, India",
            description:
                "Integrated Workplace Management System (IWMS) & ERP Development",
            achievements: [
                "Architected a scalable SPA using React, Vite, and Redux Toolkit for the company admin panel.",
                "Engineered resilient API infrastructure with custom Axios layer, queue-based JWT rotation, and 99.9% session continuity.",
                "Developed high-performance in-browser QR scanner using jsQR and Canvas API.",
                "Spearheading ERP development using SvelteKit and Tailwind CSS.",
                "Established CI/CD automation with shell scripting for AWS EC2 deployments.",
            ],
        },
        {
            company: "Lobb (lobb.in)",
            role: "Frontend Developer",
            period: "July 2024 – Nov 2024",
            location: "Bengaluru, India",
            description: "Logistics Platform Development",
            achievements: [
                "Developed core admin interface using Nuxt.js and SCSS.",
                "Created comprehensive reusable components for truck booking details.",
                "Streamlined data management processes through modular architecture.",
            ],
        },
        {
            company: "NeoAstra Technologies",
            role: "Web Developer",
            period: "Jan 2022 – July 2024",
            location: "Bengaluru, India",
            description: "Dynamic Web Applications & 3D Web",
            achievements: [
                "Reduced webpage load times by up to 3 seconds through performance optimization.",
                "Produced immersive 3D advertisement website (Project Apex) using Vue.js and Three.js.",
                "Crafted high-performance admin panels (MyGenie) using Next.js.",
                "Designed video player with frame-by-frame rendering for NeoVision OTT.",
                "Engineered facial detection features for Jio Events platform.",
            ],
        },
    ];

    let inView = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    inView = true;
                }
            },
            { threshold: 0.1 },
        );

        const section = document.getElementById("experience");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    });
</script>

<section
    id="experience"
    class="relative py-20 px-4 bg-slate-900 overflow-hidden"
>
    <!-- Spider-Verse Glitch Background -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div
            class="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ff0000_10px,#ff0000_11px)] opacity-5"
        ></div>
        <div
            class="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#0000ff_10px,#0000ff_11px)] opacity-5"
        ></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
        <!-- Header -->
        <div class="text-center mb-16">
            <div
                class="inline-block p-4 bg-white/5 backdrop-blur-sm rounded-full mb-4 border border-white/10 shadow-[0_0_15px_rgba(255,0,0,0.3)]"
            >
                <span class="text-4xl">🚀</span>
            </div>
            <h2
                class="text-4xl md:text-5xl font-comic text-white mb-2 relative inline-block"
            >
                <span class="relative z-10">Professional Journey</span>
                <span
                    class="absolute -top-1 -left-1 text-spider-red opacity-50 blur-[1px] z-0"
                    >Professional Journey</span
                >
                <span
                    class="absolute -bottom-1 -right-1 text-spider-blue opacity-50 blur-[1px] z-0"
                    >Professional Journey</span
                >
            </h2>
            <p
                class="text-gray-400 max-w-2xl mx-auto mt-4 font-comic-neue text-lg"
            >
                Swinging through companies, weaving webs of code.
            </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
            <!-- Center Line -->
            <div
                class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-spider-red via-purple-500 to-spider-blue opacity-30 rounded-full"
            ></div>

            <div class="space-y-12 md:space-y-24">
                {#if inView}
                    {#each experiences as exp, i}
                        <div
                            class="relative flex flex-col md:flex-row items-center {i %
                                2 ===
                            0
                                ? 'md:flex-row-reverse'
                                : ''}"
                        >
                            <!-- Timeline Dot -->
                            <div
                                class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-900 border-4 border-spider-red rounded-full z-20 shadow-[0_0_15px_rgba(255,0,0,0.5)] flex items-center justify-center"
                            >
                                <div
                                    class="w-2 h-2 bg-white rounded-full animate-pulse"
                                ></div>
                            </div>

                            <!-- Content Spacer -->
                            <div class="w-full md:w-1/2"></div>

                            <!-- Content Card -->
                            <div
                                class="w-full md:w-1/2 pl-12 md:pl-0 {i % 2 ===
                                0
                                    ? 'md:pr-12'
                                    : 'md:pl-12'}"
                            >
                                <div
                                    in:fly={{
                                        x: i % 2 === 0 ? -50 : 50,
                                        y: 0,
                                        duration: 800,
                                        delay: i * 200,
                                    }}
                                    class="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl overflow-hidden hover:border-spider-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                                >
                                    <!-- Glitch Hover Effect -->
                                    <div
                                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                    ></div>

                                    <div
                                        class="flex flex-wrap justify-between items-start mb-4 gap-2"
                                    >
                                        <div>
                                            <h3
                                                class="text-2xl font-bold text-white group-hover:text-spider-blue transition-colors"
                                            >
                                                {exp.company}
                                            </h3>
                                            <div
                                                class="text-spider-red font-comic-neue font-bold text-lg"
                                            >
                                                {exp.role}
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <div
                                                class="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                                            >
                                                {exp.period}
                                            </div>
                                            <div
                                                class="text-xs text-gray-500 mt-1"
                                            >
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <p
                                        class="text-gray-300 mb-4 italic border-l-2 border-spider-red/30 pl-3"
                                    >
                                        {exp.description}
                                    </p>

                                    <ul class="space-y-2">
                                        {#each exp.achievements as achievement}
                                            <li
                                                class="flex items-start gap-2 text-gray-400 text-sm"
                                            >
                                                <span
                                                    class="text-spider-blue mt-1"
                                                    >🕷️</span
                                                >
                                                <span>{achievement}</span>
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</section>
