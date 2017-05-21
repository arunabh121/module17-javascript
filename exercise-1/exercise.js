'use strict';

//Make a new variable `motto` for the value "The iSchool is my school"

var motto = "The iSchool is my school";

//Log out the motto

console.log(motto);


//Create a variable mottoLength that stores the length of the motto.
//Use the .length property
//Log out the length

var mottoLength = motto.length;
console.log(mottoLength);

//Convert motto to upper case, replacing the previous value
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
//Log out the changed motto

motto = motto.toUpperCase();
console.log(motto);


//Use the slice() method to extract the characters `ISCHOOL` into a new variable.
//Log out that variable

var iSchool = motto.slice(4, 11);
console.log(iSchool);


//Use the indexOf() method to see if the word "cool" is in your string
//Log out a boolean whether it is or not

console.log(motto.indexOf('cool') && true);



//Create a variable `name` that is your name (in all caps)

var name = 'ARUNABH';


//Create a variable `namePossessive` that is the `name` variable followed by an `'S`

var namePossessive = name + "'S";
console.log(namePossessive);

//Replace the word 'MY" in the motto with the `namePossessive` variable.
//Log out the new motto

var newMotto = motto.replace("MY", namePossessive);
console.log(newMotto);


//Log out the difference in length between the origial motto and the new motto

console.log(newMotto.length - motto.length);
