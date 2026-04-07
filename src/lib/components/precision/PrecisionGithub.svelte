<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { Github, Star, GitFork, BookOpen, ExternalLink } from "lucide-svelte";

    let inView = false;
    let repos: any[] = [];
    let loading = true;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    inView = true;
                }
            },
            { threshold: 0.1 },
        );

        const section = document.getElementById("precision-github");
        if (section) observer.observe(section);

        const loadRepos = async () => {
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
        };

        loadRepos();

        return () => observer.disconnect();
    });
</script>

<section id="precision-github" class="relative py-24 px-4 bg-[#0a0a0a] border-t border-white/5">
    <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <div class="inline-block px-4 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-sm font-medium tracking-wider mb-4">
                    OPEN SOURCE
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-white">
                    GitHub Projects
                </h2>
            </div>
            
            <a 
                href="https://github.com/iamarjunsk" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
                View full profile <ExternalLink size={14} />
            </a>
        </div>

        {#if loading}
            <div class="flex justify-center py-12">
                <div class="w-8 h-8 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin"></div>
            </div>
        {:else if inView}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each repos as repo, i}
                    <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        in:fly={{ y: 30, duration: 600, delay: i * 50, easing: cubicOut }}
                        class="group bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#6366F1]/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 block"
                    >
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-lg font-bold text-white group-hover:text-[#6366F1] transition-colors flex items-center gap-2">
                                <BookOpen size={18} class="text-[#6366F1]" />
                                {repo.name}
                            </h3>
                        </div>
                        <p class="text-gray-500 text-sm mb-6 line-clamp-2 min-h-[40px]">
                            {repo.description || "No description provided."}
                        </p>
                        <div class="flex items-center gap-4 mt-auto">
                            {#if repo.language}
                                <div class="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition-colors">
                                    <span class="w-2 h-2 rounded-full bg-[#6366F1]"></span>
                                    {repo.language}
                                </div>
                            {/if}
                            <div class="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition-colors">
                                <Star size={14} />
                                {repo.stargazers_count}
                            </div>
                            <div class="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition-colors">
                                <GitFork size={14} />
                                {repo.forks_count}
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</section>
