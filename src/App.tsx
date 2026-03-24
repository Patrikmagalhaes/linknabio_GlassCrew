import { Globe, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const videoUrl = "https://raw.githubusercontent.com/Patrikmagalhaes/images_server/main/conselhos_do_alem_images/7519874-uhd_4096_2160_25fps%20(1).mp4";
  const logoUrl = "https://raw.githubusercontent.com/Patrikmagalhaes/images_server/35da1a008c9c9b58a08a2e8f57bb5ba6f86b65c8/conselhos_do_alem_images/images%20(2)%20(1)%20(1).png";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-inter selection:bg-orange-500/30">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none" />

      {/* Content Container */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 max-w-md mx-auto text-center">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="relative h-24 w-auto green-glow"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <div className="space-y-4 mb-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-outfit text-4xl md:text-5xl font-extrabold tracking-tight text-shadow-dark leading-tight"
          >
            Sua sessão começa aqui 💨
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-medium text-gray-200 text-shadow-dark"
          >
            No site você encontra tudo pra sua sessão. Atacado e Varejo 🌿
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm md:text-base text-gray-400 font-normal"
          >
            E se você tem uma marca e quer produzir com a gente, fale direto no WhatsApp 👇
          </motion.p>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-5">
          {/* Site Button */}
          <motion.a
            href="https://glasscrew.lojavirtualnuvem.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-5 px-8 bg-[#0a0a0a] border border-orange-500/30 rounded-full font-montserrat font-bold text-white text-lg animate-pulse-neon transition-all"
          >
            <Globe className="w-6 h-6 text-orange-500" />
            Acesse nosso Site
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/554888623445"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.02, backgroundColor: '#1da851' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-5 px-8 bg-[#25D366] rounded-full font-montserrat font-bold text-white text-lg transition-colors shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </motion.a>
        </div>

        {/* Footer */}
        <footer className="mt-16">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 font-inter">
            created by{' '}
            <a 
              href="https://instagram.com/patrik_magalhaess" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors underline underline-offset-2"
            >
              @patrik_magalhaess
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
