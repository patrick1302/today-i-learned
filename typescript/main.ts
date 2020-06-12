export {};
let message: string = 'Welcome!';
let number: number = 10;

let isNew: boolean = null;
let myname: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string,number] = ['Chris', 22]

enum Color {Red, Green, Blue};

let c: Color = Color.Green;

let randomValue: any = 10;
randomValue = true;
randomValue = 'Patrick';

let any: any = 10;

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name)
}
// (myVariable as string).toUpperCase();

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2: number): number{
    return num1 + num2
}
add(5,10)

// O ? ao lado do parâmetro indica que este pode ser opcional
function add2(num1: number, num2?: number): number{
    return num1 + num2
}
add2(5)
add2(5,10)
function add3(num1: number, num2: number = 10): number{

    if(num2){
        return num1 + num2;
   } else {
       return num1;
   }
}
add3(5)
add3(5, 18)

function fullName(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Patrick',
    lastName: 'Anderson'
}
fullName(p);

interface Person {
    firstName: string;
    lastName?: string;
}

let p2 = {
    firstName: 'Patrick',
    lastName: 'Anderson'
}

function fullName2(person:  Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
fullName2(p2)

class Employee {
    public employeeName: string

    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
