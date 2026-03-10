/**
 * Domain Entity: ProcessusContent
 * Represents the "Processus" section content
 */
export interface ProcessusContent {
  title: string;
  steps: string[];
}

/**
 * Domain Value Object: Creates a valid ProcessusContent
 */
export class ProcessusContentVO {
  private constructor(
    public readonly title: string,
    public readonly steps: string[]
  ) {
    if (!title || title.trim().length === 0) {
      throw new Error("Title cannot be empty");
    }
    if (!steps || steps.length === 0) {
      throw new Error("Steps cannot be empty");
    }
    if (steps.some(s => !s || s.trim().length === 0)) {
      throw new Error("All steps must be non-empty");
    }
  }

  static create(title: string, steps: string[]): ProcessusContent {
    return new ProcessusContentVO(title, steps);
  }
}

