<script lang="ts">
    import { config } from '$lib/data/portfolio';

    import PencilHero from "$lib/components/pencil/PencilHero.svelte";
    import PencilAbout from "$lib/components/pencil/PencilAbout.svelte";
    import PencilExperience from "$lib/components/pencil/PencilExperience.svelte";
    import PencilProjects from "$lib/components/pencil/PencilProjects.svelte";
    import PencilContact from "$lib/components/pencil/PencilContact.svelte";
    import PencilFooter from "$lib/components/pencil/PencilFooter.svelte";
</script>

<svelte:head>
    <title>{config.seo.title}</title>
    <meta name="description" content={config.seo.description} />
    <meta name="keywords" content={config.seo.keywords} />
</svelte:head>

<PencilHero />
<PencilAbout />
<PencilExperience />
<PencilProjects />
<PencilContact />
<PencilFooter />

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>
