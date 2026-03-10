import { WhyChooseUsService } from "@/application/why-choose-us/WhyChooseUsService";

/**
 * Presentation Component: WhyChooseUsSection
 * Displays the "Pourquoi nous choisir" section
 */
export default function WhyChooseUsSection() {
  let content;
  try {
    const service = new WhyChooseUsService();
    content = service.getContent();
  } catch (error) {
    // Fallback content if service fails
    content = {
      title: "Pourquoi nous choisir ?",
      subtitle: "Nous sommes un cabinet qui assure :",
      features: [
        "Accompagnement personnalisé",
        "Étude de dossier détaillée",
        "Transparence des procédures et des frais",
        "Suivi du début à la fin",
        "Équipe qualifiée et à l'écoute"
      ]
    };
  }

  return (
    <section className="py-20 md:py-32 bg-white" id="pourquoi-nous-choisir">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle max-w-3xl mx-auto text-xl">
            {content.subtitle}
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl card-hover flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

