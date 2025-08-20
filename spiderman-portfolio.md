# 🕸️ Spider-Man Portfolio with SvelteKit & Tailwind CSS

## 🚀 Project Setup

### Initialize SvelteKit Project
```bash
npm create svelte@latest spiderman-portfolio
cd spiderman-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms
npm install lucide-svelte
npx tailwindcss init -p
```

### Configure Tailwind (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'spider-red': '#FF0000',
        'spider-blue': '#0000FF',
        'spider-dark-red': '#CC0000',
        'spider-dark-blue': '#000080',
        'web-gray': '#E0E0E0',
      },
      fontFamily: {
        'comic': ['Bangers', 'cursive'],
        'comic-neue': ['Comic Neue', 'cursive'],
      },
      animation: {
        'swing': 'swing 2s ease-in-out infinite',
        'dangle': 'dangle 1.5s ease-in-out infinite',
        'float': 'float 20s infinite ease-in-out',
        'heroText': 'heroText 2s ease-out',
        'webBounce': 'webBounce 0.6s ease',
        'spiderSense': 'spiderSense 0.5s ease infinite',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        dangle: {
          '0%, 100%': { transform: 'translateX(-50%) rotate(-10deg)' },
          '50%': { transform: 'translateX(-50%) rotate(10deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        heroText: {
          'from': {
            transform: 'scale(0) rotate(-180deg)',
            opacity: '0',
          },
          'to': {
            transform: 'scale(1) rotate(0)',
            opacity: '1',
          },
        },
        webBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-20px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        spiderSense: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.3) rotate(180deg)' },
        },
      },
      backgroundImage: {
        'web-pattern': `radial-gradient(circle at 20% 50%, transparent 30%, rgba(255,255,255,0.1) 30.5%),
                        radial-gradient(circle at 80% 50%, transparent 30%, rgba(255,255,255,0.1) 30.5%)`,
      },
    },
  },
  plugins: [],
}
```

### Add Fonts to `app.html`
```html
<!DOCTYPE html>
<html lang="en" class="%sveltekit.theme%">
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%sveltekit.assets%/favicon.png" />
  <meta name="viewport" content="width=device-width" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet">
  %sveltekit.head%
</head>
<body data-sveltekit-preload-data="hover">
  <div style="display: contents">%sveltekit.body%</div>
</body>
</html>
```

## 🖱️ Custom Spider Cursor Component

### `src/lib/components/SpiderCursor.svelte`
```svelte
<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  
  let mounted = false;
  let mouseX = spring(0, { stiffness: 0.1, damping: 0.25 });
  let mouseY = spring(0, { stiffness: 0.1, damping: 0.25 });
  
  onMount(() => {
    mounted = true;
    
    const handleMouseMove = (e) => {
      $mouseX = e.clientX;
      $mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

{#if mounted}
  <div 
    class="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
    style="transform: translate({$mouseX}px, 0)"
  >
    <!-- Web line -->
    <div 
      class="absolute w-0.5 bg-gradient-to-b from-white/80 to-white/20 origin-top animate-swing"
      style="height: {$mouseY}px"
    />
    <!-- Spider -->
    <div 
      class="absolute text-2xl animate-dangle"
      style="top: {$mouseY}px; left: -12px"
    >
      🕷️
    </div>
  </div>
{/if}

<style>
  :global(body) {
    cursor: none;
  }
  
  @media (max-width: 768px) {
    :global(body) {
      cursor: auto;
    }
  }
</style>
```

## 🕷️ Hero Section Component

### `src/lib/components/HeroSection.svelte`
```svelte
<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  
  let visible = false;
  
  onMount(() => {
    visible = true;
  });
</script>

<header class="relative min-h-screen bg-gradient-to-br from-spider-red to-spider-blue overflow-hidden">
  <!-- Web Pattern Background -->
  <div class="absolute inset-0 bg-web-pattern bg-[length:100px_100px] opacity-20 animate-float" />
  
  <!-- Hero Content -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
    {#if visible}
      <div in:scale={{ duration: 2000, start: 0, opacity: 0 }}>
        <h1 class="text-6xl md:text-8xl font-comic text-white text-center animate-heroText">
          <span class="inline-block">🕷️</span>
          <span class="inline-block drop-shadow-[3px_3px_0_#CC0000] 
                       md:drop-shadow-[6px_6px_0_#000080]">
            Your Name
          </span>
          <span class="inline-block">🕸️</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-white text-center mt-6 font-comic-neue">
          Web Developer • Problem Solver • Code Slinger
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex gap-4 justify-center mt-8">
          <button class="px-8 py-3 bg-white text-spider-red font-bold rounded-full 
                         hover:scale-110 transition-transform duration-300 
                         shadow-lg hover:shadow-2xl">
            View Projects
          </button>
          <button class="px-8 py-3 bg-spider-red text-white font-bold rounded-full 
                         border-2 border-white hover:scale-110 transition-transform 
                         duration-300 shadow-lg hover:shadow-2xl">
            Contact Me
          </button>
        </div>
      </div>
    {/if}
  </div>
  
  <!-- Animated Web Lines -->
  <svg class="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 100">
    <path
      d="M0,50 Q300,0 600,50 T1200,50"
      stroke="white"
      stroke-width="2"
      fill="none"
      opacity="0.3"
      class="animate-pulse"
    />
  </svg>
</header>
```

## 🕸️ About Section Component

### `src/lib/components/AboutSection.svelte`
```svelte
<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  
  let skills = [
    { name: 'SvelteKit', level: 90 },
    { name: 'Tailwind', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
  ];
  
  let inView = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView = true;
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  });
</script>

<section id="about" class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <span class="text-6xl">🕸️</span>
      <h2 class="text-4xl md:text-5xl font-comic text-spider-red dark:text-spider-blue mt-4">
        About Your Friendly Neighborhood Developer
      </h2>
    </div>
    
    <!-- Content Grid -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Bio -->
      <div class="space-y-4">
        <p class="text-lg leading-relaxed">
          With great code comes great responsibility. I swing through the web, 
          building amazing digital experiences that stick!
        </p>
        <p class="text-lg leading-relaxed">
          Just like Spider-Man protects New York, I protect your web presence 
          with clean code, responsive design, and blazing-fast performance.
        </p>
      </div>
      
      <!-- Skills Web -->
      <div class="relative">
        {#if inView}
          <div class="grid grid-cols-2 gap-6">
            {#each skills as skill, i}
              <div 
                in:fly={{ y: 20, delay: i * 100, duration: 500 }}
                class="relative group"
              >
                <div class="bg-white dark:bg-gray-800 rounded-full p-6 text-center 
                            border-4 border-spider-red hover:border-spider-blue 
                            transition-all duration-300 hover:scale-110 
                            shadow-lg hover:shadow-2xl">
                  <div class="font-bold text-lg">{skill.name}</div>
                  <div class="text-3xl font-comic text-spider-red mt-2">
                    {skill.level}%
                  </div>
                </div>
                
                <!-- Web connections -->
                {#if i < skills.length - 1}
                  <div class="absolute top-1/2 left-full w-12 h-0.5 
                              bg-gradient-to-r from-spider-red to-transparent 
                              hidden md:block" />
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
```

## 🔨 Projects Section Component

### `src/lib/components/ProjectCard.svelte`
```svelte
<script>
  export let title = '';
  export let description = '';
  export let image = '';
  export let liveUrl = '';
  export let githubUrl = '';
  export let tags = [];
  
  import { ExternalLink, Github } from 'lucide-svelte';
</script>

<article class="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden 
                border-4 border-spider-red hover:border-spider-blue 
                transition-all duration-300 hover:-translate-y-2 
                shadow-xl hover:shadow-2xl">
  
  <!-- Web Pattern Overlay -->
  <div class="absolute -top-1/2 -right-1/2 w-full h-full 
              bg-web-pattern bg-[length:50px_50px] opacity-5 
              group-hover:opacity-10 transition-opacity duration-300" />
  
  <!-- Image -->
  {#if image}
    <div class="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        class="w-full h-full object-cover group-hover:scale-110 
               transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  {/if}
  
  <!-- Content -->
  <div class="relative p-6">
    <h3 class="text-2xl font-comic text-spider-red dark:text-spider-blue mb-3">
      {title}
    </h3>
    
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {description}
    </p>
    
    <!-- Tags -->
    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <span class="px-3 py-1 bg-spider-red/10 text-spider-red 
                       rounded-full text-sm font-semibold">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
    
    <!-- Action Buttons -->
    <div class="flex gap-3">
      {#if liveUrl}
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-2 px-4 
                 bg-spider-red text-white rounded-full font-bold 
                 hover:bg-spider-dark-red transition-colors duration-300 
                 hover:scale-105 transform"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      {/if}
      
      {#if githubUrl}
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-2 px-4 
                 bg-spider-blue text-white rounded-full font-bold 
                 hover:bg-spider-dark-blue transition-colors duration-300 
                 hover:scale-105 transform"
        >
          <Github size={18} />
          GitHub
        </a>
      {/if}
    </div>
  </div>
</article>
```

### `src/lib/components/ProjectsSection.svelte`
```svelte
<script>
  import ProjectCard from './ProjectCard.svelte';
  
  const projects = [
    {
      title: 'Web Shooter App',
      description: 'A dynamic task management app that catches all your todos',
      image: '/project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      tags: ['SvelteKit', 'Tailwind', 'Supabase']
    },
    {
      title: 'Daily Bugle Blog',
      description: 'A modern blog platform with real-time updates',
      image: '/project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      tags: ['React', 'Next.js', 'MDX']
    },
    {
      title: 'Spider Tracker',
      description: 'Analytics dashboard with web-like data visualization',
      image: '/project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      tags: ['Vue', 'D3.js', 'Firebase']
    }
  ];
</script>

<section class="py-20 px-4 bg-white dark:bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-comic text-center text-spider-red 
               dark:text-spider-blue mb-12">
      Web-Slinging Projects
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </div>
</section>
```

## 📧 Contact Section Component

### `src/lib/components/ContactSection.svelte`
```svelte
<script>
  import { Send } from 'lucide-svelte';
  
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  let sending = false;
  
  async function handleSubmit(e) {
    e.preventDefault();
    sending = true;
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      sending = false;
      formData = { name: '', email: '', message: '' };
    }, 2000);
  }
</script>

<section class="py-20 px-4 bg-gradient-to-br from-spider-blue to-spider-red">
  <div class="max-w-2xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-comic text-center text-white mb-12">
      Signal the Web-Signal
    </h2>
    
    <form 
      on:submit={handleSubmit}
      class="bg-white rounded-3xl p-8 shadow-2xl 
             border-4 border-white relative overflow-hidden"
    >
      <!-- Decorative web -->
      <div class="absolute -top-10 -right-10 text-8xl opacity-10">🕸️</div>
      
      <div class="space-y-6 relative z-10">
        <!-- Name Input -->
        <div>
          <input
            type="text"
            bind:value={formData.name}
            placeholder="Your Name"
            required
            class="w-full px-6 py-4 text-lg border-3 border-spider-blue 
                   rounded-2xl focus:border-spider-red focus:outline-none 
                   focus:ring-4 focus:ring-spider-red/20 
                   transition-all duration-300"
          />
        </div>
        
        <!-- Email Input -->
        <div>
          <input
            type="email"
            bind:value={formData.email}
            placeholder="Your Email"
            required
            class="w-full px-6 py-4 text-lg border-3 border-spider-blue 
                   rounded-2xl focus:border-spider-red focus:outline-none 
                   focus:ring-4 focus:ring-spider-red/20 
                   transition-all duration-300"
          />
        </div>
        
        <!-- Message Textarea -->
        <div>
          <textarea
            bind:value={formData.message}
            placeholder="Your Message"
            rows="5"
            required
            class="w-full px-6 py-4 text-lg border-3 border-spider-blue 
                   rounded-2xl focus:border-spider-red focus:outline-none 
                   focus:ring-4 focus:ring-spider-red/20 
                   transition-all duration-300 resize-none"
          />
        </div>
        
        <!-- Submit Button -->
        <button
          type="submit"
          disabled={sending}
          class="w-full py-4 bg-spider-red text-white font-comic text-xl 
                 rounded-full hover:bg-spider-dark-red 
                 transition-all duration-300 hover:scale-105 
                 disabled:opacity-50 disabled:cursor-not-allowed 
                 shadow-lg hover:shadow-2xl flex items-center 
                 justify-center gap-3"
        >
          <span class="text-2xl">🕷️</span>
          {sending ? 'Sending...' : 'Send Message'}
          <Send size={24} />
        </button>
      </div>
    </form>
  </div>
</section>
```

## 🌙 Dark Mode Toggle Component

### `src/lib/components/DarkModeToggle.svelte`
```svelte
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
         border-2 border-spider-red dark:border-spider-blue"
  aria-label="Toggle dark mode"
>
  {#if darkMode}
    <Sun class="w-6 h-6 text-yellow-500" />
  {:else}
    <Moon class="w-6 h-6 text-spider-blue" />
  {/if}
</button>
```

## 🎯 Main Layout (`src/routes/+layout.svelte`)

```svelte
<script>
  import '../app.css';
  import SpiderCursor from '$lib/components/SpiderCursor.svelte';
  import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
</script>

<SpiderCursor />
<DarkModeToggle />

<main>
  <slot />
</main>
```

## 🏠 Home Page (`src/routes/+page.svelte`)

```svelte
<script>
  import HeroSection from '$lib/components/HeroSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<svelte:head>
  <title>Spider-Dev | Web Developer Portfolio</title>
  <meta name="description" content="Your friendly neighborhood web developer" />
</svelte:head>

<HeroSection />
<AboutSection />
<ProjectsSection />
<ContactSection />

<!-- Footer -->
<footer class="py-8 bg-gray-900 text-white text-center">
  <p class="text-lg font-comic-neue">
    Made with 🕷️ and ❤️ by Your Name
  </p>
  <p class="mt-2 opacity-75">
    © 2024 - With great code comes great responsibility
  </p>
</footer>
```

## 🎨 Global Styles (`src/app.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-gray-100 dark:bg-gray-900;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-spider-red rounded-full;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-spider-dark-red;
  }
}

@layer utilities {
  .border-3 {
    border-width: 3px;
  }
  
  .text-shadow-comic {
    text-shadow: 
      3px 3px 0 theme('colors.spider-dark-red'),
      6px 6px 0 theme('colors.spider-dark-blue'),
      9px 9px 20px rgba(0,0,0,0.5);
  }
}
```

## 📦 Additional Features to Add

### 1. Page Transitions (`src/routes/+layout.svelte`)
```svelte
<script>
  import { navigating } from '$app/stores';
  import { fade } from 'svelte/transition';
</script>

{#if $navigating}
  <div 
    transition:fade
    class="fixed inset-0 bg-spider-red/50 z-50 flex items-center justify-center"
  >
    <div class="text-6xl animate-bounce">🕷️</div>
  </div>
{/if}
```

### 2. Spider Sense Hover Effect (Add to any interactive element)
```svelte
<button class="relative group">
  <!-- Spider sense indicator -->
  <span class="absolute -top-2 -right-2 text-yellow-400 opacity-0 
                group-hover:opacity-100 group-hover:animate-spiderSense">
    ⚡
  </span>
  Click Me
</button>
```

### 3. Parallax Web Background Component
```svelte
<script>
  import { onMount } from 'svelte';
  
  let scrollY = 0;
  
  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div 
  class="fixed inset-0 pointer-events-none opacity-10"
  style="transform: translateY({scrollY * 0.5}px)"
>
  <svg class="w-full h-full">
    <!-- Add web pattern SVG here -->
  </svg>
</div>
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run preview
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
# Add netlify.toml
[build]
  command = "npm run build"
  publish = "build"
```

## 📱 Performance Optimizations

1. **Lazy Loading Images**: Use Svelte's `loading` prop
2. **Code Splitting**: SvelteKit handles this automatically
3. **Preload Fonts**: Already configured in `app.html`
4. **Reduce Animations on Mobile**: Use media queries in Tailwind
5. **Use WebP Images**: For better compression

## 🎯 SEO Enhancements

Add to `src/app.html`:
```html
<meta property="og:title" content="Spider-Dev Portfolio" />
<meta property="og:description" content="Your friendly neighborhood web developer" />
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

---

**Ready to build! 🕷️ Run `npm run dev` to start your Spider-Man portfolio!**