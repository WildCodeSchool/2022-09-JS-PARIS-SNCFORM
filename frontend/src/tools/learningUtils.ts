import { LearningType } from "@type/index";

export const learningsByStatus = (
  learnings: Partial<LearningType>[] | null,
  status: string
) => {
  return learnings?.filter((learning) => learning.status === status);
};
