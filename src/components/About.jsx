import { FiMapPin, FiBookOpen, FiCode, FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <section id="a-propos" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-turquoise text-sm font-semibold tracking-wider mb-2">À PROPOS</p>
          <h2 className="text-4xl font-bold mb-6">Qui suis-je ?</h2>
          <p className="text-gray-400 leading-relaxed">
  Je suis <span className="text-turquoise font-medium">Matthias Yaba</span>, diplômé d'une Licence en Informatique de Gestion.
  Passionné par le développement web, les bases de données et la gestion des systèmes d'information, je cherche aujourd'hui
  à mettre mes compétences au service de projets concrets et à évoluer au sein d'une équipe où je pourrai continuer à
  apprendre et à apporter des solutions innovantes.
</p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-start">
              <FiMapPin className="text-turquoise text-2xl mb-2" />
              <p className="text-sm font-medium">Tunisie</p>
              <p className="text-xs text-gray-500">(actuellement)</p>
            </div>
           <div className="flex flex-col items-start">
  <FiBookOpen className="text-turquoise text-2xl mb-2" />
  <p className="text-sm font-medium">Licence</p>
  <p className="text-xs text-gray-500">Informatique de gestion</p>
</div>
            <div className="flex flex-col items-start">
              <FiCode className="text-turquoise text-2xl mb-2" />
              <p className="text-sm font-medium">Passionné par</p>
              <p className="text-xs text-gray-500">le web & les nouvelles tech</p>
            </div>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 mt-8 border border-turquoise text-turquoise px-6 py-3 rounded-full hover:bg-turquoise hover:text-night transition">
            En savoir plus <FiArrowRight />
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
            alt="Espace de travail"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}