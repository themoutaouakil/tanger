import { ProcessusContent } from "@/domain/processus/ProcessusContent";
import { ProcessusContentVO } from "@/domain/processus/ProcessusContent";

/**
 * Application Service: ProcessusService
 * Handles business logic for retrieving "Processus" content
 */
export class ProcessusService {
  /**
   * Get the "Processus" section content
   */
  getContent(): ProcessusContent {
    return ProcessusContentVO.create(
      "Processus",
      [
        "Évaluation du profil",
        "Analyse des options possibles",
        "Constitution du dossier",
        "Soumission et suivi",
        "Accompagnement jusqu'à la décision finale"
      ]
    );
  }
}

