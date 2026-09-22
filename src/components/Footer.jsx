import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-turquoise text-xl font-bold">M</span>
          <span className="font-semibold">Matthias Yaba</span>
        </div>

        <p className="text-gray-500 text-sm">© 2025 Matthias Yaba. Tous droits réservés.</p>

        <div className="flex gap-5 text-gray-400">
          <a href="#" className="hover:text-turquoise transition"><FiGithub /></a>
          <a href="#" className="hover:text-turquoise transition"><FiLinkedin /></a>
          <a href="#" className="hover:text-turquoise transition"><FaXTwitter /></a>
          <a href="mailto:mathiasyaba@gmail.com" className="hover:text-turquoise transition"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}