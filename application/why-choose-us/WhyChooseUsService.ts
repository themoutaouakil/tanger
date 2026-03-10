import { WhyChooseUsContent } from "@/domain/why-choose-us/WhyChooseUsContent";
import { WhyChooseUsContentVO } from "@/domain/why-choose-us/WhyChooseUsContent";

/**
 * Application Service: WhyChooseUsService
 * Handles business logic for retrieving "Pourquoi nous choisir" content
 */
export class WhyChooseUsService {
  /**
   * Get the "Pourquoi nous choisir" section content
   */
  getContent(): WhyChooseUsContent {
    return WhyChooseUsContentVO.create(
      "Pourquoi nous choisir ?",
      "Nous sommes un cabinet qui assure :",
      [
        "Accompagnement personnalisé",
        "Étude de dossier détaillée",
        "Transparence des procédures et des frais",
        "Suivi du début à la fin",
        "Équipe qualifiée et à l'écoute"
      ]
    );
  }
}

