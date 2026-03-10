import Link from "next/link";
import Image from "next/image";
import WhyChooseUsSection from "@/components/WhyChooseUs/WhyChooseUsSection";
import ProcessusSection from "@/components/Processus/ProcessusSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in-up">
              <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-6">
                <span className="text-sm font-bold text-primary">Entrée Express Canada</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Votre nouvelle vie au <span className="gradient-text">Canada</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Obtenez votre résidence permanente au Canada en moins de 6 mois avec 
                le programme Entrée Express. Accompagnement professionnel de A à Z depuis Tanger.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact#formulaire" className="btn btn-primary btn-lg">
                  Commencer mon évaluation
                </Link>
                <Link href="/processus" className="btn btn-secondary btn-lg">
                  Découvrir le processus
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Clients accompagnés</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">95 %</div>
                  <div className="text-sm text-gray-600">Taux de réussite</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15 ans</div>
                  <div className="text-sm text-gray-600">D'expérience</div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="hidden md:block floating">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/10 rounded-full -ml-18 -mb-18"></div>
                
                <div className="relative z-10 text-center text-white">
                  <svg className="w-48 h-48 mx-auto mb-6" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <path d="M100 40 L120 80 L160 80 L130 105 L145 145 L100 120 L55 145 L70 105 L40 80 L80 80 Z" fill="white"/>
                  </svg>
                  <h3 className="text-3xl font-bold mb-3">Entrée Express</h3>
                  <p className="text-white/90">Le chemin le plus rapide vers la résidence permanente canadienne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6 mois</div>
              <div className="text-gray-400">Délai moyen de traitement</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100 %</div>
              <div className="text-gray-400">Accompagnement personnalisé</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">Support disponible</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3 étapes</div>
              <div className="text-gray-400">Processus simplifié</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Processus Section */}
      <ProcessusSection />

      {/* Benefits Section */}
      <section className="py-20 md:py-32" id="avantages">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi choisir le Canada ?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Le Canada offre une qualité de vie exceptionnelle et des opportunités professionnelles uniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 bg-white border-2 border-gray-100 rounded-2xl card-hover">
                <div className="text-primary mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer votre projet d'immigration ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenez une évaluation gratuite de votre profil dès aujourd'hui
          </p>
          <Link href="/contact#formulaire" className="btn btn-white btn-lg">
            Évaluation gratuite
          </Link>
        </div>
      </section>
    </>
  );
}

const benefits = [
  {
    title: "Système de santé universel",
    description: "Accès gratuit aux soins de santé pour tous les résidents permanents et citoyens",
    icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  },
  {
    title: "Économie stable et prospère",
    description: "Marché du travail dynamique avec des salaires compétitifs et de nombreuses opportunités",
    icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  },
  {
    title: "Éducation de qualité",
    description: "Système éducatif reconnu mondialement, études gratuites pour les enfants",
    icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  },
  {
    title: "Multiculturalisme",
    description: "Société inclusive qui célèbre la diversité culturelle et religieuse",
    icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  },
  {
    title: "Sécurité et qualité de vie",
    description: "Classé parmi les pays les plus sûrs au monde avec un environnement paisible",
    icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    title: "Nature spectaculaire",
    description: "Paysages à couper le souffle, parcs nationaux et espaces verts infinis",
    icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4-4M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
  },
];

