// Interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Interface Directors that extend Teacher
interface Directors extends Teacher {
    numberofReports: number;
}