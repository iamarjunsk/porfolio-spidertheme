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

<section id="about" class="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-web-silver dark:from-deep-space dark:to-gray-900 overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute top-10 left-10 w-32 h-32 bg-spider-red/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-10 right-10 w-40 h-40 bg-spider-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4">
        <span class="text-6xl">🕸️</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-comic bg-gradient-to-r from-spider-red via-spider-blue to-spider-red bg-clip-text text-transparent mt-4">
        About Your Friendly Neighborhood Developer
      </h2>
    </div>
    
    <!-- Content Grid -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Bio -->
      <div class="space-y-6">
        <div class="bg-white/20 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg">
          <p class="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            With <span class="text-spider-red font-bold">3+ years</span> of experience in web development, I've been crafting amazing digital experiences 
            using React.js, Vue.js, and modern web technologies. Just like Spider-Man protects New York, 
            I protect your web presence with clean code and blazing-fast performance.
          </p>
        </div>
        
        <div class="bg-white/20 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg">
          <p class="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            Specialized in creating <span class="text-spider-blue font-bold">dynamic, responsive applications</span> with component-based architecture. 
            From 3D advertisement websites to admin panels, I bring ideas to life through innovative UI/UX design.
          </p>
        </div>
        
        <div class="bg-gradient-to-r from-spider-red/10 to-spider-blue/10 backdrop-blur-sm p-8 rounded-2xl border border-spider-red/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="font-comic text-xl bg-gradient-to-r from-spider-red to-spider-blue bg-clip-text text-transparent mb-3">Current Role</h3>
          <p class="text-gray-800 dark:text-gray-200"><strong>Web Developer</strong> at Spatium Offices Pvt Ltd</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">November 2024 - Present</p>
        </div>
      </div>
      
      <!-- Skills Web -->
      <div class="relative">
        {#if inView}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {#each skills as skill, i}
              <div 
                in:fly={{ y: 20, delay: i * 100, duration: 500 }}
                class="relative group"
              >
                <div class="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center 
                            border border-white/30 hover:border-spider-red 
                            transition-all duration-300 hover:scale-110 hover:rotate-2
                            shadow-lg hover:shadow-2xl hover:shadow-spider-red/25">
                  <div class="font-bold text-lg text-gray-800 dark:text-white">{skill.name}</div>
                  <div class="text-3xl font-comic bg-gradient-to-r from-spider-red to-spider-blue bg-clip-text text-transparent mt-2">
                    {skill.level}%
                  </div>
                  <div class="w-full bg-gray-200/30 rounded-full h-2 mt-3">
                    <div 
                      class="bg-gradient-to-r from-spider-red to-spider-blue h-2 rounded-full transition-all duration-1000"
                      style="width: {skill.level}%"
                    ></div>
                  </div>
                </div>
                
                <!-- Web connections -->
                {#if i < skills.length - 1 && i % 2 === 0}
                  <div class="absolute top-1/2 left-full w-12 h-0.5 
                              bg-gradient-to-r from-spider-red to-transparent 
                              hidden md:block animate-pulse"></div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>