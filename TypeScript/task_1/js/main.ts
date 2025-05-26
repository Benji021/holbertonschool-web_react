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

// Interface for the function named printTeacherFunction
interface printTeacherFunction {
    (firstname: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example
console.log(printTeacher("John", "Doe")); // Result : J. Doe