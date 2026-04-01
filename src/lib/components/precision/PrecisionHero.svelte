<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    let visible = false;
    let experienceText = "";
    let mounted = false;

    function calculateExperience() {
        const startDate = new Date("2022-01-25");
        const now = new Date();
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        const yStr = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
        const mStr = months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";
        const dStr = days > 0 ? `${days} Day${days > 1 ? "s" : ""}` : "";
        experienceText = [yStr, mStr, dStr].filter(Boolean).join(" ");
    }

    onMount(() => {
        mounted = true;
        setTimeout(() => visible = true, 100);
        calculateExperience();
        const interval = setInterval(calculateExperience, 86400000);
        return () => clearInterval(interval);
    });
</script>

<header class="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#6366F1]/5 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s;"></div>
    </div>
    
    <!-- Grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

    {#if visible}
        <div class="w-full max-w-6xl mx-auto text-center relative z-10 px-4">
            <!-- Name with gradient text -->
            <h1 
                in:fly={{ y: 30, duration: 1000, delay: 200, easing: cubicOut }}
                class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400 leading-tight tracking-tight mb-6"
            >
                ARJUN S K
            </h1>
            
            <!-- Title with underline animation -->
            <div 
                in:fly={{ y: 20, duration: 800, delay: 400, easing: cubicOut }}
                class="relative inline-block"
            >
                <div class="text-lg sm:text-xl md:text-2xl font-medium text-[#6366F1] tracking-[0.3em] mb-2">
                    WEB DEVELOPER & UI/UX ENGINEER
                </div>
                <div class="h-0.5 w-0 bg-gradient-to-r from-[#6366F1] to-transparent mx-auto animate-expand"></div>
            </div>
            
            <!-- Tagline -->
            <p 
                in:fly={{ y: 20, duration: 800, delay: 600, easing: cubicOut }}
                class="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mt-8 mb-12"
            >
                Innovative developer bridging the gap between design and technology
            </p>
            
            <!-- Stats with stagger -->
            <div 
                in:fly={{ y: 20, duration: 800, delay: 800, easing: cubicOut }}
                class="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
            >
                <div class="group text-center px-6 py-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#6366F1]/30 hover:bg-white/10 transition-all duration-500">
                    <div class="text-3xl md:text-4xl font-bold text-white group-hover:text-[#6366F1] transition-colors">
                        {experienceText}
                    </div>
                    <div class="text-xs text-gray-500 tracking-widest uppercase mt-1">Experience</div>
                </div>
                <div class="group text-center px-6 py-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#6366F1]/30 hover:bg-white/10 transition-all duration-500">
                    <div class="text-3xl md:text-4xl font-bold text-white group-hover:text-[#6366F1] transition-colors">10+</div>
                    <div class="text-xs text-gray-500 tracking-widest uppercase mt-1">Projects</div>
                </div>
                <div class="group text-center px-6 py-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#6366F1]/30 hover:bg-white/10 transition-all duration-500">
                    <div class="text-3xl md:text-4xl font-bold text-white group-hover:text-[#6366F1] transition-colors">99.9%</div>
                    <div class="text-xs text-gray-500 tracking-widest uppercase mt-1">Uptime</div>
                </div>
            </div>
            
            <!-- CTA Buttons -->
            <div 
                in:fly={{ y: 20, duration: 800, delay: 1000, easing: cubicOut }}
                class="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <button
                    on:click={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    class="group relative px-8 py-4 bg-[#6366F1] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                >
                    <span class="relative z-10 flex items-center gap-2">
                        View Projects
                        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                    <div class="absolute inset-0 bg-[#4f46e5] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
                <button
                    on:click={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    class="group relative px-8 py-4 bg-transparent text-[#6366F1] font-semibold rounded-lg border-2 border-[#6366F1] overflow-hidden transition-all duration-300 hover:bg-[#6366F1] hover:text-white"
                >
                    <span class="flex items-center gap-2">
                        Contact Me
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    {/if}
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div class="w-1 h-2 bg-gray-500 rounded-full animate-scroll"></div>
        </div>
    </div>
</header>

<style>
    @keyframes expand {
        from { width: 0; }
        to { width: 120px; }
    }
    
    .animate-expand {
        animation: expand 1s ease-out 0.8s forwards;
    }
    
    @keyframes scroll {
        0%, 100% { opacity: 1; transform: translateY(0); }
        50% { opacity: 0.5; transform: translateY(4px); }
    }
    
    .animate-scroll {
        animation: scroll 1.5s ease-in-out infinite;
    }
</style>
