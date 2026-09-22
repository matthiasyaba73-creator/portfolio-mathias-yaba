import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "MédiZen-Santé",
    description: "Application de gestion des rendez-vous médicaux",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
    tags: ["Laravel", "PHP", "MySQL"],
    badge: null,
  },
  {
    title: "Smart Parking QR",
    description: "Gestion intelligente des tickets de stationnement",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600",
    tags: ["Node.js", "Express", "React"],
    badge: null,
  },
  {
    title: "HairBook",
    description: "Application de réservation pour salons de coiffure",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600",
    tags: ["Laravel", "PHP", "MySQL"],
    badge: null,
  },
  {
    title: "Portfolio Web",
    description: "Mon propre portfolio en ligne",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    tags: ["React", "Tailwind CSS", "Vite"],
    badge: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
        <h2 className="text-4xl font-bold">Mes projets</h2>
        <a href="#" className="text-turquoise flex items-center gap-2 hover:gap-3 transition-all">
          Voir tous les projets <FiArrowRight />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-card border border-gray-800 rounded-2xl overflow-hidden hover:border-turquoise hover:-translate-y-2 transition-all group">
            <div className="relative">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              {p.badge && (
                <span className="absolute top-3 right-3 bg-night/80 text-turquoise text-xs px-3 py-1 rounded-full border border-turquoise/50">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2 min-h-[40px]">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-night border border-gray-700 px-2 py-1 rounded-full text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <button className="w-9 h-9 rounded-full border border-turquoise text-turquoise flex items-center justify-center group-hover:bg-turquoise group-hover:text-night transition">
                  <FiExternalLink />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}