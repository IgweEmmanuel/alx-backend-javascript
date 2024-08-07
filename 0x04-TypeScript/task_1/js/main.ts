Interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

Interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

Interface printTeacherFunction {
 (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName:string, lastName:string):string => {
 return `${firstName.charAt(0)}. ${lastName}`;
}

/* StudentClass - this is student class */

Interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string):string {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework():string{
    return 'Currently working';
  }

  displayName(): string{
    return this.firstName;
  }
}
