/**
 * Domain Entity: SocialMediaContent
 * Represents social media links
 */
export interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

export interface SocialMediaContent {
  title: string;
  links: SocialMediaLink[];
}

/**
 * Domain Value Object: Creates a valid SocialMediaContent
 */
export class SocialMediaContentVO {
  private constructor(
    public readonly title: string,
    public readonly links: SocialMediaLink[]
  ) {
    if (!title || title.trim().length === 0) {
      throw new Error("Title cannot be empty");
    }
    if (!links || links.length === 0) {
      throw new Error("Links cannot be empty");
    }
    links.forEach(link => {
      if (!link.name || link.name.trim().length === 0) {
        throw new Error("Link name cannot be empty");
      }
      if (!link.url || link.url.trim().length === 0) {
        throw new Error("Link URL cannot be empty");
      }
    });
  }

  static create(title: string, links: SocialMediaLink[]): SocialMediaContent {
    return new SocialMediaContentVO(title, links);
  }
}

