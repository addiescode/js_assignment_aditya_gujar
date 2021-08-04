Q1. 
var dateobj =
var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
How to fetch the millisecond according to universal time from a given Date object?
  
ANS(1):
  //var B = dateobj.getUTCMilliseconds();
  // Printing millisecond
  //console.log(B);

Q2.
Write a JavaScript program to display the reading status (i.e. display book name, author
name and reading status) of the following books.
var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

ANS(2):
//CODE
//for (var i = 0; i < library.length; i++) 
  // {
   // var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    //if (library[i].readingStatus) {
     // console.log("Already read " + book);
    //} else
   // {
     //console.log("You must need to read " + book);
    //}
   //}
OUTPUT:
//Already read 'Bill Gates' by The Road Ahead.
//Already read 'Steve Jobs' by Walter Isaacson.
//You must need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

Q3:
What will be the output of the following code?
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company);

ANS:
//The above code will give an error that employee is not defined at line no 54 it must be Employee if we 
//replace employee with Employee it will work.And also when we create object Emp1 and when we are
//accessing company emp1 has been used .In Console.log 'c' is capital it will through an error
//if we resolve all error we will be getting 
output as :Rohit

Q4:
Q4. Consider the two functions below. Will they both return the same thing? Why or why
not?
function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
{
bar: "hello"
};
}
//
ANS:
foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined
//
Why:
//The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form).
//As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(),
//a semicolon is automatically inserted immediately after the return statement

Q5:
var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
print(new_arr);
What will be the output for the above code?
  
Output:
//[1, 28, 39, 17, 32.5]

Q6:
const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
How to delete 'Beethoven' from set

ANS:set.delete('Beethoven') 


Q7:
 Create a nested array object called operatingSystem and add below key and values
Name - Ubuntu , version - 18.4 , license - open source

ANS:
CODE:
//const operatingSystem = {
  //  name: 'Ubuntu',
  //version: 18.04,
  //license: 'Open Source'
//};
//const entries = Object.entries(operatingSystem);
//console.log(entries);

//
Q8.
const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
How to copy values from one object to another in above mentioned example , merge and
print them?
 
ANS:
// Merge the objects
//const character = Object.assign(name, details);
//console.log(character)
OUTPUT:
//{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

Q9:
const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };
How to access and print greet function from the above object code?
  
OUTPUT:
//gimli.greet();

Q10:
Consider below as an example of constructor function where we want name and level to be
referred to a function itself, is below example correct or not? Please explain?
function Hero(name, level)
{
name = name;
level = level;
}

Explanation
//Incorrect
//We need to specify data type of name and level in Hero(char name[20], int level)









