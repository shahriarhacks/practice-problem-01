//No 1
// Objective: Write a TypeScript program that outputs a welcome message.
const firstProgram: string =
  "Hello World, I am SHAHRIAR AHMED. I will complete this course successfully and become a Next level Web Developer!";
// console.log(firstProgram);

//No 2
//Objective: Create a function with parameters and an optional literal type.

//Solution 1
function makeUserWithNullish(name: string, age: number, role?: string) {
  const roles = role ?? "Guest";
  return { name, age, role: roles };
}
const user = makeUserWithNullish("John Doe", 30, "Admin");
// console.log(user);

// Solution 2
const makeUserWithOptional = (
  name: string,
  age: number,
  role: string = "Guest"
) => {
  return { name, age, role };
};
const user2 = makeUserWithOptional("John Doe", 30, "User");
// console.log(user2);

// No 3
// Objective: Define a structured Person object using Type Aliases.

type NaturalHairColor =
  | "black"
  | "dark brown"
  | "brown"
  | "light brown"
  | "blonde"
  | "dark blonde"
  | "light blonde"
  | "red"
  | "auburn"
  | "copper"
  | "strawberry blonde"
  | "gray"
  | "white";

type EyeColor =
  | "brown"
  | "dark brown"
  | "light brown"
  | "hazel"
  | "amber"
  | "green"
  | "blue"
  | "gray"
  | "gray-blue"
  | "violet"
  | "black";

type Person = {
  name: string;
  address: string;
  hairColor: NaturalHairColor;
  eyeColor: EyeColor;
  income: number;
  expenses: number;
  hobbies: string[];
  familyMembers: Array<object>;
  job?: string;
  skills: string[];
  maritalStatus:
    | "single"
    | "married"
    | "divorced"
    | "widowed"
    | "living together";
  friends: object[];
};

// No 4
//Objective: Create union and intersection types using interfaces.

interface IBook {
  name: string;
  author: string;
  pages: number;
  publisher: string;
  edition: number;
  genre: string;
  language: string;
  isbn: string;
}

interface IMagazine {
  name: string;
  issuesNumber: number;
  month: string;
}

type TBookAndMagazine = IBook & IMagazine;
type TBookOrMagazine = IBook | IMagazine;

// No 5
//Objective: Write a function that reverses a string.

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
const reversedString = reverseString("Hello");
// console.log(reversedString);
// const spt = reversedString.split("");
// console.log(spt);
// const resvr = spt.reverse();
// console.log(resvr);
// const jon = resvr.join("");
// console.log(jon);

// No 6
//Objective: Write a function that uses the rest operator for variable-length arguments.

function sum(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
const sumOfNums = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11);
// console.log(sumOfNums);

// No 7
//Objective: Write a function that behaves differently based on the input type.

function checkBehave(input: string | number) {
  if (typeof input === "string") {
    return input.length;
  }
  if (typeof input === "number") {
    return input * input;
  }
}
// console.log(checkBehave("Hello"));
// console.log(checkBehave(10));

//No 8
//Objective: Practice using intersection types.

type TUser = {
  name: string;
  email: string;
};
type TAdmin = {
  adminLevel: number;
};

type TUserAdmin = TUser & TAdmin;

const describeAdmin = (user: TUserAdmin): string => {
  return `Name: ${user.name} and Email: ${user.email} his/her Admin Level is: ${user.adminLevel}`;
};
const userX: TUserAdmin = {
  name: "MS. AAL",
  email: "ms@aal.com",
  adminLevel: 3,
};
// console.log(describeAdmin(userX));

//No 9
// Objective: Use optional chaining with nested objects.

interface IEmployee {
  name: string;
  designation: string;
  salary: number;
  office: {
    officeNumber?: number;
    address: {
      city?: string;
      state?: string;
      postalCode: number | string;
    };
  };
}

const getEmployeeCity = (employee: IEmployee): string | undefined => {
  return employee?.office?.address?.city;
};

const employee: IEmployee = {
  name: "John Doe",
  designation: "Software Engineer",
  salary: 75000,
  office: {
    officeNumber: 101,
    address: {
      // city: "San Francisco",
      state: "CA",
      postalCode: 94105,
    },
  },
};
// console.log(getEmployeeCity(employee));

// No 10
//Objective: Use optional chaining with nested objects.
const getDisplayName = (name: string | null | undefined) => {
  return name ?? "Anonymous";
};

// console.log(getDisplayName("AAL"));

// No 11
// Objective: Handle different types with the unknown type.

const processData = (data: unknown): string | number => {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  } else {
    return `Type miss matched`;
  }
};

// console.log(processData({}));

// No 12
// Objective: Use the never type for functions that don’t return.

const handleError = (): never => {
  throw new Error("Error happened!");
};
// handleError();

//No 13
// Objective: Use generics to handle different types.

const removeDuplicates = <T>(arr: T[]): Array<T> => {
  return Array.from(new Set(arr));
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers);

const strings = ["apple", "banana", "apple", "orange"];
const uniqueStrings = removeDuplicates<string>(strings);
// console.log(uniqueStrings);

const mixed = [1, "apple", 2, "banana", 1, "apple"];
const uniqueMixed = removeDuplicates<string | number>(mixed);
// console.log(uniqueMixed);

//No 14
// Objective: Simulate an asynchronous operation with TypeScript.

type TUserData = {
  name: string;
  age: number;
};

const fetchUserData = async (): Promise<TUserData> => {
  return new Promise((resolve, reject) => {
    const user: TUserData = {
      name: "AAL",
      age: 20,
    };
    if (user) {
      resolve(user);
    } else {
      reject("There was nothing to load!");
    }
  });
};

const main = async () => {
  // console.log("Fetching user data...");
  const user = await fetchUserData();
  // console.log("User data fetched:", user);
};

main();

//No 15
//Objective: Create custom type guards for more accurate type checking.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const printUppercase = (value: unknown): string => {
  if (isString(value)) {
    return value.toUpperCase();
  } else {
    return "Provided value is't a string";
  }
};
// console.log(printUppercase(true));

//No 16
// Objective: Access object properties dynamically using keyof.

const getProperty = <T, X extends keyof T>(obj: T, key: X) => {
  return obj[key];
};

interface IUser {
  name: string;
  age: number;
  email: string;
}
const users: IUser = {
  name: "AAl",
  age: 20,
  email: "aal@declives.com",
};
console.log(getProperty(users, "age"));
