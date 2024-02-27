console.log("Q:2");
let message = "Hello Eric, would you like to learn some Python today?";
console.log(message);
console.log("-------------------------------------------");

console.log("Q:3");
let str: string = "anas";
console.log("UpperCase:" + str.toUpperCase());

console.log("LowerCase:" + str.toLowerCase());

console.log("TitleCase:" + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log("-------------------------------------------");

console.log("Q:4");

const quote = "Life is what happens to us While we are making other plans.";
const author = "ALLEN SAUNDERS";
console.log(`${quote}\n- ${author}`);

console.log("-------------------------------------------");

console.log("Q:5");

const quote1 = "Life is what happens to us While we are making other plans.";
const author1 = "ALLEN SAUNDERS";
const massage = `${quote}\n- ${author}`;
console.log(massage);

console.log("-------------------------------------------");

console.log("Q:6");

let person: string = " \t AR \n Rajput";
console.log(person);

let stripped: string = person.trim();
console.log(stripped);

console.log("-------------------------------------------");

console.log("Q:7");

let a = 5;
let b = 3;

console.log("Addition", a + b);
console.log("subtraction", a - b);
console.log("Multiplication", a * b);
console.log("Division", a / b);

console.log("-------------------------------------------");

console.log("Q:8");
// name : Anas Rajput
// date : 17/07/2025
// program name : (Dmas)
console.log("Addition", 5 + 3);
console.log("subtraction", 10 - 2);
console.log("Multiplication", 4 * 2);
console.log("Division", 16 / 2);

console.log("-------------------------------------------");

console.log("Q:9");
// name : Anas Rajput
// date : 17/07/2025
// program name : favourite number

let fav_no: number = 55;
const msg = `"My favourite number is : " ${fav_no}`;
console.log(msg);

console.log("-------------------------------------------");

console.log("Q:11");

let friend: string[] = ["hassan", "shaheer", "usman", "ahmer"];

for (let index = 0; index < friend.length; index++) {
    const element = friend[index];
    console.log("Friends" + (index + 1) + ":", element);
}

console.log("-------------------------------------------");

console.log("Q:12");

let friend1: string[] = ["hassan", "shaheer", "usman", "ahmer"];

for (let index = 0; index < friend1.length; index++) {
    const element = friend1[index];
    console.log("hello !", element, "you are my best friend ");
}

console.log("-------------------------------------------");

console.log("Q:13");

let transport: string[] = ["Motorcycle", "cycle", "car", "Helicopter"];

for (let index = 0; index < transport.length; index++) {
    const element = transport[index];
    console.log("I would like a ", element, ".");
}

console.log("-------------------------------------------");

console.log("Q:14");

let invite: string[] = ["hassan", "shaheer", "ahmer", "ahsan"];
// let newName : string = "ali";
invite.push("Ali");

for (let index = 0; index < invite.length; index++) {
    const element = invite[index];
    console.log("Mr ", element, "It is our pleasure to invite in you our party . \n\n Thank you");
}
console.log("-------------------------------------------");

console.log("Q:15");

let invite1: string[] = ["hassan", "shaheer", "ahmer", "ahsan"];
let absent_guest = "ahsan";
let new_guest = "Ali";
invite1[3] = new_guest;

for (let index = 0; index < invite1.length; index++) {
    const element = invite1[index];
    console.log("Mr ", element, "It is our pleasure to invite in you our party . \n\n Thank you\n");
}
console.log(`Mr. ${absent_guest} is not coming to the party .`);
console.log("-------------------------------------------");

console.log("Q:16");


let invite2: string[] = ["hassan", "shaheer", "ahmer", "ahsan"];
// let absent_guest = "ahsan";
// let new_guest = "Ali";
// invite1[3] = new_guest;

invite2.push("abrar", "ali");

for (let index = 0; index < invite2.length; index++) {
    const element = invite2[index];
    console.log("Mr ", element, "It is our pleasure to invite in you our party . \n\n Thank you\n");
}

console.log("-------------------------------------------");

console.log("Q:17");

let invite3: string[] = ["hassan", "shaheer", "ahmer", "ahsan"];
// let absent_guest = "ahsan";
// let new_guest = "Ali";
// invite1[3] = new_guest;
while (invite3.length > 2) {
    let remove_invite3 = invite3.pop();
    console.log(`mr: ${remove_invite3} sorry i have not arrange big table \n\n `);
}
for (let index = 0; index < invite3.length; index++) {
    const element = invite3[index];
    console.log("Mr ", element, "It is our pleasure to invite in you our party . \n\n Thank you\n");
}

console.log("-------------------------------------------");

console.log("Q:18");

let place: string[] = ["Paris", "Tokyo", "New York", "Machu Picchu", "Sydney"];
console.log("original order");
console.log(place);
console.log("\nAlphabetical order:");
console.log([...place].sort());
console.log("\noriginal order (unchanged)");
console.log(place);
console.log("\nReverse Alphabatic order");
console.log([...place].sort().reverse());
console.log("\nOriginal order unchanged");
console.log(place);
place.reverse();
console.log("\nReverse order");
console.log(place);
place.reverse();
console.log("\nback to original order");
console.log(place);
console.log("\nsorted in alphabatic order");
console.log([...place].sort());
place.reverse();
console.log("\nsorted in reverse alphabatic order");
console.log([...place].sort());

console.log("-------------------------------------------");

console.log("Q:19");

let invite4: string[] = ["hassan", "shaheer", "ahmer", "ahsan"];
console.log("The total number of inviting form dinner is . " + invite4.length);

for (let index = 0; index < invite4.length; index++) {
    const element = invite4[index];
    console.log("dear!", element, "I invite to you dinner");
}

console.log("-------------------------------------------");

console.log("Q:20");

let mountainsList: string[] = ["Mount Everest", "K2", "Denali", "Kangchenjunga", "Matterhorn"];
console.log("list of mountain:");
for (let index = 0; index < mountainsList.length; index++) {
    const element = mountainsList[index];
    console.log("The name of mountain is ", element);
}

console.log("-------------------------------------------");

console.log("Q:21");

let country1 = {
    name: "pakistan",
    capital: "islamabad",
    currency: "rupees"
};
let country2 = {
    name: "japan",
    capital: "tokyo",
    currency: "jpy"
};
let country3 = {
    name: "brazil",
    capital: "brasilia",
    currency: "brl"
};

console.log("country1:");
console.log("Name:" + country1.name);
console.log("Name:" + country1.capital);
console.log("Name:" + country1.currency);
console.log("\ncountry2:");
console.log("Name:" + country2.name);
console.log("Name:" + country2.capital);
console.log("Name:" + country2.currency);
console.log("\ncountry3:");
console.log("Name:" + country3.name);
console.log("Name:" + country3.capital);
console.log("Name:" + country3.currency);

console.log("-------------------------------------------");

console.log("Q:22");

let myArray : number[] = [1,2,3];
const element1 = myArray[5];
console.log(element1);

console.log("-------------------------------------------");

console.log("Q:23");

let car: string = 'Civic';

console.log("test1");
console.log("car == 'Civic'? I predict True.")
console.log(car === 'Civic');
console.log("test2");
console.log("car !== 'Civic'? I predict True.")
console.log(car !== 'honda');
console.log("test3");
console.log("car length is greater than 5 ? I predict True.")
console.log(car.length > 4);
console.log("test4");
console.log("car == 'Civic'? I predict True.");
console.log(car.toLowerCase() === 'Civic');
console.log("test5");
console.log("car == 'Civic'? I predict True.");
console.log(car.toUpperCase() === 'Civic');
console.log("test6");
console.log("car == 'Civic'? I predict False.")
console.log(car !== 'Civic');
console.log("test8");
console.log("car length is greater than 5 ? I predict false.")
console.log(car.length > 5);
console.log("test9");
console.log("car == 'Civic'? I predict false.")
console.log(car === 'honda');
console.log("test5");
console.log("car length is greater than 6? I predict True.");
console.log(car.length > 6);

console.log("-------------------------------------------");

console.log("Q:24");
let car1: string = 'Civic1';
let car2: string[] = ["Swift", "honda"];

console.log("test1");
console.log("car = 'civic1")
console.log(car1 === 'Civic1');
console.log("test2");
console.log("car not equal 'honda'? I predict True.");
console.log(car1 !== 'honda');
console.log("test3");
console.log("using lower case");
console.log(car1.toLowerCase());
console.log("test4");
console.log("car1 is greater than 5");
console.log(car1.length > 5);
console.log("test5");
console.log("car1 is less than 7");
console.log(car1.length < 7);
console.log("test6");
console.log("car1 is greater than or equal to 5");
console.log(car1.length >= 5);
console.log("test7");
console.log("car1 is less than or equal to 7");
console.log("test8");
console.log(car1 && car2);
console.log("test9");
console.log(car1 || car2);
console.log("test10")
console.log("whether an item is in a array");

console.log("Is 'honda' in the array? I predict True.");
console.log(car2.indexOf("honda") !== -1);
console.log("test11")
console.log("whether an item is in a array");

console.log("Is 'fortuner' in the array? I predict false.");
console.log(car2.indexOf("fortuner") !== -1);

console.log("-------------------------------------------");

console.log("Q:25");

let alien_color_pass: string = 'green';
if (alien_color_pass === 'green') {
    console.log("you have earned 5 points");
}
else {
    console.log("no points earned");
}
let alien_color_fail: string = 'red';
if (alien_color_fail === 'green') {
    console.log("you have earned 5 points");
}
console.log("-------------------------------------------");
console.log("Q:26");

// let alien_color_pass : string = 'green';
if (alien_color_pass === 'green') {
    console.log("you have earned 5 points");
}
else {
    console.log("no points earned");
}
// let alien_color_fail : string = 'red';
if (alien_color_fail === 'green') {
    console.log("you have just earned 10 points");
} else {
    console.log("no points earned");
}
console.log("-------------------------------------------");
console.log("Q:27");
let color : string = 'green';
let color1 : string = 'yellow';
let color2 : string = 'red';

if (color === 'green') {
    console.log("you have earned 5 points")    
}else if (color === 'yellow') {
    console.log("you have earned 10 points")    
}else if (color === 'red') {
    console.log("you have earned 15 points")    
}
if (color1 === 'green') {
    console.log("you have earned 5 points")    
}else if (color1 === 'yellow') {
    console.log("you have earned 10 points")    
}else if (color1 === 'red') {
    console.log("you have earned 15 points")    
}
if (color2 === 'green') {
    console.log("you have earned 5 points")    
}else if (color2 === 'yellow') {
    console.log("you have earned 10 points")    
}else if (color2 === 'red') {
    console.log("you have earned 15 points")    
}

console.log("-------------------------------------------");
console.log("Q:28");
let age: number = 25;

if (age < 2) {
    console.log("the person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("the person is a kid.");
} else if (age >= 4 && age < 13) {
    console.log("the person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("the person is a adult.");
} else {
    console.log("the person is a older.");
}

console.log("-------------------------------------------");
console.log("Q:29");

let fruits1: string[] = ["apple", "orange", "mango", "grapes", "banana"];

if (fruits1.indexOf("apple") !== -1) {
    console.log("really like apple!")
}
if (fruits1.indexOf("orange") !== -1) {
    console.log("really like orange!")
}
if (fruits1.indexOf("mango") !== -1) {
    console.log("really like mango!")
}
if (fruits1.indexOf("grapes") !== -1) {
    console.log("really like grapes!")
}
if (fruits1.indexOf("banana") !== -1) {
    console.log("really like banana!")
}

console.log("-------------------------------------------");
console.log("Q:30");

let username: string[] = ["admin", "hassan", "shaheer", "ahmer"];
for (let index = 0; index < username.length; index++) {
    const element = username[index];
    if (element === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${element}, thank you for logging in again.`)
    }
}

console.log("-------------------------------------------");
console.log("Q:31");

let users: string[] = [];

if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    console.log("some users!");
}

console.log("-------------------------------------------");
console.log("Q:32");

let current_users: string[] = ["anas", "shaheer", "hassan", "ahsan", "ali"];

let new_name: string[] = ["admin", "hassan", "shaheer", "ahmer", "Ali"];

for (let index = 0; index < new_name.length; index++) {
    const element = new_name[index];
    if (current_users.indexOf(element) !== -1) {
        console.log(`sorry the user ${element} is already taken.`);
    } else {
        console.log(`user ${element} is available`);
        current_users.push(element);
    }
}

console.log("updated list of user:", current_users);

console.log("-------------------------------------------");
console.log("Q:33");

let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < num.length; index++) {
    const element = num[index];
    let ordinalsuffix: string;
    if (element === 1) {
        ordinalsuffix = "st";
    } else if (element === 2) {
        ordinalsuffix = "nd";
    } else if (element === 3) {
        ordinalsuffix = "rd";
    } else {
        ordinalsuffix = "th";
    }
    console.log(`${element}${ordinalsuffix}`);
}

console.log("-------------------------------------------");
console.log("Q:34");

let pizzaNames: string[] = ["Pepperoni", "Margherita", "Supreme"];

for (let index = 0; index < pizzaNames.length; index++) {
    const element = pizzaNames[index];
    console.log(element);
}
for (let index = 0; index < pizzaNames.length; index++) {
    const element = pizzaNames[index];
    console.log(`i like ${element} pizza`);
}
console.log(" I really love pizza!");

console.log("-------------------------------------------");
console.log("Q:35");

let animal: string[] = ["cow", "goat", "camel"];

for (let index = 0; index < animal.length; index++) {
    const element = animal[index];
    console.log(element);
}
for (let index = 0; index < animal.length; index++) {
    const element = animal[index];
    console.log(`A ${element} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

console.log("-------------------------------------------");
console.log("Q:36");

function make_shirt(size: string, massag: string) {
    console.log(`shirt size: ${size}`)
    console.log(`massage on the shirt : ${massag}`);
}

make_shirt("large", "size");

console.log("-------------------------------------------");
console.log("Q:37");

function make_shirt1(size1: string = "large", massa: string = "i love typescript") {
    console.log(`shirt size: ${size1}`)
    console.log(`massage on the shirt : ${massa}`);
}

make_shirt1();
make_shirt1("medium");
make_shirt1("small", "coding is fun");

console.log("-------------------------------------------");
console.log("Q:38");

function describe_city(city: string, country: string = "default country") {
    console.log(`${city} is in ${country}`);
}

describe_city("karachi", "pakistan");
describe_city("delhi", "india");
describe_city("jaddah", "saudi arabia");

console.log("-------------------------------------------");
console.log("Q:39");

function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}
let location3: string = city_country("newyork", "usa");
let location1: string = city_country("mumbai", "india");
let location2: string = city_country("melbourne", "australia");

console.log(location3);
console.log(location1);
console.log(location2);

console.log("-------------------------------------------");
console.log("Q:40");

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album("Artist1", "Album One");
let album2 = make_album("Artist2", "Album Two", 12);
let album3 = make_album("Artist3", "Album Three", 8);

console.log(album1);
console.log(album2);
console.log(album3);

console.log("-------------------------------------------");
console.log("Q:41");

let magicianName : string[] = ["Merlin", "Houdini", "Gandalf", "David Copperfield"];

function show_magicians1(){
    console.log(`${magicianName}`);
}
show_magicians1();

console.log("-------------------------------------------");
console.log("Q:42");

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }   
}
let magicianNames1: string[] = ["Merlin", "Houdini", "Gandalf", "David Copperfield"];
let greatMagicians1: string[] = make_great(magicianNames1);

show_magicians(greatMagicians1);

console.log("-------------------------------------------");
console.log("Q:43");

console.log("original magician");
show_magicians(magicianName);
console.log("\n great magician");
show_magicians(greatMagicians1);

console.log("-------------------------------------------");
console.log("Q:44");

function makesandwich(...toppings : string[]){
    console.log("Making a sandwich with the following toppings:");
    for(let topping of toppings){
        console.log("-" + topping)
    }
    console.log("enjoy your sandwich!\n");
}
makesandwich("Turkey", "Cheese", "Lettuce", "Tomato");
makesandwich("Ham", "Swiss Cheese", "Mustard");
makesandwich("Peanut Butter", "Jelly");

console.log("-------------------------------------------");
console.log("Q:45");
interface Car {
    manufacturer: string,
    model: string,
    extras: {[key: string]: string}
  };  
  function createCar(manufacturer: string, model: string, extras: {[key: string]: string}){
    const car: Car = { manufacturer, model,extras};
    return car;
  }
  const myCar = createCar('Toyota', 'Camry', {color: 'Blue', optionalFeature: 'Sunroof'});
  console.log(myCar);
  