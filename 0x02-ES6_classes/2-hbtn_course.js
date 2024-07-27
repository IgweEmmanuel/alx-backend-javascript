export default class HolbertonCourse{
  
  constructor(name, length, students){
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name(){
    this._name;
  }

  set name(value){
    if (typeof value !== 'string'){
      throw new TypeError("Value must be string");
    }
    this._name = value;
  }

  get length(){
    this._length;
  }

  set length(value){
    if (typeof value !== 'number'){
      throw new TypeError("length is not a valid number");
    }
    this._length = value;
  }

  get students(){
    this._students
  }

  set students(value){
    if (!(value instanceof Array)){
      throw new TypeError("Not an array");
    }
    if (!value.every((student) => typeof student === 'string')){
      throw new TypeError("This is not array of strings");
    }
    this._students = value;
  }
}
