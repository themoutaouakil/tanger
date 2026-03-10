"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ProcessusService } from "@/application/processus/ProcessusService";

/**
 * Presentation Component: ProcessusSection
 * Displays the "Processus" section
 */
export default function ProcessusSection() {
  const content = useMemo(() => {
    const service = new ProcessusService();
    return service.getContent();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gray-50" id="processus">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{content.title}</h2>
        </div>
        
        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {content.steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 bg-white border-2 border-gray-100 rounded-2xl card-hover"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {idx + 1}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed pt-2">{step}</p>
              </div>
            ))}
          </div>
          
          {/* Link to detailed process page */}
          <div className="text-center">
            <Link 
              href="/processus" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Découvrir le processus détaillé
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

