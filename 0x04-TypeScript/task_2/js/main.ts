Interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

Interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
   return 'Getting to work';
  }
}

const createEmployee = (salary: number | string): Teacher | Director => {
  if (typeof salary === 'number' && salary < 500) {
    const teacherObj = new Teacher();
    return teacherObj;
  }else {
    const directorObj = new Director();
    return directorObj;
  }
}

const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Director | Teacher): void => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  }else {
    console.log(employee.workTeacherTasks());
  }
}


type Subjects = 'Math' | 'History';

 
teachClass(todayClass: Subjects): string {
  if (typeof todayClass === 'Math') {
    return 'Teaching Math';
  }else {
    return 'Teaching History';
  }
}
