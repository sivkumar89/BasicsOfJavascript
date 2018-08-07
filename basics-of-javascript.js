(function(){
  "use strict";
  var firstName, lastName, fullName;
  firstName="Sivakumar";
  lastName="Ragaiah";
  fullName=firstName+" "+lastName;
  var age = 25;
  var gender = "male";
  var str = "The history of all previous societies has been the history of class struggles";
  console.log("\n\t\t\t\t\t\t\t\t\t\t%c************************Basics Of Javascript************************", 'background: black; color:yellow; font-size:24px;');
  console.log("\n\n\t\t\t\t\t\t\t\t\t\t\t%c How to declare & assign variables ?",'background: yellow; color:black;font-size:18px;');
  console.log("\n\n\t\t\t%c var firstName,lastName,fullName;\t\t\t%c//How to declare variables",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c firstName = 'Sivakumar';\n lastName  = 'Ragaiah';\t\t\t\t\t%c//How to assign variables",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t\t\t\t\t\t\t\t\t%c How to compute variables ?",'background: yellow; color:black;font-size:18px;');

  console.log("\n\n\t\t\t%c fullName=firstName+' '+lastName;\t\t\t%c//How to compute variables",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c value of fullName is %c"+fullName+"\t%c//computed value",'color:#0055b1;','color:#dc3545;','color:#2d890b;');

  console.log("\n\n\t\t\t\t\t\t\t\t\t\t\t%c Data types in Javascript",'background: yellow; color:black;font-size:18px;');
  console.log("\n\t\t\t%c var age = 25;\t\t\t\t%c//Number",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c var gender = 'male';\t\t%c//String",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c var person = {firstName:'siva', lastName:'kumar', age:25};\t\t\t%c//Object",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t\t\t\t\t\t\t\t\t%c typeof operator in Javascript",'background: yellow; color:black;font-size:18px;');
  console.log("\n\t\t\t%c typeof '';\t\t\t\t%c//Returns "+typeof '','color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c typeof 3.14;\t\t\t%c//Returns "+typeof 3.14,'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c typeof true;\t\t\t%c//Returns "+typeof true,'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c typeof person;\t\t\t%c//Returns "+typeof person,'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c typeof [10,20,30];\t\t%c//Returns "+typeof [10,20,30]+" (not array, cuz in javascript arrays are object)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c typeof x;\t\t\t\t%c//Returns "+typeof x+"(if x has no value)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t\t\t\t\t\t\t\t\t%c String Properties & Methods in Javascript",'background: yellow; color:black;font-size:18px;');
  console.log("\n\t\t\t%c firstName.length;\t\t%c//Returns "+firstName.length,'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c str=%c'"+str+"';\t\t\t",'color:#0055b1;','color:#dc3545; font-size: 20px;');
  console.log("\n\t\t\t%c str.indexOf('history'); \t\t\t%c// Returns "+str.indexOf('history')+" (Returns the index of the %cfirst occurrence of a specified text)",'color:#0055b1;','color:#2d890b;','font-weight: bold;');
  console.log("\n\t\t\t%c str.indexOf('history',15); \t\t%c// Returns "+str.indexOf('history',15)+" (Returns the index of the %cfirst occurrence of a specified text, 2nd parameter is the starting position)",'color:#0055b1;','color:#2d890b;','font-weight: bold;');

  console.log("\n\n\t\t\t%c str.lastIndexOf('history'); \t\t%c// Returns "+str.lastIndexOf('history')+" (Returns the index of the %clast occurrence of a specified text)",'color:#0055b1;','color:#2d890b;','font-weight: bold;');
  console.log("\n\t\t\t%c str.lastIndexOf('history',15); \t%c// Returns "+str.lastIndexOf('history',15)+" (Returns the index of the %clast occurrence of a specified text, 2nd parameter is the starting position)",'color:#0055b1;','color:#2d890b;','font-weight: bold;');

  console.log("\n\n\t\t\t%c str.search('history'); \t\t\t%c// Returns "+str.search('history')+" (Searches a string for a specified value and returns the position of the match)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c str.slice(4,11); \t\t\t\t\t%c// Returns '"+str.slice(4,11)+"' (Extracts a part of a string based on starting and ending position slice(startingPostion, endingPosition))",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c str.substr(4,7); \t\t\t\t\t%c// Returns '"+str.substr(4,7)+"' (similar to slice() but second parameter specifies the length of the extracted part)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c var newStr = str.replace('history', 'chronicle'); \t\t\t%c// Returns '"+str.replace('history', 'chronicle')+"'",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c var newStr = str.toUpperCase(); \t\t\t%c// Returns '"+str.toUpperCase()+"'",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c var newStr = str.toLowerCase(); \t\t\t%c// Returns '"+str.toLowerCase()+"'",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c var newStr = firstName.concat(' G ',lastName); \t\t\t%c// Returns '"+firstName.concat(' G ',lastName)+"'",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c str.trim(); \t\t\t\t\t\t%c// Removes whitespace from both sides of a string.",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c firstName.charAt(2); \t\t\t\t%c// Returns '"+firstName.charAt(2)+"' (Returns the character at a specified index (position) in a string)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c firstName.charCodeAt(2); \t\t\t%c// Returns '"+firstName.charCodeAt(2)+"' (Returns the unicode of the character at a specified index in a string)",'color:#0055b1;','color:#2d890b;');
  var newStr = str.split(' ');
  console.log("\n\t\t\t%c var newStr = str.split(' '); \t\t\t%c// Converts string into array based on split expression(',',' ','-')",'color:#0055b1;','color:#2d890b;');
  console.log(newStr);

  console.log("\n\n\t\t\t\t\t\t\t\t\t\t\t%c Number Properties & Methods in Javascript",'background: yellow; color:black;font-size:18px;');
  console.log("\n\t\t\t%c age.toString(); \t\t\t%c// Returns '"+age.toString()+"' (Returns a number as a string)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c var x = 9.86496;",'color:#0055b1;');
  var x=9.86496;
  console.log("\n\t\t\t%c x.toFixed(0); \t\t\t\t%c// Returns "+x.toFixed(0)+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c x.toFixed(2); \t\t\t\t%c// Returns "+x.toFixed(2)+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c x.toFixed(3); \t\t\t\t%c// Returns "+x.toFixed(3)+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c x.toFixed(4); \t\t\t\t%c// Returns "+x.toFixed(4)+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t%c x.toPrecision(); \t\t\t%c// Returns "+x.toPrecision()+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c x.toPrecision(2); \t\t\t%c// Returns "+x.toPrecision(2)+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c x.toPrecision(3); \t\t\t%c// Returns "+x.toPrecision(3)+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c x.toPrecision(4); \t\t\t%c// Returns "+x.toPrecision(4)+" (Returns a string, with the number written with a specified number of decimals)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t%c Number('10.89'); \t\t\t%c// Returns "+Number('10.89')+" (It is used to convert JavaScript variables to number)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c Number(true); \t\t\t\t%c// Returns "+Number(true)+" (It is used to convert JavaScript variables to number)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c Number(new Date()); \t\t%c// Returns "+Number(new Date())+" (It can also convert a date to a number)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t%c parseInt('10'); \t\t\t%c// Returns "+parseInt('10')+" (parses a string and returns a whole number. Spaces are allowed. Only the first number is returned)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c parseInt('10.89'); \t\t%c// Returns "+parseInt('10.89')+" (parses a string and returns a whole number. Spaces are allowed. Only the first number is returned)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c parseInt('10 20')); \t\t%c// Returns "+parseInt('10 20')+" (parses a string and returns a whole number. Spaces are allowed. Only the first number is returned)",'color:#0055b1;','color:#2d890b;');

  var cities = ['Agra','Bangalore','Chennai','Delhi','Hyderabad','Kochin','Mumbai'];
  console.log("\n\n\t\t\t\t\t\t\t\t\t\t\t%c Array Properties & Methods in Javascript",'background: yellow; color:black;font-size:18px;');
  console.log("\n\t\t\t%c var cities = ['Agra','Bangalore','Chennai','Delhi','Hyderabad','Kochin','Mumbai'];",'color:#0055b1;');
  console.log("\n\t\t\t%c cities.toString(); \t\t\t%c// Returns "+cities.toString()+" (Converts an array to a string of (comma separated) array values)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c cities.join('_/\\_'); \t\t\t%c// Returns "+cities.join('_/\\_')+" (Converts an array to a string of (comma separated) array values)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\t\t\t%c cities.pop(); \t\t\t\t\t%c// Returns "+cities.pop()+" (Removes the last element from an array and returns the value that was 'popped out')",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c Now cities = "+cities+"%c\t\t// Removee 'Mumbai' from the array since it was the last element",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c cities.push('Goa'); \t\t\t%c// Returns "+cities.push('Goa')+" (Adds a new element to an array (at the end) and returns the new array length)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c Now cities = "+cities+"%c\t\t// Adds 'Goa' at the end of array",'color:#0055b1;','color:#2d890b;');

  console.log("\n\t\t\t%c cities.shift(); \t\t\t\t%c// Returns "+cities.shift()+" (Removes the first array element and 'shifts' all other elements to a lower index and returns the string that was 'shifted out')",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c Now cities = "+cities+"%c\t\t// Removes 'Agra' from the array since it was the first element",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c cities.unshift('Agra'); \t\t\t\t%c// Returns "+cities.unshift("Agra")+" (Adds a new element to an array (at the beginning), and returns the new array length)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c Now cities = "+cities+"%c\t\t// Adds 'Agra' into the array's first position",'color:#0055b1;','color:#2d890b;');

  console.log("\n\t\t\t%c cities.splice(2,0,'Bhopal','Chandigarh'); %c// Removes elements without leaving 'holes' in array (1st param defines position where new elements should be added, 2nd param defines how many elements should be removed.)",'color:#0055b1;','color:#2d890b;');
  cities.splice(2,0,'Bhopal','Chandigarh')
  console.log("\n\t\t\t%c Now cities = "+cities+"%c\t\t// Added 'Bhopal', 'Chandigarh' at 2nd position of the array ",'color:#0055b1;','color:#2d890b;');

  console.log("\n\t\t\t%c cities.splice(3,1,'Coimbatore'); \t\t\t%c// 1st parameter defines position where new elements should be added and 2nd parameter defines how many elements should be removed.)",'color:#0055b1;','color:#2d890b;');
  cities.splice(3,1,'Coimbatore')
  console.log("\n\t\t\t%c Now cities = "+cities+"%c\t\t// Adds 'Agra' into the array's first position",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t%c var unionTerritory = cities.slice(8);\t\t%c// slices(cuts) out a piece of an array into a new array and it does not remove any elements from the source array",'color:#0055b1;','color:#2d890b;');
  var unionTerritory = cities.slice(8);
  console.log("\n\t\t\t%c Now unionTerritory = "+unionTerritory+"%c\t\t\t\t\t// Returns new array (slices out a part of an array starting from array element 8)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t%c var southCities = cities.slice(3,5);\t\t%c// slices(cuts) out a piece of an array into a new array and it does not remove any elements from the source array",'color:#0055b1;','color:#2d890b;');
  var southCities = cities.slice(3,5);
  console.log("\n\t\t\t%c Now southCities = "+southCities+"%c\t\t// Return new array into southCities (selects elements from the start argument, and up to (but not including) the end argument)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\n\t\t\t%c var southAndUnionTerritory = southCities.concat(unionTerritory);\t\t%c// Creates a new array by merging (concatenating) existing arrays",'color:#0055b1;','color:#2d890b;');
  var southAndUnionTerritory = southCities.concat(unionTerritory)
  console.log("\n\t\t\t%c Now southAndUnionTerritory = "+southAndUnionTerritory+"%c\t\t\t\t\t// Does not change the existing arrays. It always returns a new array",'color:#0055b1;','color:#2d890b;');

  console.log("\n\t\t\t%c cities.sort(); \t\t\t%c// Returns "+cities.sort()+" (Sort an array alphabetically)",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c cities.reserve(); \t\t\t%c// Returns "+cities.reverse()+" (Sort an array in descending orderma separated) array values)",'color:#0055b1;','color:#2d890b;');

  console.log("\n\t\t\t%c cities.forEach(function(element,index) { console.log(element+' = '+index); }); %c//  Calls a function once for each array element",'color:#0055b1;','color:#2d890b;');
  cities.sort();
  cities.forEach(function(element,index) {
    console.log("\t\t\t\t"+element+" = "+index);
  });

  var cityState = cities.map(function(value,index,array) {  return value+' Ind'; });
  console.log("\n\t\t\t%c var cityState = cities.map(function(value,index,array) { return value+' Ind'; }); %c//  Returns a new array by performing a function on each array element",'color:#0055b1;','color:#2d890b;');
  console.log("\n\t\t\t%c Now cityState = "+cityState+"%c\t\t\t\t\t// Creates a new array by performing a action on each array element. Does not change the existing arrays. It always returns a new array",'color:#0055b1;','color:#2d890b;');


})();
