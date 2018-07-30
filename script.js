// 1. Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

function add(x , y) {
    console.log(x + y);
}

// Invoke add(5, 3) // Console returns 8
// Invoke add("Hello", " World!") // Console returns Hello World!

// 2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var goalie = [["glove", "blocker", "leg pads"], ["helmet", "c/a", "pants", "jock"], ["stick", "skates"]];

function outputGoalie(set, protection, accessories) {
    console.log(goalie[0][set], goalie[1][protection], goalie[2][accessories])
}

// Invoke outputGoalie(1,1,1) // Console returns blocker c/a skates

// 3. Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

function oneHundred() {

var z = prompt("Enter a number less than 100.");
var lessThan100 = parseInt(z);

    if (lessThan100 < 100) {
        alert("Your variable is less than 100.");
        console.log("variable is less than 100");
    } else if (lessThan100 === 100) {
        alert("variable is 100");
        console.log("variable is 100");
    } else {
        alert(z + " is greater than 100.");
        console.log("variable " + z + " is greater than 100.")
    }
}

// 4. Try running the script and then changing the variable's value to see how this affects the program's output.
//     Entering a number higher than 100 returns variable Z is greater than 100. Entering a number lower than 100 returns variable is less than 100. Entering 100 says variable is 100.

// 5. Write a similar script to check if a string stored in a variable is the same as another string.

function sameString() {

    var str1 = prompt("Enter a string.");
    var str2 = prompt("Enter the same string.");
    
    if (str1 === str2) {
        alert("These strings are the same");
        console.log("strings match")
    } else {
        alert("These are not the same strings");
        console.log("strings don't match");
    }
}

// 6. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

function named() {
    var named = prompt("Enter Name");
    alert("Your name is " + named);
    console.log("Your name is " + named);
}

// OR

function myNameIs(name) {
    console.log("My name is " + name);
}

// 7. Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.

function nothing() {
    console.log("something");
}

// 8. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function door(){

    var finished = false;
    
    while (finished === false) {
        var x = prompt("Enter Door 1, 2, or 3");
        var door = parseInt(x)
        
        if (door === 1) {
            alert("Door #1 prize is a burrito");
            finished = true;
        } else if (door === 2) {
            alert("Door #2 prize is an empty box");
            finished = true;
        } else if (door === 3) {
            alert("Door #3 prize is a kick to the nuts");
            finished = true;
        } else {  
            alert("Not a door, doofus!")
        }
    }
}