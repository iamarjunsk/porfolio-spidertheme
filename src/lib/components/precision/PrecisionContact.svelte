<script lang="ts">
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-svelte';

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

        const section = document.getElementById("contact");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    });
</script>

<section id="contact" class="relative py-24 px-4 bg-[#0a0a0a]">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#6366F1]/5 rounded-full blur-[150px]"></div>
    </div>
    
    <!-- Grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto relative z-10">
        <div class="text-center mb-16">
            <div 
                in:fly={{ y: 20, duration: 600 }}
                class="inline-block px-4 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-sm font-medium tracking-wider mb-4"
            >
                CONTACT
            </div>
            <h2 
                in:fly={{ y: 20, duration: 600, delay: 100 }}
                class="text-4xl md:text-5xl font-bold text-white mb-4"
            >
                Get In Touch
            </h2>
            <p 
                in:fly={{ y: 20, duration: 600, delay: 150 }}
                class="text-gray-500 max-w-xl mx-auto"
            >
                Ready to turn your ideas into reality? Let's connect and build something amazing together.
            </p>
            <div 
                in:fly={{ y: 20, duration: 600, delay: 200 }}
                class="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent mx-auto rounded-full mt-6"
            ></div>
        </div>
        
        <!-- Contact Cards Grid -->
        {#if inView}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <a 
                    in:fly={{ y: 30, duration: 600, delay: 250, easing: cubicOut }}
                    href="mailto:dev.arjunsk@gmail.com"
                    class="group bg-white/5 rounded-2xl p-8 text-center border border-white/5 hover:border-[#6366F1]/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2"
                >
                    <div class="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366F1]/20 transition-colors">
                        <Mail class="w-6 h-6 text-[#6366F1]" />
                    </div>
                    <h3 class="font-semibold text-white text-lg mb-2">Email</h3>
                    <p class="text-gray-500 text-sm">dev.arjunsk@gmail.com</p>
                </a>

                <a 
                    in:fly={{ y: 30, duration: 600, delay: 350, easing: cubicOut }}
                    href="tel:+919020302550"
                    class="group bg-white/5 rounded-2xl p-8 text-center border border-white/5 hover:border-[#6366F1]/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2"
                >
                    <div class="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366F1]/20 transition-colors">
                        <Phone class="w-6 h-6 text-[#6366F1]" />
                    </div>
                    <h3 class="font-semibold text-white text-lg mb-2">Phone</h3>
                    <p class="text-gray-500 text-sm">+91 9020302550</p>
                </a>

                <a 
                    in:fly={{ y: 30, duration: 600, delay: 450, easing: cubicOut }}
                    href="https://linkedin.com/in/arjunsk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group bg-white/5 rounded-2xl p-8 text-center border border-white/5 hover:border-[#6366F1]/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2"
                >
                    <div class="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366F1]/20 transition-colors">
                        <Linkedin class="w-6 h-6 text-[#6366F1]" />
                    </div>
                    <h3 class="font-semibold text-white text-lg mb-2">LinkedIn</h3>
                    <p class="text-gray-500 text-sm">linkedin.com/in/arjunsk</p>
                </a>
            </div>
        {/if}
        
        <!-- CTA -->
        {#if inView}
            <div 
                in:fly={{ y: 20, duration: 600, delay: 550 }}
                class="text-center"
            >
                <a 
                    href="mailto:dev.arjunsk@gmail.com"
                    class="group inline-flex items-center gap-3 px-8 py-4 bg-[#6366F1] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105"
                >
                    Start a Project
                    <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        {/if}
    </div>
</section>
