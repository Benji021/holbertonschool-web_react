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

// Interface to describe the class's methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Interface to describe the class constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementing this interface
class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return "currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}