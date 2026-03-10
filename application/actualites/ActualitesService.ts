import { ActualitesContent } from "@/domain/actualites/ActualitesContent";
import { ActualitesContentVO } from "@/domain/actualites/ActualitesContent";

/**
 * Application Service: ActualitesService
 * Handles business logic for retrieving "Actualités" content
 */
export class ActualitesService {
  /**
   * Get the "Actualités" section content
   */
  getContent(): ActualitesContent {
    return ActualitesContentVO.create(
      "Actualités",
      [
        "Programmes d'immigration",
        "Erreurs à éviter dans un dossier (fraude, falsification, etc.)",
        "Différence entre le visa et la résidence permanente",
        "Conseils pour réussir son projet d'installation au Canada",
        "Témoignages clients"
      ]
    );
  }
}

