<script>
  import { Mail, Phone, Linkedin, Github, MapPin, Coffee } from 'lucide-svelte';
</script>

<section id="contact" class="py-20 px-4 bg-gradient-to-br from-spider-red to-spider-blue">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-comic text-center text-white mb-4">
      Signal the Web-Signal
    </h2>
    <p class="text-center text-white/90 text-lg mb-12">
      Ready to collaborate? Let's build something amazing together!
    </p>
    
    <!-- Contact Cards Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Email Card -->
      <a 
        href="mailto:dev.arjunsk@gmail.com"
        class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center
               hover:bg-white/20 transition-all duration-300 hover:scale-105
               border-2 border-white/20 hover:border-white/40 group"
      >
        <div class="mb-4">
          <Mail class="w-12 h-12 mx-auto text-yellow-300 group-hover:text-yellow-200 transition-colors" />
        </div>
        <h3 class="font-comic text-xl mb-2">Email Me</h3>
        <p class="text-white/90 text-sm break-all">dev.arjunsk@gmail.com</p>
        <p class="text-white/70 text-xs mt-2">Click to send email</p>
      </a>

      <!-- Phone Card -->
      <a 
        href="tel:+919020302550"
        class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center
               hover:bg-white/20 transition-all duration-300 hover:scale-105
               border-2 border-white/20 hover:border-white/40 group"
      >
        <div class="mb-4">
          <Phone class="w-12 h-12 mx-auto text-green-300 group-hover:text-green-200 transition-colors" />
        </div>
        <h3 class="font-comic text-xl mb-2">Call Me</h3>
        <p class="text-white/90">+91 9020302550</p>
        <p class="text-white/70 text-xs mt-2">Click to call</p>
      </a>

      <!-- LinkedIn Card -->
      <a 
        href="https://linkedin.com/in/arjunsk" 
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center
               hover:bg-white/20 transition-all duration-300 hover:scale-105
               border-2 border-white/20 hover:border-white/40 group"
      >
        <div class="mb-4">
          <Linkedin class="w-12 h-12 mx-auto text-blue-300 group-hover:text-blue-200 transition-colors" />
        </div>
        <h3 class="font-comic text-xl mb-2">LinkedIn</h3>
        <p class="text-white/90">Professional Profile</p>
        <p class="text-white/70 text-xs mt-2">Connect with me</p>
      </a>

    </div>

    <!-- Additional Info Card -->
    <div class="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
      <div class="grid md:grid-cols-3 gap-8 text-center">
        
        <div class="flex flex-col items-center">
          <MapPin class="w-8 h-8 text-red-300 mb-3" />
          <h4 class="font-comic text-lg mb-2">Location</h4>
          <p class="text-white/90">Available for Remote Work</p>
          <p class="text-white/70 text-sm">Open to relocate</p>
        </div>

        <div class="flex flex-col items-center">
          <Coffee class="w-8 h-8 text-orange-300 mb-3" />
          <h4 class="font-comic text-lg mb-2">Availability</h4>
          <p class="text-white/90">Open to Opportunities</p>
          <p class="text-white/70 text-sm">Freelance & Full-time</p>
        </div>

        <div class="flex flex-col items-center">
          <Mail class="w-8 h-8 text-purple-300 mb-3" />
          <h4 class="font-comic text-lg mb-2">Response Time</h4>
          <p class="text-white/90">Within 24 hours</p>
          <p class="text-white/70 text-sm">Usually same day</p>
        </div>

      </div>
    </div>
  </div>
</section>