

let pi =3.1415;
let radius = 5; //Sq meters
// Area witch plants are contained
let area = pi*radius*radius;

//Number of plants per week
let week1 = 20; //Ask user for number of weeks
let week2 = week1*2;
let week3 = week2*2;

let minimumSpacePerPlant = 0.8 //Measured in Sq meters

// Plant area per week.
let week1Area = week1* 0.8;
let week2Area = week1Area*2;
let week3Area = week2Area*2;

console.log("The size of the garden is" , area);

//Week 1 plant care

console.log("Week 1 Plant Result:");
if (week1Area > area*0.8){
    console.log("Only after one week you let the plants grow this much??? Prune them");
}  else if(week1Area > area*0.5 && week1Area < area*0.8) {
        console.log("Plants are being Monitored closley. . .you can stop");
} else{
    console.log("You can become Harry Potter! more room to plant");
}
console.log("");
//Week 2 plant care
console.log("Week 2 Plant Result:");

if (week2Area > area*0.8){
    console.log("You only lasted 2 weeks, tsk tsk");
}  else if(week2Area > area*0.5 && week2Area < area*0.8) {
        console.log("Plants are being Monitored closley. . .you can stop");
} else{
    console.log("You can become Harry Potter! more room to plant");
}


//Week 3 Plant care
console.log("Week 3 Plant Result:");

if (week3Area > area*0.8){
    console.log("Son I am dissapoint, no garden for you, Prune those plants!");
}  else if(week3Area > area*0.5 && week3Area < area*0.8) {
        console.log("Plants are being Monitored closley. . .you can stop");
} else{
    console.log("You can become Harry Potter! more room to plant");
}

console.log("");
// Part 2: Thinking Bigger

let plants =100;
let numberOfWeeks = 10;
let week10Area = 2**numberOfWeeks*10; 

let phillipRadius = (week10Area/pi)**0.5; // Radius of expanded garden.
console.log("The size of the expanded garden will be ",phillipRadius, "square meters");

console.log("");

//Part 3: Errors in Judgement
let adamPlant = minimumSpacePerPlant * plants;
console.log(adamPlant); // Number of space 100 plants would take

try {
    if (area>=adamPlant) {
        console.log("Have space!")
    } else {
        throw "You crazy!!! there is no space";
    }
} catch (error) {
    console.log(error);
} finally {
    console.log('this runs if there is an error or if there is no error')
}
