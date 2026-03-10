import { SocialMediaContent, SocialMediaLink } from "@/domain/social-media/SocialMediaContent";
import { SocialMediaContentVO } from "@/domain/social-media/SocialMediaContent";

/**
 * Application Service: SocialMediaService
 * Handles business logic for retrieving social media links
 */
export class SocialMediaService {
  /**
   * Get the social media content
   */
  getContent(): SocialMediaContent {
    const links: SocialMediaLink[] = [
      {
        name: "LinkedIn",
        url: "#", // TODO: Replace with actual LinkedIn URL
        icon: "linkedin"
      },
      {
        name: "Instagram",
        url: "#", // TODO: Replace with actual Instagram URL
        icon: "instagram"
      }
    ];

    return SocialMediaContentVO.create(
      "Réseaux sociaux",
      links
    );
  }
}

