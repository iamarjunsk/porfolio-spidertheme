<script>
  import { Mail, Phone, Linkedin, Github, MapPin, Coffee } from 'lucide-svelte';
</script>

<section id="contact" class="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
  <!-- Modern Background Pattern -->
  <div class="absolute inset-0">
    <!-- Grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    <!-- Radial gradient overlay -->
    <div class="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-red-500/10"></div>
  </div>
  
  <!-- Floating Elements -->
  <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
  <div class="absolute top-40 right-32 w-1 h-1 bg-red-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
  <div class="absolute bottom-40 left-32 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
  <div class="absolute bottom-20 right-20 w-1 h-1 bg-red-300 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
  
  <div class="max-w-6xl mx-auto relative z-10">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-comic text-white mb-6">
        Let's Build Something Amazing
      </h2>
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with fellow developers.
      </p>
    </div>
    
    <!-- Contact Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      
      <!-- Email Card -->
      <a 
        href="mailto:dev.arjunsk@gmail.com"
        class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center
               hover:bg-white/10 transition-all duration-300 hover:scale-105
               border border-white/10 hover:border-red-500/30
               shadow-lg hover:shadow-2xl hover:shadow-red-500/20"
      >
        <div class="mb-6">
          <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
            <Mail class="w-8 h-8 text-red-400" />
          </div>
          <h3 class="font-comic text-xl text-white mb-2">Email Me</h3>
          <p class="text-gray-300 text-sm break-all">dev.arjunsk@gmail.com</p>
          <p class="text-gray-400 text-xs mt-2">Quick response guaranteed</p>
        </div>
      </a>

      <!-- Phone Card -->
      <a 
        href="tel:+919020302550"
        class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center
               hover:bg-white/10 transition-all duration-300 hover:scale-105
               border border-white/10 hover:border-green-500/30
               shadow-lg hover:shadow-2xl hover:shadow-green-500/20"
      >
        <div class="mb-6">
          <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
            <Phone class="w-8 h-8 text-green-400" />
          </div>
          <h3 class="font-comic text-xl text-white mb-2">Call Me</h3>
          <p class="text-gray-300">+91 9020302550</p>
          <p class="text-gray-400 text-xs mt-2">Available during business hours</p>
        </div>
      </a>

      <!-- LinkedIn Card -->
      <a 
        href="https://linkedin.com/in/arjunsk" 
        target="_blank"
        rel="noopener noreferrer"
        class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center
               hover:bg-white/10 transition-all duration-300 hover:scale-105
               border border-white/10 hover:border-blue-500/30
               shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
      >
        <div class="mb-6">
          <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
            <Linkedin class="w-8 h-8 text-blue-400" />
          </div>
          <h3 class="font-comic text-xl text-white mb-2">LinkedIn</h3>
          <p class="text-gray-300">Professional Network</p>
          <p class="text-gray-400 text-xs mt-2">Let's connect professionally</p>
        </div>
      </a>

    </div>
    
    <!-- Call to Action -->
    <div class="text-center">
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl max-w-3xl mx-auto">
        <h3 class="text-2xl font-comic text-white mb-4">Ready to Start Your Project?</h3>
        <p class="text-gray-300 mb-6">
          I'm currently available for freelance work and new opportunities. 
          Let's discuss how we can bring your vision to life!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:dev.arjunsk@gmail.com"
            class="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg 
                   hover:from-red-700 hover:to-red-800 transition-all duration-300 
                   shadow-lg hover:shadow-xl hover:scale-105 transform">
            <span class="flex items-center justify-center gap-2">
              🚀 Start a Project
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/arjunsk"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg 
                   hover:from-blue-700 hover:to-blue-800 transition-all duration-300 
                   shadow-lg hover:shadow-xl hover:scale-105 transform">
            <span class="flex items-center justify-center gap-2">
              🤝 Let's Connect
            </span>
          </a>
        </div>
      </div>
    </div>

  </div>
</section>