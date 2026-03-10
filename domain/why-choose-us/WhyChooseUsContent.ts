/**
 * Domain Entity: WhyChooseUsContent
 * Represents the "Pourquoi nous choisir" section content
 */
export interface WhyChooseUsContent {
  title: string;
  subtitle: string;
  features: string[];
}

/**
 * Domain Value Object: Creates a valid WhyChooseUsContent
 */
export class WhyChooseUsContentVO {
  private constructor(
    public readonly title: string,
    public readonly subtitle: string,
    public readonly features: string[]
  ) {
    if (!title || title.trim().length === 0) {
      throw new Error("Title cannot be empty");
    }
    if (!subtitle || subtitle.trim().length === 0) {
      throw new Error("Subtitle cannot be empty");
    }
    if (!features || features.length === 0) {
      throw new Error("Features cannot be empty");
    }
    if (features.some(f => !f || f.trim().length === 0)) {
      throw new Error("All features must be non-empty");
    }
  }

  static create(title: string, subtitle: string, features: string[]): WhyChooseUsContent {
    return new WhyChooseUsContentVO(title, subtitle, features);
  }
}

