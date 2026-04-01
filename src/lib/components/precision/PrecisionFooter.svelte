<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    let visible = false;

    onMount(() => {
        setTimeout(() => visible = true, 500);
    });
</script>

<footer class="py-12 bg-[#050505] text-center border-t border-white/5">
    {#if visible}
        <div in:fly={{ y: 20, duration: 600 }}>
            <p class="text-gray-500 mb-2">
                Made with <span class="text-[#6366F1]">♥</span> by <span class="text-white font-medium">Arjun S K</span>
            </p>
            <p class="text-gray-600 text-sm">© 2025 - Web Developer Portfolio</p>
        </div>
    {/if}
</footer>
