<script lang="ts">
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { ExternalLink, Github } from 'lucide-svelte';

    let inView = false;

    const projects = [
        {
            title: "USC Race & Equity Center",
            description: "Research-driven platform for USC advancing racial equity through data, policy analysis, and campus climate assessments across 1.4M+ students.",
            image: "/usc-race-project.png",
            liveUrl: "https://race.usc.edu",
            githubUrl: "#",
            tags: ["Angular", "SCSS", "TypeScript"],
        },
        {
            title: "Luxora Shop",
            description: "A modern e-commerce application focusing on seamless user experience. Features premium UI, cart management, and smooth checkout flow.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "https://luxora-shop.vercel.app",
            githubUrl: "#",
            tags: ["Nuxt.js", "Pinia", "Tailwind CSS", "Razorpay"],
        },
        {
            title: "KBN Board",
            description: "A collaborative Kanban project management tool similar to Trello/Jira. Supports drag-and-drop tasks and real-time updates.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "https://kbn-board.netlify.app",
            githubUrl: "#",
            tags: ["Vue.js", "Pinia", "Drag & Drop", "Netlify"],
        },
        {
            title: "Notepad App",
            description: "A lightweight note-taking application with local storage support, markdown preview, and organization features.",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "https://notepad-a6f81.web.app",
            githubUrl: "#",
            tags: ["React.js", "Firebase", "PWA", "CSS3"],
        },
        {
            title: "Apex 3D Advertisement",
            description: "An immersive 3D advertisement website built with Vue.js and Three.js. Features admin panel for managing sponsors.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "#",
            githubUrl: "#",
            tags: ["Vue.js", "Three.js", "Tailwind CSS", "Pinia"],
        },
        {
            title: "Spatium Admin Panel",
            description: "Scalable SPA for facility management with resilient API infrastructure and high-performance QR scanner.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "#",
            githubUrl: "#",
            tags: ["React.js", "Redux Toolkit", "Axios", "Vite"],
        },
        {
            title: "NeoVision OTT",
            description: "Video streaming platform with frame-by-frame rendering and scene detection. Custom video player implementation.",
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "#",
            githubUrl: "#",
            tags: ["Vanilla JS", "Video API", "Tailwind", "Performance"],
        },
    ];

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    inView = true;
                }
            },
            { threshold: 0.1 },
        );

        const section = document.getElementById("projects");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    });
</script>

<section id="projects" class="relative py-24 px-4 bg-[#0a0a0a]">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-0 w-1/2 h-1/2 bg-[#6366F1]/5 rounded-full blur-[150px]"></div>
        <div class="absolute bottom-20 left-0 w-1/2 h-1/2 bg-[#6366F1]/3 rounded-full blur-[150px]"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
            <div 
                in:fly={{ y: 20, duration: 600 }}
                class="inline-block px-4 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-sm font-medium tracking-wider mb-4"
            >
                PROJECTS
            </div>
            <h2 
                in:fly={{ y: 20, duration: 600, delay: 100 }}
                class="text-4xl md:text-5xl font-bold text-white mb-4"
            >
                Featured Work
            </h2>
            <div 
                in:fly={{ y: 20, duration: 600, delay: 150 }}
                class="w-16 h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent mx-auto rounded-full"
            ></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#if inView}
                {#each projects as project, i}
                    <article 
                        in:fly={{ y: 30, duration: 600, delay: i * 100, easing: cubicOut }}
                        class="group bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-[#6366F1]/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2"
                    >
                        {#if project.image}
                            <div class="relative h-48 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        {/if}
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-[#6366F1] transition-colors">{project.title}</h3>
                            <p class="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                {#each project.tags as tag}
                                    <span class="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400 group-hover:text-white transition-colors">{tag}</span>
                                {/each}
                            </div>
                            <div class="flex gap-4">
                                {#if project.liveUrl && project.liveUrl !== '#'}
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center gap-1.5 text-sm text-[#6366F1] hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                        Live
                                    </a>
                                {/if}
                                {#if project.githubUrl && project.githubUrl !== '#'}
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
                                    >
                                        <Github size={14} />
                                        Code
                                    </a>
                                {/if}
                            </div>
                        </div>
                    </article>
                {/each}
            {/if}
        </div>
    </div>
</section>
