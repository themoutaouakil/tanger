/**
 * Domain Entity: WhyChooseUsContent
 * Represents the "Pourquoi nous choisir" section content
 */
export interface WhyChooseUsContent {
  title: string;
  subtitle: string;
}

/**
 * Domain Value Object: Creates a valid WhyChooseUsContent
 */
export class WhyChooseUsContentVO {
  private constructor(
    public readonly title: string,
    public readonly subtitle: string
  ) {
    if (!title || title.trim().length === 0) {
      throw new Error("Title cannot be empty");
    }
    if (!subtitle || subtitle.trim().length === 0) {
      throw new Error("Subtitle cannot be empty");
    }
  }

  static create(title: string, subtitle: string): WhyChooseUsContent {
    return new WhyChooseUsContentVO(title, subtitle);
  }
}

