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

