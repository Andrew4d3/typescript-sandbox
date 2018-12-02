/** Hello World Class */
class HelloWorld {
  constructor(name: string) {
    console.log(`Hello ${name}`);
  }
}

new HelloWorld("World");

/**  Defining variables */
let myBoolean: boolean = true;
let myNumber: number = 2;
let myString: string = "hi";
// holaaaa
console.log("Variables:", myBoolean, myNumber, myString);

let thisCouldBeAnything: any = 1;
thisCouldBeAnything = true;
thisCouldBeAnything = "anything!";
console.log("Any variable:", thisCouldBeAnything);

let myStringOrNumber: number | string = "hi";
console.log(myStringOrNumber); // "hi"
myStringOrNumber = 1;
console.log(myStringOrNumber); // 1

myStringOrNumber = 1;
console.log(myStringOrNumber); // 1

/** Defining Arrays */
let myBooleanArray: boolean[] = [true, false];
let myNumberArray: number[] = [1, 2, 3];
let myStringArray: string[] = ["hello", "world"];
console.log("Arrays:", myBooleanArray, myNumberArray, myStringArray);

/** Defining Tuples */
let myCoordinatesTuple: [string, number, number] = [
  "Eiffel Tower",
  48.858271,
  2.294524
];
console.log("Tuple Coordinates:", myCoordinatesTuple);

/** Defining Enums */
enum response {
  No,
  Yes
}
console.log("Enum in position 0:", response[0]); // Enum in position 0: No
console.log("Enum in position 1:", response[1]); // Enum in position 1: Yes
console.log(response.No);

enum customResponse {
  NO = "No",
  YES = "Yes"
}

enum positionWithIndex {
  up = 1,
  down,
  left,
  right
}

console.log(positionWithIndex.up); // 1
console.log(positionWithIndex.down); // 2
console.log(positionWithIndex.left); // 3
console.log(positionWithIndex.right); // 4

/** Objects */
let myStudent: object = { name: "Andrew", age: 32 }; // We cannot modify this

console.log(myStudent);

/** interfaces */
interface IStudent {
  name: string;
  age: number;
}

let student: IStudent = { name: "Andrew", age: 30 };
student.age = 32; // Now we can modify any value

/** Functions */
const mySum = (val1: number, val2: number): number => {
  return val1 + val2;
};

// Function with no return
const sayHello = (): void => {
  console.log("hello!");
};

/** Classes */
class Person {
  firstName: string;
  lastName: string;
  age: number = 0; // We can initialoze class attributes

  // ? means optional
  constructor(data?: any) {
    this.firstName = data.firstName || null;
    this.lastName = data.lastName || null;
    this.age = data.age || this.age;
  }
}

// Class inheritance
class Student extends Person {
  course: string;

  constructor(data: any, course: string) {
    super(data);
    this.course = course;
  }
}

/** Access Modifiers */
class Building {
  public address: string; // Not really necessary to define it, public is default
  private costructionYear: string; // Cannot be accessed from outside the class
  protected size: number; // It can be accessed from derivated classes but not from outside
  public readonly architect: string = "Andrew"; // It cannot be modified once is defined
  public readonly owner: string;

  constructor(
    address: string,
    costructionYear: string,
    size: number,
    owner: string
  ) {
    this.address = address;
    this.costructionYear = costructionYear;
    this.size = size;
    this.owner = owner;
  }
}

class House extends Building {
  constructor(
    address: string,
    costructionYear: string,
    size: number,
    owner: string
  ) {
    super(address, costructionYear, size, owner);
  }

  printSize(): void {
    console.log(this.size); //this is a parent property
  }
}

/** Generics with classes */

class Cat {
  meow() {
    console.log("meowwwwww");
  }
}

class Dog {
  bark() {
    console.log("wufff");
  }
}

class Owner<T> {
  public name: string;
  public pet: T;

  constructor(name: string, pet: T) {
    this.name = name;
    this.pet = pet;
  }
}

const owner1: Owner<Cat> = new Owner<Cat>("Andrew", new Cat());
const owner2: Owner<Dog> = new Owner<Dog>("Margareth", new Dog());

owner1.pet.meow();
owner2.pet.bark();

/** Generics with interfaces */
interface IResidence<T> {
  name: string;
  id: T;
}

const residentFromVenezuela: IResidence<number> = {
  name: "Andrew",
  id: 123456
};
const residentFromChile: IResidence<string> = { name: "Andrew", id: "12345-K" };

/** Generics with functions */
const loggingIdentity = <T>(arg: T[]): T[] => {
  console.log(arg.length);
  return arg;
};

const someNumbers: number[] = loggingIdentity<number>([1, 2, 3, 4]);
const somewords: string[] = loggingIdentity<string>(["hello", "world"]);
