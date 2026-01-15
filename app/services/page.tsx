import Link from "next/link";

export const metadata = {
  title: "Nos Services - IMIGO Immigration Tanger",
  description: "Découvrez nos services d'immigration : Entrée Express, Visa visiteur, Études au Canada. Accompagnement complet de A à Z.",
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement complet pour maximiser vos chances de succès
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Services */}
            <div className="p-10 bg-gradient-to-br from-red-50 to-white rounded-3xl border-2 border-red-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Services professionnels</h2>
              </div>
              <ul className="space-y-4">
                {professionalServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="p-10 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Garanties et engagement</h2>
              </div>
              <ul className="space-y-4">
                {guarantees.map((guarantee, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-gray-700">{guarantee}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos programmes d'immigration</h2>
            <p className="section-subtitle">Choisissez le programme qui correspond à votre profil</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg relative">
                {program.badge && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    {program.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact#formulaire" 
                  className={`btn w-full ${idx === 0 ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {idx === 0 ? 'Commencer' : 'En savoir plus'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin de conseils personnalisés ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour une consultation gratuite
          </p>
          <Link href="/contact" className="btn btn-white btn-lg">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}

const professionalServices = [
  "Évaluation détaillée de votre éligibilité",
  "Conseil personnalisé sur votre stratégie",
  "Préparation complète des documents",
  "Révision et optimisation de votre profil",
  "Soumission et suivi de votre dossier",
  "Support jusqu'à l'obtention de la résidence permanente",
];

const guarantees = [
  "Cabinet agréé et régulé au Maroc",
  "15 ans d'expérience en immigration",
  "Taux de réussite de 95 %",
  "Transparence totale des frais",
  "Confidentialité absolue garantie",
  "Disponibilité et réactivité assurées",
];

const programs = [
  {
    title: "Entrée Express",
    description: "Le programme le plus rapide pour obtenir la résidence permanente au Canada. Délai de traitement de 6 mois en moyenne.",
    features: ["Résidence permanente", "Traitement rapide (6 mois)", "Score CRS optimisé", "Accompagnement complet"],
    badge: "Plus populaire",
  },
  {
    title: "Visa visiteur",
    description: "Visitez le Canada pour le tourisme, les affaires ou pour rendre visite à votre famille. Processus simplifié.",
    features: ["Séjour temporaire", "Tourisme et affaires", "Visite familiale", "Procédure rapide"],
  },
  {
    title: "Études au Canada",
    description: "Étudiez dans l'un des meilleurs systèmes éducatifs au monde avec possibilité de résidence permanente après les études.",
    features: ["Permis d'études", "Éducation de qualité", "Permis de travail post-diplôme", "Chemin vers la RP"],
  },
];

