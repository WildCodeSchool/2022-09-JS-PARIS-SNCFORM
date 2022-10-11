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
  bio: string;
  manager_last_name: string;
  job_type_name: string;
  avatar: File | string;
  background_profil: File | string;
}

export interface UserSignUpType {
  firstName: string;
  lastName: string;
  genre: string;
  cpNumber: string;
  email: string;
  manager: string | null | undefined;
  grade: string | null | undefined;
  jobType: string | null | undefined;
  password: string;
}

export interface UserLoginType {
  cpNumber: string;
  password: string;
}

export interface UserEditType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  hashedPassword: string;
  newPassword: string;
  oldPassword: string;
}
