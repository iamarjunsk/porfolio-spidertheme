<script>
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";

    let skillCategories = [
        {
            title: "Frontend Frameworks",
            icon: "🕸️",
            skills: [
                "React.js",
                "Next.js",
                "Vue.js",
                "Nuxt.js",
                "SvelteKit",
                "Vanilla JS",
            ],
        },
        {
            title: "State & Styling",
            icon: "🎨",
            skills: [
                "Redux Toolkit",
                "Pinia",
                "Tailwind CSS",
                "SCSS/SASS",
                "Ant Design",
                "Shadcn",
            ],
        },
        {
            title: "Backend & Tools",
            icon: "⚙️",
            skills: [
                "REST APIs",
                "Axios",
                "Git",
                "Vite",
                "Webpack",
                "CI/CD (AWS)",
            ],
        },
        {
            title: "Advanced Tech",
            icon: "🚀",
            skills: [
                "Three.js (3D)",
                "Chart.js",
                "JWT Auth",
                "Performance Opt.",
                "WebSockets",
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
            { threshold: 0.2 },
        );

        const section = document.getElementById("about");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    });
</script>

<section id="about" class="relative py-24 px-4 bg-[#0f0f11] overflow-hidden">
    <!-- Background Elements -->
    <div
        class="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none"
    >
        <div
            class="absolute top-10 left-10 w-64 h-64 bg-spider-red/5 rounded-full blur-[100px] animate-pulse"
        ></div>
        <div
            class="absolute bottom-10 right-10 w-80 h-80 bg-spider-blue/5 rounded-full blur-[100px] animate-pulse delay-1000"
        ></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-20">
            <div
                class="inline-block p-4 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
                <span class="text-5xl">👨‍💻</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-comic text-white mb-6">
                About The Developer
            </h2>
            <div
                class="w-24 h-1 bg-gradient-to-r from-spider-red to-spider-blue mx-auto rounded-full"
            ></div>
        </div>

        <!-- Content Grid -->
        <div class="grid lg:grid-cols-2 gap-16 items-start">
            <!-- Bio -->
            <div class="space-y-8">
                <div
                    class="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg relative group overflow-hidden"
                >
                    <div
                        class="absolute top-0 left-0 w-1 h-full bg-spider-red"
                    ></div>
                    <p class="text-lg leading-relaxed text-gray-300">
                        Innovative and high-performance <span
                            class="text-white font-bold">Web Developer</span
                        >
                        with over
                        <span class="text-spider-red font-bold">4 years</span>
                        of experience building dynamic web applications. Expert
                        in modern JavaScript frameworks including
                        <span class="text-spider-blue font-semibold"
                            >React.js</span
                        >,
                        <span class="text-green-400 font-semibold">Vue.js</span
                        >,
                        <span class="text-green-500 font-semibold">Nuxt.js</span
                        >, and
                        <span class="text-orange-400 font-semibold"
                            >SvelteKit</span
                        >.
                    </p>
                </div>

                <div
                    class="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg relative group overflow-hidden"
                >
                    <div
                        class="absolute top-0 left-0 w-1 h-full bg-spider-blue"
                    ></div>
                    <p class="text-lg leading-relaxed text-gray-300">
                        Proven track record in architecting scalable admin
                        panels, engineering resilient API infrastructures, and
                        optimizing frontend performance. Adept at bridging the
                        gap between design and technology to deliver premium
                        UI/UX experiences using <span
                            class="text-cyan-400 font-semibold"
                            >Tailwind CSS</span
                        >,
                        <span class="text-blue-400 font-semibold"
                            >Ant Design</span
                        >, and
                        <span class="text-white font-semibold">Three.js</span>.
                    </p>
                </div>

                <!-- Current Role Badge -->
                <div
                    class="inline-flex items-center gap-4 bg-gradient-to-r from-spider-red/10 to-spider-blue/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all w-full"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-gradient-to-br from-spider-red to-spider-blue flex items-center justify-center text-2xl shadow-lg"
                    >
                        🏢
                    </div>
                    <div>
                        <h3 class="font-comic text-xl text-white mb-1">
                            Current Role
                        </h3>
                        <p class="text-gray-300">
                            <strong>Web Developer</strong> at Spatium Offices
                        </p>
                        <p class="text-sm text-gray-500">Nov 2025 - Present</p>
                    </div>
                </div>
            </div>

            <!-- Skills Grid -->
            <div class="relative">
                {#if inView}
                    <div class="grid sm:grid-cols-2 gap-6">
                        {#each skillCategories as category, i}
                            <div
                                in:fly={{
                                    y: 30,
                                    delay: i * 150,
                                    duration: 600,
                                }}
                                class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-spider-blue/50 transition-all duration-300 hover:bg-white/10 group"
                            >
                                <div class="flex items-center gap-3 mb-4">
                                    <span
                                        class="text-2xl group-hover:scale-110 transition-transform duration-300"
                                        >{category.icon}</span
                                    >
                                    <h3 class="font-bold text-white text-lg">
                                        {category.title}
                                    </h3>
                                </div>

                                <div class="flex flex-wrap gap-2">
                                    {#each category.skills as skill}
                                        <span
                                            class="px-3 py-1 bg-black/30 rounded-lg text-sm text-gray-300 border border-white/5 hover:border-spider-red/50 hover:text-white transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>
