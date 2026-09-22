import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiMessageSquare } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="accueil" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-turquoise italic mb-2">Bonjour, je suis</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Matthias <span className="text-turquoise">Yaba</span>
          </h1>
         <p className="mt-4 text-lg text-gray-300">
  Diplômé en Informatique de Gestion <span className="text-gray-500">|</span> Développeur Web (Junior)
</p>
          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
            Passionné par la technologie et les solutions digitales, je crée des applications web modernes et utiles.
            Actuellement à la recherche d'une opportunité pour mettre en pratique mes compétences et continuer à apprendre.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projets" className="flex items-center gap-2 bg-turquoise text-night px-6 py-3 rounded-full font-semibold hover:bg-turquoise/80 transition">
              Voir mes projets <FiArrowRight />
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-full hover:border-turquoise hover:text-turquoise transition">
              <FiMessageSquare /> Me contacter
            </a>
          </div>

          <div className="flex gap-5 mt-10 text-gray-400">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-turquoise text-xl transition"><FiGithub /></a>
            <a href="https://linkedin.com/in/matthias-yaba" target="_blank" rel="noreferrer" className="hover:text-turquoise text-xl transition"><FiLinkedin /></a>
            <a href="mailto:mathiasyaba@gmail.com" className="hover:text-turquoise text-xl transition"><FiMail /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-turquoise text-xl transition"><FaXTwitter /></a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 text-turquoise italic text-2xl rotate-6 hidden lg:block">
            Code<br />Learn<br />Build<br />Grow
          </div>
        <img
  src="/matthias.jpg"
  alt="Matthias Yaba"
  className="rounded-2xl w-full object-cover"
/>
          <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur border border-turquoise/30 rounded-xl p-4 flex items-center gap-3">
            <span className="w-3 h-3 bg-turquoise rounded-full animate-pulse"></span>
            <div>
              <p className="text-turquoise font-semibold text-sm">Disponible</p>
              <p className="text-gray-400 text-xs">Pour un stage / une alternance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}