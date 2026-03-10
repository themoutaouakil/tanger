"use client";

import { WhyChooseUsService } from "@/application/why-choose-us/WhyChooseUsService";

/**
 * Presentation Component: WhyChooseUsSection
 * Displays the "Pourquoi nous choisir" section
 */
export default function WhyChooseUsSection() {
  const service = new WhyChooseUsService();
  const content = service.getContent();

  return (
    <section className="py-20 md:py-32 bg-white" id="pourquoi-nous-choisir">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle max-w-3xl mx-auto text-xl">
            {content.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

