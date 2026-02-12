<script lang="ts">
  import { onMount } from 'svelte';
  
  interface SkillNode {
    id: string;
    name: string;
    x: number;
    y: number;
    category: 'frontend' | 'backend' | 'tools' | 'advanced';
    connections: string[];
  }
  
  const skills: SkillNode[] = [
    { id: 'react', name: 'React.js', x: 50, y: 20, category: 'frontend', connections: ['next', 'redux', 'ts'] },
    { id: 'vue', name: 'Vue.js', x: 80, y: 30, category: 'frontend', connections: ['nuxt', 'pinia'] },
    { id: 'svelte', name: 'SvelteKit', x: 20, y: 30, category: 'frontend', connections: ['ts'] },
    { id: 'next', name: 'Next.js', x: 65, y: 15, category: 'frontend', connections: ['react', 'ts'] },
    { id: 'nuxt', name: 'Nuxt.js', x: 90, y: 45, category: 'frontend', connections: ['vue'] },
    { id: 'ts', name: 'TypeScript', x: 35, y: 45, category: 'tools', connections: ['react', 'vue', 'svelte', 'next'] },
    { id: 'redux', name: 'Redux', x: 40, y: 10, category: 'frontend', connections: ['react'] },
    { id: 'pinia', name: 'Pinia', x: 85, y: 60, category: 'frontend', connections: ['vue'] },
    { id: 'tailwind', name: 'Tailwind', x: 15, y: 55, category: 'frontend', connections: ['ts'] },
    { id: 'three', name: 'Three.js', x: 25, y: 75, category: 'advanced', connections: ['ts', 'react'] },
    { id: 'node', name: 'Node.js', x: 60, y: 70, category: 'backend', connections: ['ts'] },
    { id: 'api', name: 'REST APIs', x: 75, y: 80, category: 'backend', connections: ['node'] },
    { id: 'git', name: 'Git', x: 45, y: 85, category: 'tools', connections: ['ts'] },
    { id: 'vite', name: 'Vite', x: 10, y: 80, category: 'tools', connections: ['ts'] },
  ];
  
  let hoveredSkill: string | null = null;
  let mouseX = 0;
  let mouseY = 0;
  let container: HTMLDivElement;
  
  const categoryColors = {
    frontend: '#ef4444',
    backend: '#3b82f6',
    tools: '#a855f7',
    advanced: '#10b981'
  };
  
  function getConnectedSkills(skillId: string): string[] {
    const skill = skills.find(s => s.id === skillId);
    return skill ? skill.connections : [];
  }
  
  function isConnected(skill1: string, skill2: string): boolean {
    const s1 = skills.find(s => s.id === skill1);
    return s1 ? s1.connections.includes(skill2) : false;
  }
  
  function handleMouseMove(e: MouseEvent) {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    mouseY = ((e.clientY - rect.top) / rect.height) * 100;
  }
</script>

<div 
  bind:this={container}
  class="relative w-full h-96 md:h-[500px]"
  on:mousemove={handleMouseMove}
>
  <!-- SVG Web Lines -->
  <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
    <!-- Connection lines -->
    {#each skills as skill}
      {#each skill.connections as connectionId}
        {@const target = skills.find(s => s.id === connectionId)}
        {#if target}
          <line
            x1={skill.x}
            y1={skill.y}
            x2={target.x}
            y2={target.y}
            stroke={hoveredSkill && (skill.id === hoveredSkill || target.id === hoveredSkill) ? '#ef4444' : 'rgba(255,255,255,0.1)'}
            stroke-width={hoveredSkill && (skill.id === hoveredSkill || target.id === hoveredSkill) ? 0.8 : 0.3}
            class="transition-all duration-300"
            style="filter: {hoveredSkill && (skill.id === hoveredSkill || target.id === hoveredSkill) ? 'drop-shadow(0 0 2px #ef4444)' : 'none'};"
          />
        {/if}
      {/each}
    {/each}
    
    <!-- Radial web pattern from center -->
    {#each Array(8) as _, i}
      {@const angle = (i * Math.PI * 2) / 8}
      <line
        x1={50}
        y1={50}
        x2={50 + Math.cos(angle) * 45}
        y2={50 + Math.sin(angle) * 45}
        stroke="rgba(255,255,255,0.05)"
        stroke-width="0.2"
      />
    {/each}
    
    <!-- Concentric web rings -->
    {#each [15, 30, 45] as r}
      <circle
        cx={50}
        cy={50}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        stroke-width="0.2"
      />
    {/each}
  </svg>
  
  <!-- Skill Nodes -->
  {#each skills as skill}
    <div
      class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
      style="left: {skill.x}%; top: {skill.y}%; z-index: {hoveredSkill === skill.id ? 50 : 10};"
      on:mouseenter={() => hoveredSkill = skill.id}
      on:mouseleave={() => hoveredSkill = null}
    >
      <!-- Spider web glow effect -->
      <div 
        class="absolute inset-0 rounded-full transition-all duration-300"
        style="
          background: radial-gradient(circle, {categoryColors[skill.category]}40 0%, transparent 70%);
          transform: scale({hoveredSkill === skill.id ? 2.5 : 0});
          opacity: {hoveredSkill === skill.id ? 1 : 0};
        "
      />
      
      <!-- Skill bubble -->
      <div 
        class="relative px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm transition-all duration-300"
        style="
          background: {hoveredSkill === skill.id ? categoryColors[skill.category] : 'rgba(0,0,0,0.6)'};
          border-color: {categoryColors[skill.category]};
          color: white;
          box-shadow: {hoveredSkill === skill.id ? `0 0 20px ${categoryColors[skill.category]}` : 'none'};
          transform: scale({hoveredSkill === skill.id ? 1.2 : 1}) translateZ(20px);
        "
      >
        {skill.name}
      </div>
      
      <!-- Spider-sense lines when hovered -->
      {#if hoveredSkill === skill.id}
        <div class="absolute inset-0 pointer-events-none">
          {#each Array(6) as _, i}
            <div 
              class="absolute w-0.5 bg-spider-red origin-bottom spider-sense-line"
              style="
                height: 30px;
                left: 50%;
                bottom: 50%;
                transform: rotate({i * 60}deg) translateX(-50%);
                opacity: 0.6;
              "
            />
          {/each}
        </div>
      {/if}
    </div>
  {/each}
  
  <!-- Center spider symbol -->
  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
    <div class="text-3xl animate-pulse opacity-50">🕷️</div>
  </div>
  
  <!-- Legend -->
  <div class="absolute bottom-4 left-4 flex flex-wrap gap-3 text-xs">
    {#each Object.entries(categoryColors) as [category, color]}
      <div class="flex items-center gap-1.5">
        <div class="w-2 h-2 rounded-full" style="background: {color}"></div>
        <span class="text-gray-400 capitalize">{category}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .spider-sense-line {
    animation: spiderSensePulse 0.5s ease-in-out infinite;
  }
  
  @keyframes spiderSensePulse {
    0%, 100% { opacity: 0.3; transform: rotate(var(--rotation, 0deg)) translateX(-50%) scaleY(0.8); }
    50% { opacity: 0.8; transform: rotate(var(--rotation, 0deg)) translateX(-50%) scaleY(1.2); }
  }
</style>
