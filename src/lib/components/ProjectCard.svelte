<script lang="ts">
    export let title = "";
    export let description = "";
    export let image = "";
    export let liveUrl = "";
    export let githubUrl = "";
    export let tags: string[] = [];

    import { ExternalLink, Github } from "lucide-svelte";
    import tilt from "$lib/actions/tilt";
</script>

<article
    use:tilt={{ max: 10, scale: 1.02, glare: true, "max-glare": 0.3 }}
    class="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden
                border border-white/10 hover:border-spider-red/30 hover:bg-white/10
                shadow-lg hover:shadow-xl hover:shadow-spider-red/10
                h-full flex flex-col"
>
    <!-- Web Pattern Overlay -->
    <div
        class="absolute -top-1/2 -right-1/2 w-full h-full
              bg-web-pattern bg-[length:50px_50px] opacity-5
              group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
    ></div>

    <!-- Image -->
    {#if image}
        <div class="relative h-48 overflow-hidden flex-shrink-0">
            <img
                src={image}
                alt={title}
                class="w-full h-full object-cover group-hover:scale-110
               transition-transform duration-500"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
        </div>
    {/if}

    <!-- Content -->
    <div class="relative p-6 flex flex-col flex-1 transform-style-3d">
        <h3
            class="text-2xl font-comic bg-gradient-to-r from-spider-red to-spider-blue bg-clip-text text-transparent mb-3 translate-z-10"
        >
            {title}
        </h3>

        <p
            class="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed flex-1 translate-z-5"
        >
            {description}
        </p>

        <!-- Tags -->
        {#if tags.length > 0}
            <div class="flex flex-wrap gap-2 mb-6 translate-z-5">
                {#each tags as tag}
                    <span
                        class="px-3 py-1 bg-gradient-to-r from-spider-red/10 to-spider-blue/10
                       text-spider-red dark:text-white rounded-full text-sm font-semibold
                       border border-spider-red/20 hover:border-spider-red/40
                       transition-colors duration-300"
                    >
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}

        <!-- Action Buttons -->
        <div class="flex gap-3 mt-auto translate-z-10">
            {#if liveUrl && liveUrl !== "#"}
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 py-2 px-4
                 bg-spider-red text-white rounded-full font-bold text-sm
                 hover:bg-red-700 transition-colors duration-300
                 hover:scale-105 transform shadow-lg hover:shadow-spider-red/50"
                >
                    <ExternalLink size={16} />
                    Live Demo
                </a>
            {/if}

            {#if githubUrl && githubUrl !== "#"}
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 py-2 px-4
                 bg-spider-blue text-white rounded-full font-bold text-sm
                 hover:bg-blue-700 transition-colors duration-300
                 hover:scale-105 transform shadow-lg hover:shadow-spider-blue/50"
                >
                    <Github size={16} />
                    GitHub
                </a>
            {/if}
        </div>
    </div>
</article>

<style>
    .transform-style-3d {
        transform-style: preserve-3d;
    }
    .translate-z-5 {
        transform: translateZ(20px);
    }
    .translate-z-10 {
        transform: translateZ(40px);
    }
</style>
