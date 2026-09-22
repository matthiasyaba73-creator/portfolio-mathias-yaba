import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaPhp, FaDatabase, FaGithub, FaFigma, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <FaLaravel />, name: "Laravel", color: "text-red-500" },
  { icon: <FaPhp />, name: "PHP", color: "text-indigo-400" },
  { icon: <FaDatabase />, name: "MySQL", color: "text-blue-400" },
  { icon: <FaGithub />, name: "Git & GitHub", color: "text-white" },
  { icon: <FaFigma />, name: "Figma", color: "text-pink-400" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
  { icon: <VscVscode />, name: "VS Code", color: "text-blue-400" },
  { icon: <FaLinux />, name: "Linux", color: "text-yellow-300" },
];

export default function Skills() {
  return (
    <section id="compétences" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Mes compétences</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="bg-card border border-gray-800 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-turquoise hover:-translate-y-1 transition-all">
            <div className={`text-4xl ${s.color}`}>{s.icon}</div>
            <p className="text-sm text-gray-300">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}