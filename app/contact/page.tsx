"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    civilite: "",
    full_name: "",
    email: "",
    phone: "",
    city: "",
    diploma: "",
    experience: "",
    age: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        civilite: "",
        full_name: "",
        email: "",
        phone: "",
        city: "",
        diploma: "",
        experience: "",
        age: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe à Tanger est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-3xl shadow-lg border-2 border-gray-100">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">{info.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: info.content }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50" id="formulaire">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Évaluation gratuite de votre profil</h2>
              <p className="section-subtitle">
                Remplissez ce formulaire pour recevoir une analyse complète de vos chances
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              {submitStatus === "success" && (
                <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-green-800 text-center">
                  ✅ Merci ! Votre demande a été envoyée avec succès. Nous vous contacterons sous 24h.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-red-800 text-center">
                  ❌ Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="civilite" className="block text-sm font-semibold text-gray-700 mb-2">
                      Civilité *
                    </label>
                    <select
                      id="civilite"
                      name="civilite"
                      value={formData.civilite}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="M.">M.</option>
                      <option value="Mme">Mme</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="full_name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <div className="flex gap-2">
                      <span className="px-4 py-3 bg-gray-100 rounded-xl border-2 border-gray-200 font-semibold text-gray-700">
                        +212
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="612345678"
                        pattern="[67][0-9]{8}"
                        maxLength={9}
                        className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Numéro commençant par 6 ou 7</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ville *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Votre ville"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="diploma" className="block text-sm font-semibold text-gray-700 mb-2">
                      Diplôme *
                    </label>
                    <select
                      id="diploma"
                      name="diploma"
                      value={formData.diploma}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="Niveau Bac">Niveau Bac</option>
                      <option value="Bac">Bac</option>
                      <option value="Bac +1">Bac +1</option>
                      <option value="Bac +2">Bac +2</option>
                      <option value="Licence / Bachelor">Licence / Bachelor</option>
                      <option value="Master / Diplôme ingénieur ou plus">Master / Diplôme ingénieur ou plus</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Expérience professionnelle *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="Pas d'expérience">Pas d'expérience</option>
                      <option value="Entre 0 et 1 an">Entre 0 et 1 an</option>
                      <option value="Entre 1 et 5 ans">Entre 1 et 5 ans</option>
                      <option value="Plus que 5 ans">Plus que 5 ans</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                      Âge *
                    </label>
                    <select
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="Entre 18 et 25 ans">Entre 18 et 25 ans</option>
                      <option value="Entre 25 et 35 ans">Entre 25 et 35 ans</option>
                      <option value="Entre 35 et 45 ans">Entre 35 et 45 ans</option>
                      <option value="Plus que 45 ans">Plus que 45 ans</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Parlez-nous de votre projet d'immigration..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-32 h-32 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <p className="text-xl text-gray-600">Carte Google Maps</p>
          <p className="text-gray-500 mt-2">7ème étage, Office Center, N° 39 Rue Allal Ben Abdellah, Tanger</p>
        </div>
      </section>
    </>
  );
}

const contactInfo = [
  {
    title: "Adresse",
    content: "7ème étage, Ben Abdelah MM Challah<br/>Office Center, N° 39<br/>Rue Allal Ben Abdellah<br/>Tanger, Maroc<br/><br/><strong>Directrice :</strong> LAGROUBI Zineb",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    title: "Téléphone",
    content: '<a href="tel:+212664691297" class="hover:text-primary transition-colors">+212 664-691297</a><br/>Lun-Ven : 9h-18h',
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    title: "Email",
    content: "tanger@imigo-immigration.ma<br/>info@imigo-immigration.ma<br/>Réponse sous 24h",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    title: "Horaires",
    content: "Lundi - Vendredi : 9h - 18h<br/>Samedi : 9h - 13h<br/>Dimanche : Fermé",
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

