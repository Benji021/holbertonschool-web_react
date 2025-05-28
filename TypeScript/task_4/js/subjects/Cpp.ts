/// <reference path="Subject.ts" />
namespace Subjects {
    export interface Teacher {
        experienceTeachingC: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirement for Cpp';
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0) {
                return `AvailableTeacher: <first name of teacher>`;
            }
            return ' No available teacher';
        }
    }
}