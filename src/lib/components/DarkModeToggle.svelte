<script>
  import { onMount } from 'svelte';
  import { Moon, Sun } from 'lucide-svelte';
  
  let darkMode = false;
  
  onMount(() => {
    // Check for saved preference or default to light mode
    darkMode = localStorage.getItem('darkMode') === 'true' || 
               window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme();
  });
  
  function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode.toString());
    updateTheme();
  }
  
  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<button
  on:click={toggleDarkMode}
  class="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 
         rounded-full shadow-lg hover:shadow-2xl 
         transition-all duration-300 hover:scale-110 
         border-2 border-spider-blue dark:border-spider-red"
  aria-label="Toggle dark mode"
>
  {#if darkMode}
    <Sun class="w-6 h-6 text-yellow-500" />
  {:else}
    <Moon class="w-6 h-6 text-spider-red" />
  {/if}
</button>