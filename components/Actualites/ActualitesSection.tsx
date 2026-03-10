import Link from "next/link";

/**
 * Presentation Component: ActualitesSection
 * Displays the "Actualités" section
 */
export default function ActualitesSection() {
  // Static content to avoid any service/domain layer issues
  const content = {
    title: "Actualités",
    topics: [
      "Programmes d'immigration",
      "Erreurs à éviter dans un dossier (fraude, falsification, etc.)",
      "Différence entre le visa et la résidence permanente",
      "Conseils pour réussir son projet d'installation au Canada",
      "Témoignages clients"
    ]
  };

  return (
    <section className="py-20 md:py-32 bg-white" id="actualites">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{content.title}</h2>
        </div>
        
        {/* Topics Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {content.topics.map((topic, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed flex-1">{topic}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Link to blog page */}
          <div className="text-center">
            <Link 
              href="/blog" 
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              Voir toutes les actualités
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

