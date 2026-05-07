const filterEvenNumbers = (arr: number[]) => {
  return arr.filter((a) => a % 2 === 0);
};

const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

type StringOrNumber = string | number;
const checkType = (param: StringOrNumber) => {
  if (typeof param === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (obj: Book) => {
  return {
    ...obj,
    isRead: true,
  };
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};