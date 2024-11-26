let userName1:string;

userName1='nn';

let userID: string | number = 'abc';
userID=123;
console.log(userID)


// custom types
type StringOrNum=string|number;
let userID: StringOrNum= 'abc';
userID=123;
console.log(userID)

type User={
    name: string,
    age: number,
    isAdmin: boolean,
    id: string | number,
}

let user:User;

user = {
    name: 'max',
    age: 34,
    isAdmin: true,
    id: 234
};

console.log(user);
 
let hobbies:string[];
hobbies=['sports','cooking']


function add(a:number,b:number):void{
    const result=a+b;
    console.log(result)
}

function add(a:number,b:number):number{
    const result=a+b;
    return result
}
type AddFn = (a:number,b:number)=>number;

function calculate(a:number,b:number,calFun:AddFn){
    calFun(a,b)
}
calculate(2,3 ,add)


// interfaces
interface Credentials{
    password:string;
    email:string;
}
let cred: Credentials;

cred={
    password:'bfg',
    email:'jjj@gmail.com'
}

// we can use both type keyword and interface keyword for defining an object


//merging 
type Admin = {
    permissions:string[]
}

type ApUser ={
    userNam:string;
}

type AppAdmin = Admin & ApUser;

let admin:AppAdmin;

admin = {
    permissions:['krfjk'],
    userNam:'max'
 
}



//merging 
// interface Admin1  {
//     permissions1:string[]
// }

// interface ApUser1 ={
//     userName1:string;
// }

// interface AppAdmin1 extends Admin1,ApUser1{}
// let admin1:AppAdmin1;

// admin1 = {
//     permissions1:['krfjk'],
//     userName1:'max'
 
// }

// literal types in typescript

let role:"admin"|'user'|'editor';

role:"admin"
role:"user"
role:"editor"


// generic types
// generic types are the types that together with another type
let roles:Array <Role>;
roles=['admin','editor']


