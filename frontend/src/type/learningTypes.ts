export type LearningType = {
  category_id: number;
  id: number;
  title: string;
  type: string;
  description: string;
  instructor: string;
  duration: number;
  capacity_learner: number;
  start_registration: Date;
  end_registration: Date;
  status?: string;
};
