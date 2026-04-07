<script lang="ts">
    import { onMount } from "svelte";
    import ParallaxLayer from "./ParallaxLayer.svelte";
    import { Github, Star, GitFork, BookOpen } from "lucide-svelte";

    let repos: any[] = [];
    let loading = true;

    onMount(async () => {
        try {
            const res = await fetch("https://api.github.com/users/iamarjunsk/repos?sort=updated&per_page=6");
            if (res.ok) {
                const data = await res.json();
                repos = data.filter((r: any) => !r.fork);
            }
        } catch (e) {
            console.error(e);
        } finally {
            loading = false;
        }
    });
</script>

<section id="github" class="relative py-24 px-4 bg-[#050505] overflow-hidden border-t border-white/5">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-spider-red/30 to-transparent"></div>
        <div class="absolute top-20 left-10 w-64 h-64 bg-spider-red/5 rounded-full blur-[100px] animate-pulse"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
            <div class="inline-block p-4 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Github size={32} class="text-white" />
            </div>
            <h2 class="text-4xl md:text-5xl font-comic text-white mb-6">
                More on GitHub
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto text-lg">
                Explore my open-source repositories and latest coding experiments.
            </p>
        </div>

        <ParallaxLayer speed={0.3}>
            {#if loading}
                <div class="flex justify-center py-12">
                    <div class="w-10 h-10 border-4 border-spider-red border-t-transparent rounded-full animate-spin"></div>
                </div>
            {:else}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each repos as repo}
                        <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="group relative h-full block bg-white/[0.03] rounded-2xl p-6 border border-white/5 hover:border-spider-red/50 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-2"
                        >
                            <div class="absolute -inset-0.5 bg-gradient-to-r from-spider-red to-spider-blue rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                            
                            <div class="relative z-10 flex flex-col h-full">
                                <div class="flex items-start justify-between mb-4">
                                    <h3 class="text-xl font-bold text-white group-hover:text-spider-red transition-colors flex items-center gap-2">
                                        <BookOpen size={20} class="text-spider-red" />
                                        {repo.name}
                                    </h3>
                                </div>
                                <p class="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {repo.description || "No description provided."}
                                </p>
                                <div class="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                                    {#if repo.language}
                                        <div class="flex items-center gap-1.5 text-xs text-gray-500">
                                            <span class="w-2.5 h-2.5 rounded-full bg-spider-red"></span>
                                            {repo.language}
                                        </div>
                                    {/if}
                                    <div class="flex items-center gap-1.5 text-xs text-gray-500">
                                        <Star size={14} />
                                        {repo.stargazers_count}
                                    </div>
                                    <div class="flex items-center gap-1.5 text-xs text-gray-500">
                                        <GitFork size={14} />
                                        {repo.forks_count}
                                    </div>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
                
                <div class="text-center mt-12">
                    <a 
                        href="https://github.com/iamarjunsk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-spider-red hover:text-white text-white rounded-full font-medium transition-all duration-300 border border-white/10 hover:border-transparent hover:shadow-[0_0_20px_rgba(230,0,0,0.4)]"
                    >
                        <Github size={18} />
                        View All Repositories
                    </a>
                </div>
            {/if}
        </ParallaxLayer>
    </div>
</section>
