export interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  genre: string;
  cp_number: string;
  email: string;
  manager_id: number;
  grade_id: number;
  job_type_id: number;
  role: string;
}

export interface UserSignUpType {
  firstName: string;
  lastName: string;
  genre: string;
  cpNumber: string;
  email: string;
  manager: number | null | undefined;
  grade: number | null | undefined;
  jobType: number | null | undefined;
  password: string;
}
