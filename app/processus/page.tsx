import Link from "next/link";

export const metadata = {
  title: "Notre Processus - IMIGO Immigration Tanger",
  description: "Découvrez notre processus en 6 étapes pour immigrer au Canada. Un accompagnement structuré et transparent du début à la fin.",
};

export default function Processus() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Notre processus en 6 étapes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement structuré et transparent du début à la fin
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -top-6 left-8 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10" style={{ background: step.color }}>
                  {step.number}
                </div>
                <div className="pt-12 p-8 bg-white rounded-3xl shadow-lg border-2 border-gray-100">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, didx) => (
                      <li key={didx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Délais estimés</h2>
            <p className="section-subtitle">Durée moyenne de chaque étape du processus</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20"></div>

              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-20 pb-12 last:pb-0">
                  <div className="absolute left-5 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-primary font-semibold">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary/10 rounded-2xl text-center">
              <p className="text-lg">
                <strong className="text-primary">Délai total moyen :</strong> 6-9 mois pour l'ensemble du processus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre processus ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Commencez par une évaluation gratuite de votre profil
          </p>
          <Link href="/contact#formulaire" className="btn btn-white btn-lg">
            Évaluation gratuite
          </Link>
        </div>
      </section>
    </>
  );
}

const steps = [
  {
    number: "01",
    title: "Évaluation initiale",
    description: "Analyse complète de votre profil et calcul de votre score CRS",
    color: "#E84E2B",
    details: [
      "Consultation gratuite",
      "Analyse d'éligibilité",
      "Calcul du score CRS",
      "Recommandations personnalisées",
    ],
  },
  {
    number: "02",
    title: "Préparation des documents",
    description: "Constitution et vérification de votre dossier complet",
    color: "#f59e0b",
    details: [
      "Liste des documents requis",
      "Assistance à la collecte",
      "Vérification de conformité",
      "Traduction si nécessaire",
    ],
  },
  {
    number: "03",
    title: "Tests linguistiques",
    description: "Accompagnement pour les examens TEF/IELTS selon vos besoins",
    color: "#f59e0b",
    details: [
      "Choix du test approprié",
      "Préparation aux examens",
      "Inscription aux sessions",
      "Suivi des résultats",
    ],
  },
  {
    number: "04",
    title: "Équivalence des diplômes",
    description: "Obtention de l'ECA pour vos qualifications académiques",
    color: "#3b82f6",
    details: [
      "Choix de l'organisme ECA",
      "Préparation du dossier",
      "Soumission de la demande",
      "Suivi de l'évaluation",
    ],
  },
  {
    number: "05",
    title: "Soumission du profil",
    description: "Création et dépôt de votre profil Entrée Express",
    color: "#3b82f6",
    details: [
      "Création du profil en ligne",
      "Optimisation du score CRS",
      "Soumission officielle",
      "Entrée dans le bassin",
    ],
  },
  {
    number: "06",
    title: "Demande de résidence",
    description: "Finalisation après réception de l'invitation à présenter une demande",
    color: "#10b981",
    details: [
      "Réception de l'ITA",
      "Soumission complète",
      "Examens médicaux",
      "Obtention de la RP",
    ],
  },
];

const timeline = [
  { title: "Évaluation initiale", duration: "1-2 semaines" },
  { title: "Préparation documents", duration: "2-4 semaines" },
  { title: "Tests linguistiques", duration: "4-8 semaines" },
  { title: "Équivalence diplômes", duration: "8-12 semaines" },
  { title: "Soumission profil", duration: "1-2 semaines" },
  { title: "Demande de résidence", duration: "6 mois" },
];

