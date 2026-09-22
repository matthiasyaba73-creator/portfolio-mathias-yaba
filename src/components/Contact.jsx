import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiSend } from "react-icons/fi";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nom,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setForm({ nom: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("Erreur EmailJS:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-card border border-gray-800 rounded-3xl p-8 md:p-12">
        <p className="text-turquoise text-sm font-semibold tracking-wider mb-2">CONTACT</p>
        <h2 className="text-4xl font-bold mb-4">Discutons de votre projet</h2>
        <p className="text-gray-400 mb-10">
          Vous avez une idée, un projet ou une opportunité ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <a href="mailto:mathiasyaba73@gmail.com" className="flex items-center gap-4 hover:text-turquoise transition">
              <FiMail className="text-turquoise text-xl" />
              <span>matthiasyaba73@gmail.com</span>
            </a>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-turquoise text-xl" />
              <span>Tunisie</span>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-turquoise text-xl" />
              <span>+216 58 842 077</span>
            </div>
            <a href="https://linkedin.com/in/matthias-yaba" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-turquoise transition">
              <FiLinkedin className="text-turquoise text-xl" />
              <span>linkedin.com/in/matthias-yaba</span>
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400">Nom</label>
                <input
                  type="text"
                  required
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full bg-night border border-gray-700 rounded-lg px-4 py-3 mt-1 focus:border-turquoise outline-none transition"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="votre@email.com"
                  className="w-full bg-night border border-gray-700 rounded-lg px-4 py-3 mt-1 focus:border-turquoise outline-none transition"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                required
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Votre message..."
                className="w-full bg-night border border-gray-700 rounded-lg px-4 py-3 mt-1 focus:border-turquoise outline-none transition resize-none"
              ></textarea>
            </div>

            {status === "success" && (
              <p className="text-green-400 text-sm bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                ✅ Message envoyé avec succès ! Je te répondrai bientôt.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-lg p-3">
                ❌ Oups, une erreur est survenue. Réessaie ou contacte-moi par email.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-turquoise text-night font-semibold py-3 rounded-lg hover:bg-turquoise/80 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Envoi en cours..." : <>Envoyer <FiSend /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}