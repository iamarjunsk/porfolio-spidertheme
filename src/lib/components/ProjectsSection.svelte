<script>
    import ProjectCard from "./ProjectCard.svelte";

    const projects = [
        {
            title: "Luxora Shop",
            description:
                "A modern e-commerce application focusing on seamless user experience. Features a premium UI, cart management, and smooth checkout flow.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "https://luxora-shop.vercel.app",
            githubUrl: "#",
            tags: ["Nuxt.js", "Pinia", "Tailwind CSS", "Razorpay"],
        },
        {
            title: "KBN Board",
            description:
                "A collaborative Kanban project management tool similar to Trello/Jira. Supports drag-and-drop tasks, column management, and real-time updates.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "https://kbn-board.netlify.app",
            githubUrl: "#",
            tags: ["Vue.js", "Pinia", "Drag & Drop", "Netlify"],
        },
        {
            title: "Notepad App",
            description:
                "A lightweight, functional note-taking application with local storage support, markdown preview, and organization features.",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "https://notepad-a6f81.web.app",
            githubUrl: "#",
            tags: ["React.js", "Firebase", "PWA", "CSS3"],
        },
        {
            title: "Apex 3D Advertisement",
            description:
                "An immersive 3D advertisement website built with Vue.js and Three.js. Features admin panel for managing sponsors and 3D content.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "#",
            githubUrl: "#",
            tags: ["Vue.js", "Three.js", "Tailwind CSS", "Pinia"],
        },
        {
            title: "Spatium Admin Panel",
            description:
                "Scalable Single Page Application (SPA) for facility management. Features resilient API infrastructure and high-performance QR scanner.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "#",
            githubUrl: "#",
            tags: ["React.js", "Redux Toolkit", "Axios", "Vite"],
        },
        {
            title: "NeoVision OTT",
            description:
                "Video streaming platform with frame-by-frame rendering and scene detection. Custom video player implementation.",
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop",
            liveUrl: "#",
            githubUrl: "#",
            tags: ["Vanilla JS", "Video API", "Tailwind", "Performance"],
        },
    ];
</script>

<section id="projects" class="relative py-24 px-4 bg-[#0a0a0a] overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
        <div
            class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spider-red/50 to-transparent"
        ></div>
        <div
            class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spider-blue/50 to-transparent"
        ></div>
        <div
            class="absolute top-20 right-10 w-96 h-96 bg-spider-red/5 rounded-full blur-[120px] animate-pulse"
        ></div>
        <div
            class="absolute bottom-20 left-10 w-96 h-96 bg-spider-blue/5 rounded-full blur-[120px] animate-pulse delay-500"
        ></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-20">
            <div
                class="inline-block p-4 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
                <span class="text-5xl">💻</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-comic text-white mb-6">
                Web-Slinging Projects
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto text-lg">
                A collection of applications built with modern technologies and
                a touch of creativity.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project}
                <div class="group relative h-full">
                    <!-- Card Glow -->
                    <div
                        class="absolute -inset-0.5 bg-gradient-to-r from-spider-red to-spider-blue rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"
                    ></div>

                    <ProjectCard {...project} />
                </div>
            {/each}
        </div>
    </div>
</section>
