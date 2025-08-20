<script>
  import ProjectCard from './ProjectCard.svelte';
  
  const projects = [
    {
      title: 'Visitor Management System (VMS)',
      description: 'Enterprise facility management platform with multi-tenant architecture. Features OTP authentication, real-time visitor tracking, digital pass system, and comprehensive CRUD operations for facilities, companies, and meeting rooms with hierarchical data management.',
      image: '',
      liveUrl: '#',
      githubUrl: '#',
      tags: ['React.js', 'Multi-tenant SaaS', 'State Management', 'REST APIs', 'Enterprise App']
    },
    {
      title: 'Apex 3D Advertisement',
      description: 'An immersive 3D advertisement website built with Vue.js, Tailwind CSS and Three.js. Features admin panel for managing sponsors and 3D content with Pinia state management.',
      image: '',
      liveUrl: '#',
      githubUrl: '#',
      tags: ['Vue.js', 'Three.js', 'Tailwind CSS', 'Pinia', 'Axios']
    },
    {
      title: 'MyGenie Admin Panel',
      description: 'Feature-rich admin panel crafted with Next.js and Tailwind CSS. Includes data visualization with Chart.js, API integrations, and responsive design.',
      image: '',
      liveUrl: '#',
      githubUrl: '#',
      tags: ['Next.js', 'Tailwind CSS', 'Chart.js', 'Axios']
    },
    {
      title: 'Jio Events Platform',
      description: 'Event management web application with React.js featuring dynamic image rendering, facial detection, and specialized pages for event creators and clients.',
      image: '',
      liveUrl: '#',
      githubUrl: '#',
      tags: ['React.js', 'Bootstrap', 'SASS/SCSS', 'Facial Detection']
    },
    {
      title: 'Indomie Fan Club Admin',
      description: 'Admin interface built with React.js and Material UI featuring drag-and-drop functionality, user-based routes, and seamless backend integration.',
      image: '',
      liveUrl: '#',
      githubUrl: '#',
      tags: ['React.js', 'Material UI', 'SoftUI', 'SASS/SCSS']
    },
    {
      title: 'NeoVision OTT Platform',
      description: 'Video streaming platform with advanced features including scene detection, custom video player with frame-by-frame navigation, and bookmark functionality.',
      image: '',
      liveUrl: '#',
      githubUrl: '#',
      tags: ['Vanilla JavaScript', 'Tailwind CSS', 'Video Processing']
    }
  ];
</script>

<section id="projects" class="relative py-20 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-deep-space overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute top-20 right-10 w-36 h-36 bg-spider-red/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-20 left-10 w-44 h-44 bg-spider-blue/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  
  <div class="max-w-6xl mx-auto relative z-10">
    <div class="text-center mb-16">
      <div class="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4">
        <span class="text-6xl">💻</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-comic bg-gradient-to-r from-spider-red via-spider-blue to-spider-red bg-clip-text text-transparent">
        Web-Slinging Projects
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </div>
</section>