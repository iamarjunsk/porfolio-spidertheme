<script>
    import { onMount } from "svelte";
    import { fade, scale } from "svelte/transition";

    let visible = false;
    let experienceText = "";
    let shortExperienceText = "";

    function calculateExperience() {
        const startDate = new Date("2022-01-25");
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            // Get days in previous month
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const yStr = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
        const mStr =
            months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";
        const dStr = days > 0 ? `${days} Day${days > 1 ? "s" : ""}` : "";

        experienceText = [yStr, mStr, dStr].filter(Boolean).join(" ");
        shortExperienceText = `${years}+ Years`;
    }

    onMount(() => {
        visible = true;
        calculateExperience();
        // Update every day (optional, but good for long running tabs)
        const interval = setInterval(calculateExperience, 86400000);
        return () => clearInterval(interval);
    });
</script>

<header class="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
    <!-- Spider-Verse Glitch Background -->
    <div class="absolute inset-0">
        <!-- Grid pattern -->
        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
        ></div>
        <!-- Radial gradient overlay -->
        <div
            class="absolute inset-0 bg-gradient-radial from-spider-red/5 via-transparent to-spider-blue/5"
        ></div>

        <!-- Glitch Lines -->
        <div
            class="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        >
            <div
                class="absolute top-1/4 left-0 w-full h-[1px] bg-spider-red animate-pulse"
            ></div>
            <div
                class="absolute bottom-1/3 right-0 w-2/3 h-[1px] bg-spider-blue animate-pulse delay-75"
            ></div>
        </div>
    </div>

    <!-- Floating Elements -->
    <div
        class="absolute top-20 left-20 w-2 h-2 bg-spider-red rounded-full animate-pulse shadow-[0_0_10px_#ff0000]"
    ></div>
    <div
        class="absolute top-40 right-32 w-1 h-1 bg-spider-blue rounded-full animate-pulse shadow-[0_0_10px_#0000ff]"
        style="animation-delay: 1s;"
    ></div>
    <div
        class="absolute bottom-20 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]"
        style="animation-delay: 0.5s;"
    ></div>

    <!-- Geometric Web Corner -->
    <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" class="w-full h-full">
            <path
                d="M200,0 L0,200 M180,0 L0,180 M160,0 L0,160 M140,0 L0,140 M120,0 L0,120 M100,0 L0,100 M80,0 L0,80 M60,0 L0,60 M40,0 L0,40 M20,0 L0,20"
                stroke="white"
                stroke-width="1"
            />
        </svg>
    </div>

    <!-- Hero Content -->
    <div
        class="relative z-10 flex items-center justify-center min-h-screen px-4 py-8"
    >
        {#if visible}
            <div class="w-full max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <!-- Main Content - Now appears first on mobile -->
                    <div
                        in:scale={{ duration: 1500, start: 0.9, opacity: 0 }}
                        class="text-center lg:text-left space-y-6 order-1 lg:order-1"
                    >
                        <!-- Header -->
                        <div class="mb-6 lg:mb-8">
                            <div
                                class="flex flex-col items-center lg:flex-row lg:items-center gap-4 mb-4 lg:mb-6"
                            >
                                <div class="relative group">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-r from-spider-red to-spider-blue rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"
                                    ></div>
                                    <img
                                        src="/spider-logo.png"
                                        alt="Spider Logo"
                                        class="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-2xl transform group-hover:rotate-12 transition duration-500"
                                    />
                                </div>
                                <div>
                                    <h1
                                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-comic text-white leading-tight tracking-tight relative"
                                    >
                                        <span class="relative z-10"
                                            >Arjun S K</span
                                        >
                                        <span
                                            class="absolute top-1 left-1 text-spider-red opacity-50 blur-[1px] z-0"
                                            >Arjun S K</span
                                        >
                                        <span
                                            class="absolute -bottom-1 -right-1 text-spider-blue opacity-50 blur-[1px] z-0"
                                            >Arjun S K</span
                                        >
                                    </h1>
                                    <div
                                        class="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-spider-red to-spider-blue font-comic-neue mt-2 lg:mt-3 font-bold"
                                    >
                                        Web Developer & UI/UX Engineer
                                    </div>
                                </div>
                            </div>

                            <p
                                class="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-comic-neue px-2 lg:px-0 max-w-2xl"
                            >
                                Innovative developer with <span
                                    class="text-spider-red font-bold"
                                    >{shortExperienceText}</span
                                >
                                of experience. Expert in
                                <span class="text-white font-semibold"
                                    >React</span
                                >,
                                <span class="text-white font-semibold">Vue</span
                                >, and
                                <span class="text-white font-semibold"
                                    >SvelteKit</span
                                >. Bridging the gap between design and
                                technology. 🕷️
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div
                            class="flex flex-col sm:flex-row gap-4 lg:gap-6 px-2 lg:px-0 justify-center lg:justify-start"
                        >
                            <button
                                on:click={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })}
                                class="group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg"
                            >
                                <div
                                    class="absolute inset-0 w-full h-full bg-spider-red/80 group-hover:bg-spider-red transition-all duration-300 transform skew-x-12 group-hover:skew-x-0"
                                ></div>
                                <span
                                    class="relative flex items-center justify-center gap-2 text-white font-bold text-lg"
                                >
                                    🕸️ View My Work
                                </span>
                            </button>

                            <button
                                on:click={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })}
                                class="group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg border border-spider-blue/50 hover:border-spider-blue"
                            >
                                <div
                                    class="absolute inset-0 w-full h-full bg-spider-blue/10 group-hover:bg-spider-blue/20 transition-all duration-300"
                                ></div>
                                <span
                                    class="relative flex items-center justify-center gap-2 text-spider-blue font-bold text-lg group-hover:text-white transition-colors"
                                >
                                    📨 Get In Touch
                                </span>
                            </button>

                            <a
                                href="/Arjun S K Resume.pdf"
                                download="Arjun_SK_Resume.pdf"
                                class="group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg border border-purple-500/50 hover:border-purple-500 animate-bounce-slow"
                            >
                                <div
                                    class="absolute inset-0 w-full h-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300"
                                ></div>
                                <span
                                    class="relative flex items-center justify-center gap-2 text-purple-400 font-bold text-lg group-hover:text-white transition-colors"
                                >
                                    📄 Resume
                                </span>
                            </a>
                        </div>

                        <!-- Quick Links -->
                        <div
                            class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 text-gray-400 text-sm mt-8"
                        >
                            <div
                                class="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                            >
                                <div
                                    class="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_5px_#4ade80]"
                                ></div>
                                <span>Available for work</span>
                            </div>
                            <div
                                class="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                            >
                                <div
                                    class="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_5px_#60a5fa]"
                                ></div>
                                <span>Remote friendly</span>
                            </div>
                        </div>
                    </div>

                    <!-- Stats & Skills Card - Now appears below name section on mobile -->
                    <div
                        in:scale={{
                            duration: 1500,
                            start: 0.9,
                            opacity: 0,
                            delay: 300,
                        }}
                        class="bg-black/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl order-2 lg:order-2 relative overflow-hidden group"
                    >
                        <!-- Card Glow -->
                        <div
                            class="absolute -top-20 -right-20 w-60 h-60 bg-spider-blue/20 rounded-full blur-3xl group-hover:bg-spider-blue/30 transition-all duration-500"
                        ></div>
                        <div
                            class="absolute -bottom-20 -left-20 w-60 h-60 bg-spider-red/20 rounded-full blur-3xl group-hover:bg-spider-red/30 transition-all duration-500"
                        ></div>

                        <!-- Stats Grid -->
                        <div
                            class="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8 relative z-10"
                        >
                            <div
                                class="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-spider-red/50 transition-colors"
                            >
                                <div
                                    class="text-xl lg:text-2xl font-comic text-spider-red mb-1 lg:mb-2 leading-tight"
                                >
                                    {experienceText}
                                </div>
                                <div
                                    class="text-xs lg:text-sm text-gray-400 uppercase tracking-wider"
                                >
                                    Experience
                                </div>
                            </div>
                            <div
                                class="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-spider-blue/50 transition-colors"
                            >
                                <div
                                    class="text-3xl lg:text-4xl font-comic text-spider-blue mb-1 lg:mb-2"
                                >
                                    10+
                                </div>
                                <div
                                    class="text-xs lg:text-sm text-gray-400 uppercase tracking-wider"
                                >
                                    Projects
                                </div>
                            </div>
                            <div
                                class="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors col-span-2"
                            >
                                <div
                                    class="text-3xl lg:text-4xl font-comic text-purple-400 mb-1 lg:mb-2"
                                >
                                    99.9%
                                </div>
                                <div
                                    class="text-xs lg:text-sm text-gray-400 uppercase tracking-wider"
                                >
                                    Uptime Delivered
                                </div>
                            </div>
                        </div>

                        <!-- Core Technologies -->
                        <div class="space-y-4 relative z-10">
                            <h3
                                class="text-base lg:text-lg font-comic text-white mb-4 text-center lg:text-left flex items-center gap-2"
                            >
                                <span class="w-2 h-2 bg-white rounded-full"
                                ></span>
                                Tech Stack
                            </h3>
                            <div
                                class="flex flex-wrap gap-2 justify-center lg:justify-start"
                            >
                                {#each ["React.js", "Vue.js", "SvelteKit", "Next.js", "TypeScript", "Tailwind", "Three.js", "Node.js"] as tech}
                                    <span
                                        class="px-3 py-1.5 bg-white/5 text-gray-300 text-xs lg:text-sm rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <!-- Animated Web Lines -->
    <svg
        class="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        viewBox="0 0 1200 100"
    >
        <path
            d="M0,50 Q300,0 600,50 T1200,50"
            stroke="url(#gradient)"
            stroke-width="1"
            fill="none"
            opacity="0.3"
            class="animate-pulse"
        />
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ef4444" />
                <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
        </defs>
    </svg>
</header>
