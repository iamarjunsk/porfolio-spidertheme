<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  
  let skills = [
    { name: 'React.js', level: 95 },
    { name: 'Vue.js', level: 90 },
    { name: 'Svelte', level: 80 },
    { name: 'Next.js', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
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
        <p class="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          With 3+ years of experience in web development, I've been crafting amazing digital experiences 
          using React.js, Vue.js, and modern web technologies. Just like Spider-Man protects New York, 
          I protect your web presence with clean code and blazing-fast performance.
        </p>
        <p class="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Specialized in creating dynamic, responsive applications with component-based architecture. 
          From 3D advertisement websites to admin panels, I bring ideas to life through innovative UI/UX design.
        </p>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border dark:border-gray-700">
          <h3 class="font-comic text-xl text-spider-red dark:text-spider-blue mb-3">Current Role</h3>
          <p class="text-gray-800 dark:text-gray-200"><strong>Web Developer</strong> at Spatium Offices Pvt Ltd</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">November 2024 - Present</p>
        </div>
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
                {#if i < skills.length - 1 && i % 2 === 0}
                  <div class="absolute top-1/2 left-full w-12 h-0.5 
                              bg-gradient-to-r from-spider-red to-transparent 
                              hidden md:block"></div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>