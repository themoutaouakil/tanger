/**
 * Domain Entity: ActualitesContent
 * Represents the "Actualités" section content
 */
export interface ActualitesContent {
  title: string;
  topics: string[];
}

/**
 * Domain Value Object: Creates a valid ActualitesContent
 */
export class ActualitesContentVO {
  private constructor(
    public readonly title: string,
    public readonly topics: string[]
  ) {
    if (!title || title.trim().length === 0) {
      throw new Error("Title cannot be empty");
    }
    if (!topics || topics.length === 0) {
      throw new Error("Topics cannot be empty");
    }
    if (topics.some(t => !t || t.trim().length === 0)) {
      throw new Error("All topics must be non-empty");
    }
  }

  static create(title: string, topics: string[]): ActualitesContent {
    return new ActualitesContentVO(title, topics);
  }
}

