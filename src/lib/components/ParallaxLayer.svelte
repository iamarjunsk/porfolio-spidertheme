<script lang="ts">
  import { onMount } from 'svelte';
  
  export let speed: number = 0.5;
  export let direction: 'vertical' | 'horizontal' = 'vertical';
  
  let element: HTMLElement;
  let offset = 0;
  let isInView = false;
  
  onMount(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    if (element) observer.observe(element);
    
    const handleScroll = () => {
      if (!isInView) return;
      
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how far through the viewport the element is
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = (elementCenter - viewportCenter) / viewportHeight;
        
        offset = distance * speed * 100;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  });
</script>

<div 
  bind:this={element}
  class="will-change-transform"
  style="transform: translate3d(0, {offset}px, 0);"
>
  <slot />
</div>
