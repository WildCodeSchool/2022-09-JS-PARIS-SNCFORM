export type LearningType = {
  id: number;
  title: string;
  type: string;
  description: string;
  instructor: string;
  duration: number;
  capacityLearner: number;
  startRegistration: Date;
  endRegistration: Date;
  status?: string;
};
