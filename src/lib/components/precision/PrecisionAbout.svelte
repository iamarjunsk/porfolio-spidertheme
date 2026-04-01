<script lang="ts">
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    let skillCategories = [
        {
            title: "Frontend Frameworks",
            skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "SvelteKit", "Vanilla JS"],
        },
        {
            title: "State & Styling",
            skills: ["Redux Toolkit", "Pinia", "Tailwind CSS", "SCSS/SASS", "Ant Design", "Shadcn"],
        },
        {
            title: "Backend & Tools",
            skills: ["REST APIs", "Axios", "Git", "Vite", "Webpack", "CI/CD (AWS)"],
        },
        {
            title: "Advanced Tech",
            skills: ["Three.js (3D)", "Chart.js", "JWT Auth", "Performance Opt.", "WebSockets"],
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

        const section = document.getElementById("about");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    });
</script>

<section id="about" class="relative py-24 px-4 bg-[#0a0a0a]">
    <!-- Background accent -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-[#6366F1]/5 rounded-full blur-[150px]"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#6366F1]/3 rounded-full blur-[150px]"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <div 
                in:fly={{ y: 20, duration: 600 }}
                class="inline-block px-4 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-sm font-medium tracking-wider mb-4"
            >
                ABOUT
            </div>
            <h2 
                in:fly={{ y: 20, duration: 600, delay: 100 }}
                class="text-4xl md:text-5xl font-bold text-white mb-4"
            >
                About Me
            </h2>
            <div 
                in:fly={{ y: 20, duration: 600, delay: 150 }}
                class="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent mx-auto rounded-full"
            ></div>
        </div>

        <!-- Content Grid -->
        <div class="grid lg:grid-cols-2 gap-12">
            <!-- Bio -->
            <div class="space-y-6">
                <div 
                    in:fly={{ x: -30, duration: 800, delay: 200 }}
                    class="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-[#6366F1]/20 transition-all duration-500"
                >
                    <p class="text-base leading-relaxed text-gray-400">
                        Innovative and high-performance <span class="text-white font-semibold">Web Developer</span> with over <span class="text-[#6366F1] font-semibold">4 years</span> of experience building dynamic web applications. Expert in modern JavaScript frameworks including <span class="text-white font-semibold">React.js</span>, <span class="text-white font-semibold">Vue.js</span>, <span class="text-white font-semibold">Nuxt.js</span>, and <span class="text-white font-semibold">SvelteKit</span>.
                    </p>
                </div>

                <div 
                    in:fly={{ x: -30, duration: 800, delay: 300 }}
                    class="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-[#6366F1]/20 transition-all duration-500"
                >
                    <p class="text-base leading-relaxed text-gray-400">
                        Proven track record in architecting scalable admin panels, engineering resilient API infrastructures, and optimizing frontend performance. Adept at bridging the gap between design and technology to deliver premium UI/UX experiences.
                    </p>
                </div>

                <!-- Current Role -->
                <div 
                    in:fly={{ x: -30, duration: 800, delay: 400 }}
                    class="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#6366F1]/20 transition-all duration-500"
                >
                    <div class="w-14 h-14 rounded-xl bg-[#6366F1] flex items-center justify-center text-white font-bold text-xl">
                        S
                    </div>
                    <div>
                        <h3 class="font-semibold text-white text-lg">Current Role</h3>
                        <p class="text-gray-400">Web Developer at Spatium Offices</p>
                        <p class="text-sm text-gray-600">Nov 2025 - Present</p>
                    </div>
                </div>
            </div>

            <!-- Skills Grid -->
            <div class="grid sm:grid-cols-2 gap-4">
                {#if inView}
                    {#each skillCategories as category, i}
                        <div
                            in:fly={{ y: 30, duration: 600, delay: 200 + i * 100, easing: cubicOut }}
                            class="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#6366F1]/30 hover:bg-white/[0.07] transition-all duration-500 group"
                        >
                            <h3 class="font-semibold text-white text-base mb-4 flex items-center gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#6366F1] group-hover:scale-150 transition-transform"></span>
                                {category.title}
                            </h3>
                            <div class="flex flex-wrap gap-2">
                                {#each category.skills as skill, j}
                                    <span 
                                        in:fade={{ duration: 300, delay: 400 + i * 100 + j * 50 }}
                                        class="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</section>
