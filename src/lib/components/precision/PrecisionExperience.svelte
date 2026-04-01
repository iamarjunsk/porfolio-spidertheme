<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    let experiences = [
        {
            company: "Spatium Offices",
            role: "Web Developer",
            period: "Nov 2025 – Present",
            location: "Bengaluru, India",
            description: "Integrated Workplace Management System (IWMS) & ERP Development",
            achievements: [
                "Architected a scalable SPA using React, Vite, and Redux Toolkit",
                "Engineered resilient API infrastructure with custom Axios layer",
                "Developed high-performance in-browser QR scanner using jsQR",
                "Spearheading ERP development using SvelteKit and Tailwind CSS",
            ],
        },
        {
            company: "Lobb (lobb.in)",
            role: "Frontend Developer",
            period: "July 2024 – Nov 2024",
            location: "Bengaluru, India",
            description: "Logistics Platform Development",
            achievements: [
                "Developed core admin interface using Nuxt.js and SCSS",
                "Created comprehensive reusable components for truck booking",
                "Streamlined data management through modular architecture",
            ],
        },
        {
            company: "NeoAstra Technologies",
            role: "Web Developer",
            period: "Jan 2022 – July 2024",
            location: "Bengaluru, India",
            description: "Dynamic Web Applications & 3D Web",
            achievements: [
                "Reduced webpage load times by up to 3 seconds",
                "Produced immersive 3D advertisement website using Vue.js and Three.js",
                "Crafted high-performance admin panels using Next.js",
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

<section id="experience" class="relative py-24 px-4 bg-[#0a0a0a]">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/2 left-0 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-[150px] -translate-y-1/2"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
        <!-- Header -->
        <div class="text-center mb-16">
            <div 
                in:fly={{ y: 20, duration: 600 }}
                class="inline-block px-4 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-sm font-medium tracking-wider mb-4"
            >
                EXPERIENCE
            </div>
            <h2 
                in:fly={{ y: 20, duration: 600, delay: 100 }}
                class="text-4xl md:text-5xl font-bold text-white mb-4"
            >
                Work Experience
            </h2>
            <div 
                in:fly={{ y: 20, duration: 600, delay: 150 }}
                class="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent mx-auto rounded-full"
            ></div>
        </div>

        <!-- Timeline -->
        <div class="relative">
            <!-- Center Line -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#6366F1]/50 to-[#6366F1]/20"></div>

            <div class="space-y-16">
                {#if inView}
                    {#each experiences as exp, i}
                        <div class="relative flex flex-col md:flex-row items-center">
                            <!-- Timeline Dot -->
                            <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#6366F1] rounded-full z-20 ring-4 ring-[#0a0a0a]"></div>
                            
                            {#if i % 2 === 0}
                                <!-- Even: Card on LEFT, Spacer on RIGHT -->
                                <div class="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                                    <div 
                                        in:fly={{ x: -50, duration: 800, delay: i * 200, easing: cubicOut }}
                                        class="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#6366F1]/30 hover:bg-white/[0.07] transition-all duration-500 group"
                                    >
                                        <div class="flex flex-wrap justify-between items-start gap-2 mb-3 md:flex-row-reverse">
                                            <div class="md:text-left">
                                                <h3 class="text-xl font-bold text-white group-hover:text-[#6366F1] transition-colors">{exp.company}</h3>
                                                <div class="text-[#6366F1] font-medium">{exp.role}</div>
                                            </div>
                                            <div class="md:text-right">
                                                <div class="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">{exp.period}</div>
                                                <div class="text-xs text-gray-600 mt-1">{exp.location}</div>
                                            </div>
                                        </div>
                                        <p class="text-gray-400 text-sm mb-4 md:border-r-2 md:border-l-0 border-l-2 border-[#6366F1]/30 md:pr-3 pl-3 md:pl-0">{exp.description}</p>
                                        <ul class="space-y-2">
                                            {#each exp.achievements as achievement}
                                                <li class="flex items-start gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors md:flex-row-reverse">
                                                    <span class="text-[#6366F1] mt-1 flex-shrink-0">▹</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                </div>
                                <div class="hidden md:block md:w-1/2"></div>
                            {:else}
                                <!-- Odd: Spacer on LEFT, Card on RIGHT -->
                                <div class="hidden md:block md:w-1/2"></div>
                                <div class="w-full md:w-1/2 pl-12 md:pl-12">
                                    <div 
                                        in:fly={{ x: 50, duration: 800, delay: i * 200, easing: cubicOut }}
                                        class="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#6366F1]/30 hover:bg-white/[0.07] transition-all duration-500 group"
                                    >
                                        <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
                                            <div>
                                                <h3 class="text-xl font-bold text-white group-hover:text-[#6366F1] transition-colors">{exp.company}</h3>
                                                <div class="text-[#6366F1] font-medium">{exp.role}</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">{exp.period}</div>
                                                <div class="text-xs text-gray-600 mt-1">{exp.location}</div>
                                            </div>
                                        </div>
                                        <p class="text-gray-400 text-sm mb-4 border-l-2 border-[#6366F1]/30 pl-3">{exp.description}</p>
                                        <ul class="space-y-2">
                                            {#each exp.achievements as achievement}
                                                <li class="flex items-start gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                                    <span class="text-[#6366F1] mt-1 flex-shrink-0">▹</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</section>
