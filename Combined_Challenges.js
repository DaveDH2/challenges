

/**
 *  Challenge: Conditionals:
 */

{
  'title': 'Get out your party shoes!',
  'instructions': 'Really often in coding, you want to be able to (1) execute some code if one statement is true, \
  (2) execute different code if another statement is true or (3) \
execute some default code if neither (1) or (2) is the case.  The outline for how to do this is: \


   <br> if(thisIsTrue){\
    <br>   // do something;\
   <br> } else if(somethingElse){\
    <br>    // do something different;\
  <br>  } else{\
  <br>  // do the default; \
  <br>  } \

  <br>Imagine you are trying to figure out what to wear to this Saturday\'s killer party.  Chloe thinks you should wear a skirt.  Bethany definitely thinks it is a jeans type of affair.  \
  Stephanie thinks it is really casual.   \
  <br>Fill in the function pickShoes so that if you go with jeans, your function returns "boots", \
  if you choose a skirt, your function returns "platforms" and \
  if you wear anything else, your function returns "flip flops."',
  'content':   'var pickShoes = function(clothes){ \
    \n\n if(clothes ==="jeans"){ \
     \n\n  //enter code here \
    \n } else if(clothes==="skirt"){ \
    \n\n  //enter code here \
    \n } else { \
    \n  //enter code here \
    \n } \
  \n };',
  'testCode': 1,
  'pointValue': 100,
  'hint1': "Did you make sure to return a string for each condition (for instance, for the 'jeans' option, did you enter 'return \"boots\"'?",
  'hint2': "Did you enclose your strings in quotes?"
}



var conditionalTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "You got it!"
 }
 if(pickShoes("jeans") !== "boots"){
   result.pass = false;
   result.message = "What are you wearing with your jeans?  Boots might be a good choice..."
   return result;
 } 
 if(pickShoes("skirt") !== "platforms"){
   result.pass = false;
   result.message = "What are you wearing with your skirt?  Platforms might be a good choice..."
   return result;
 } 
 if(pickShoes("anything") !== "flip flops"){
   result.pass = false;
   result.message = "It doesn\'t look like you are defaulting to flip flops."
   return result;
 } 


 return result
}

//Challenge: Variables

{

  'title': 'Puppies v. Kittens',
  'instructions': 'JavaScript variables can be thought of like nicknames.  If you had a dog named Santa\'s Little Helper, you might not want to have \
  to say Santa\'s Little Helper every time you call him.  You might instead take to calling him Fuzzball.  Fuzzball then would be a variable \
  that refers to Santa\'s Little Helper.  You would declare this variable by writing: \
  <br> var Fuzzball = "Santa\'s Little Helper"; /

  <br>When you first define a variable you need to use that "var" keyword.  After that, you can change what Fuzzball is referring to without stating "var".\
    For instance, if Santa\'s Little Helper gets a furcut and you decide that your cat, Grinchy is more like a Fuzzball, \
  then you could reassign Fuzzball to Grinchy by just writing: \
  <br>Fuzzball = "Grinchy";
  <br>Then, whenever you call Fuzzball you would be calling Grinchy (though she might ignore you).  \
  <br>You can pick pretty much anything you want for variable names so long as (1) they aren\'t a few reserved magical JavaScript words, (2) they can\'t \
    start with a number, and (3) they can\'t have spaces.  Note that capitalization matters.  Fuzzball is not the same as fuzzball.\
  <br>In the editor, define the variable "DuchessFlufferton" and assign it to either "puppy" or "kitten".',
  'content': 'var puppiesVkittens = function(){ \
    \n //enter code here \
    \n return DuchessFlufferton \
    \n }',
  'testCode': 1,
  'pointValue': 20,
  'hint1': "Did you make sure to start with the 'var' keyword?", 
  'hint2': "Did you make sure there is no space between 'Duchess' and 'Flufferton'?"
}




var variableTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "You got it!"
 }
 if(puppiesVkittens() !== "puppy" && puppiesVkittens() !== "kittens"){
   result.pass = false;
   result.message = "Uh oh, it looks like DuchessFlufferton has not been assigned to either 'puppy' or 'kitten'.  Try again.";
   return result;
 } 


 return result
}



//Challenge: Variable scope

{
  'title': 'Not that jacket!',
  'instructions': 'What would happen if every time you created a variable in your code it had meaning everywhere else in your code? \
  There would be sheer chaos!  If you tried creating a new variable that had the same name as a prior variable, you would overwrite the prior variable. \
  So, your code would no longer work as you expected. \
  <br>Scopes to the rescue!  In JavaScript, each function has its own scope.  So, if you create a variable within a function\'s squiggly brackets, \
  that variable will only have the given meaning within those squiggly brackets (and would return undefined outside of those brackets or could \
  have a totally different meaning outside of those brackets).  If you have a function within a function, a variable defined \
  within the inner function would only have meaning in the inner function but a variable in the outer function would have meaning in both \
  the inner function and the outer function.  If a variable is defined outside of any function, it is in the global scope and has meaning \
  everywhere.  So, be careful with those global variables to avoid chaos.  \
  <br>Let\'s see this in action.  Imagine you have the best jacket ever in your closet and you want your mom to get it from \
  your room and bring it with her when she picks you up from school to take you to your debate competition.  \
  Sounds simple enougth, but the plot thickens.  You also have a mediocre jacket on the floor of your room outside your closet.  \
  <br>The code in the editor \
  has a getFromCloset function within a getFromRoom function.  Both function uses the variable jacket. If you refer to both jackets by the term "jacket" \
  there is the risk you will be debating enrobed in mediocrity.  \
  <br>Modify the code so that getFromRoom returns the best jacket ever for your mom to bring to you.',
  'content': 'var getFromRoom = function(){
      \n var jacket = "mediocre jacket";
      \n   var getFromCloset = function(){
      \n     var jacket = "best jacket ever"
      \n  
      \n }
      \n return jacket;
  \n}',
  'testCode': 100,
  'pointValue': 40,
  'hint1': 'The function getFromCloset is not actually getting called so its meaning for jacket is never being used.',
  'hint2':  'Try changing the string being assigned to jacket in the outer function to the jacket you want.'
}



var variableScopeTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "You got it!"
 }
 if(getFromRoom() !== "best jacket ever"){
   result.pass = false;
   result.message = "Not quite.  Keep trying!";
   return result;
 } 


 return result;
}



//Filter challenge:

{
  'title': 'College Application Time!',
  'instructions': 'You are applying to college and your guidance counselor gives you a list of possible schools.  You obviously do not want to \
  waste your time on schools that do not have an excellent computer science department.  \
  <br> Luckily JavaScript has a filter method for arrays that will allow you to remove the unworthy schools from the list.  The filter method loops through \
  each item in an array, tests each item in the array and returns a new array with only those items that pass the test.  \
  The "test" is a callback function which the filter method takes as an argument.  The callback function is then called with each item in the array as its argument.  \
  <br> Complete the code to the right so you have a list of just the schools worthy of your consideration.',
  'content': 'var colleges = [{name: "Stanford", computerScience: true}, {name: "OldSchool", computerScience: false}, \
  \n{name: "Berkeley", computerScience: true}, {name: "OutDatedU", computerScience: false}]; \
  \n\n var worthyColleges = colleges.filter(function(item){ \
  \n\n//your code here \
  \n\n});',
  'testCode': 1,
  'pointValue':50,
  'hint1': 'Your callback function should return either true or false.',
  'hint2':  'From within the callback function, to access whether a school in the array has a computer science department, you would write "item.computerScience".',

}



var filterTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "Congratulations! You passed!"
 }
 if(worthyColleges.length < 2){
   result.pass = false;
   result.message = "Whoa, there!  It looks like you got too aggressive filtering the list.  There should be two schools left."
   return result;
 } else if (worthyColleges.length > 2){
   result.pass = false;
   result.message = "Hmmm...looks like you still have an unworthy school in the list."
   return result;
 }
 return result
}


//To uppercase

{
  'title': 'Quidditch Victory',
  'instructions': 'Your team just won the Quidditch world championships!  You want to scream your excitement with an all caps "GO HUFFLEPUFF!"\
  but do not want to have to type all of those pesky capitalized letters.  JavaScript to the rescue!  JavaScript has a string method ".toUpperCase()"\
  Fill in the code to the right so that the function "shoutOut" returns "GO HUFFLEPUFF!"  Do not just re-type the shout.  Instead use the ".toUpperCase()"\
  method.',
  'content': 'var shoutOut = function(){ \
    \n\n var victoryShout = "go Hufflepuff!"\
    \n\n //your code here \
    \n\n return victoryShout\
    \n\n }',
  'testCode': 2,
  'pointValue': 10
  'hint1': 'Did you make sure to put parentheses at the end of ".toUpperCase()"?  These are needed to invoke the method.',
  'hint2': 'Your code should take the victoryShout variable and add the ".toUpperCase()" method at the end.'
}


var upperCaseTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "Congratulations! You passed!"
 }
 if(shoutOut() !== "GO HUFFLEPUFF!"){
   result.pass = false;
   result.message = "I'm not feeling the enthusiasm.  Try again!"
   return result;
 } 
 return result
}

//String reverse

{
'title': 'Secret Message',
'instructions': "Your friend Kayla is also getting into coding and she sent you a message.  Before she sent it to you though 
she reversed the message (which is a string).  Complete the function in the editor to reverse the string back to normal so you can read \
the message.",
'content': 'var KaylaMessage = "!kcab em egasseM  .redoc revelc repus ma I";\
\n\n var reverseIt = function(KaylaMessage){ \
\n\n //your code here \
\n\n }',
'testCode': 3,
'pointValue': 50,
'hint1': 'Make sure your function returns a string.',
'hint2': 'A reverse for-loop would do the trick here or there is a reverse method for arrays.  So, if you convert your string to an \
array, you could use the array reverse method and then convert back to a string with the join method.',

}


var reverseTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "You got it! Kayla's message was 'I am a super clever coder.  Message me back!'."
 }
 if(reverseIt() !== "I am a super clever coder.  Message me back!"){
   result.pass = false;
   result.message = "Not quite.  Keep trying!"
   return result;
 } 
 return result
}



//String loop

{
  'title': '#string_looping',
  'instructions': 'Your friend Charlotte is obsessed with turning anything and everything into a hashtag expression.  #obsessed  You are considering an intervention.\
  Before you order catering for the intervention, you want to make sure you have some proof.  \
  <br>Luckily, you have an e-mail from Charlotte.  The full e-mail message\
  is a string and is in the editor.  Fill in the code in the editor, so that the function \
  countHashtags returns the number of times "#" appears in any string.  That way you can count up the hashtags in Charlotte\'s message without having to do it #manually.', 
  'content': 'var emailFromCharlotte = "Could you believe gym class today?  #ridiculous #gym #class #gymclass.  If they wanted us to play #tennis they could have at least \
  spread us out on more than two courts.  #courts #play #crowded #noworkout #fitSomeOtherDay  I should really have a talk with Coach.  #one_on_one #coach #sitdown"; \
  \n\n var countHashtags = function(anyString){ \
    \n\n //your code here \
    \n\n \
    \n\n \
  };',
  'testCode': 4,
  'pointValue': 40,
  'hint1': 'If you set a variable such as count to 0, then loop through the inputted string, you could increment the count variable each time you find "#"',
  'hint2': 'Make sure your function returns a number.  If you set up a variable and then indreased it every time you found "#", make sure to return that variable.',
}



var stringLoopTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "#GreatJob!  #SuperCoder"
 }
 if(typeof(countHashtags()) !== "number"){
   result.pass = false;
   result.message = "You are not returning a number.  Make sure that countHashtags returns a number."
   return result;
 } 
 if(countHashtags('#d#kj#kj#') !== 4){
  result.pass = false;
  result.message = "Not quite.  Your count is off."
 }
 return result
}







//Strings

{
  'title': 'String Theory',
  'instructions': 'In JavaScript you can put any keyboard characters you want in quotes and you have created a "string".  A string can be made up of a single letter, \
  a single word or whole paragraphs.  The sky is the limit.  In the editor, create a string that contains your favorite hashtag for selfies.',
  'content': '//type your string here' ,
  'testCode': 2,
  'pointValue': 10,
  'hint1': 'Did you place your string in matching quotes (either both single quotes or both double quotes)?',
  'hint2':  'My answer would be "#filtersforever".'
}


var stringTest = function(userCode){
 var userString = eval(userCode);
 var result = {
   pass: true,
   message: "Nice!  You've stringified!"
 }
 if(typeof(userString) !== "string"){
   result.pass = false;
   result.message = "You do not have a string in the editor.  Make sure that you enclosed your string in matching quotes."
   return result;
 } 
 return result
}


//Math Random

{
  'title': 'You had me at chocolate salted caramel with tiramisu topping',
  'instructions': 'Has the cupcake trend run its course or are there more delectable confections to be created?  Hard to know.  Let\'s see if JavaScript\'s \
  Math.random() can help us tackle this critical challenge.  \
  <br>Math.random() returns a random number between 0 and 1 (including 0 but excluding 1) So, if we want a random number between some minimum and some \
  maxiumum (including the maximum), we would have to use: \
  <br>Math.floor(Math.random()*(max-min+1)+min) \
  <br>Math.floor rounds down to the nearest integer.  By multiplying Math.random() by (max-min +1) and adding the min, we get our desired range of numbers. \
  <br>Back to the cupcakes.  Imagine you had an array with 20 cupcake flavors.  Use Math.random() to take three randomly chosen flavors from the array and combine them into \
  one incredible cupcake flavor combination.',
  'content': 'var flavors = ["marshmallow", "cotton candy", "candy cane", "lemon drop", "jelly bean", "brownie", "cheesecake", "apple pie", "tootsie roll", \
  "s\'mores", "chocolate cake", "popcorn", "gummi bear", "sprinkle", "toffee", "espresso", "pudding", "pretzel", "peanut butter", "Cap\'n Crunch"] \
  \n\n var cupcakeCreator = function(){ \
  \n\n   var newFlavor = "" \
  \n\n   //your code here
  \n\n   return newFlavor; \
  \n\n  }',
  'testCode': 4,
  'pointValue': 100,
  'hint1': 'Use Math.floor(Math.random()(20)) to find a random number between 0 and 19 (including 0 and 19).  This will give us a way to pick a random index from the flavors array. \
  Once you have a random index, you can call flavors[index] to pull a flavor and save it with a variable like "randomFlavor".',
  'hint2': 'Once you have a random flavor pulled from the flavors array saved as randomFlavor you can add it to your newFlavor variable by stating: \
  <br>newFlavor = newFlavor + " " + randomFlavor; \ 
  <br>Repeat that process three times and you might have the next killer confection on your hands.'
}

var mathRandomTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "Congratulations! You are destined for cupcake greatness!"
 }
 if(typeof(cupcakeCreator()) !== "string"){
    result.pass = false;
    result.message = "You are not returning a string."
 }
 if(cupcakeCreator().split(" ").length < 3){
   result.pass = false;
   result.message = "Doesn't look like you are returning enough flavors."
   return result;
 }  
 return result;
}


//Null versus undefined

{
  'title': 'To not to be or to really not to be',
  'instructons': 'JavaScript is quite serious about a thing not being.  So much so that it has two different values to represent nothingness. \
  "Null" is used when it is certain that something does not exist.  "Undefined" is used when it is unknown what an item is or whether it exists.  For instance, \
  if Juliet were single because she dumped her boyfriend Romeo, you would say "var JulietBoyfriend = null".  But if you are uncertain as to whether \
    Juliet has a boyfriend or you do not know his name, you would say "var JulietBoyfriend = undefined".  "Undefined" and "null" are both called \
  "falsy" values in JavaScript.  This means the expression !undefined (the exclamation point meaning "not") evaluates to true and the expression !null evaluates \
  to true.  Strangely, neither null nor undefined actually equals false in JavaScript. /
  <br>Enough fun facts.  Your buddy Benvolio just called and said he has heard that a party has been declared for this Friday.  He had no further information yet. \
  In the editor, write "null" if you think the variable "party" would evaluate to null in this instance or "undefined" if you think it would evaluate to "undefined".',
  'content': '//enter code here',
  'testCode': 4,
  'pointValue': 50,
  'hint1': 'Benvolio has declared the party variable so it exists, but it does not have a meaning yet.',
  'hint2': 'Undefined and null are not strings.  So, your solution should not be in quotes.  You should just write null or undefined.'

}

var undefinedTest = function(userCode){
 var userInput = eval(userCode);
 var result = {
   pass: true,
   message: "Congratulations! Time to party!"
 }
 if(typeof(userInput) !== "undefined"){
    result.pass = false;
    result.message = "The party variable has been declared but not assigned to anything yet.  This means it is undefined."
 }
 return result;
}


// .length


{
  'title': 'A Good Man-darin is Hard to Find',
  'instructons': 'Imagine that you keep a list of your current nail polish colors in an array (you\'re really organized).  Before you buy a new shade \
  you want to know your current count of colors.  You could count all of the items in your list, but that would be a pain.  \
  <br>Instead, let\'s \
  use JavaScript\'s length property for arrays and strings.  If you append ".length" at the end of an array or string (or a variable referring to an array or string), \
  the value returned will be the length of the array or string.  For example, "["I", "am", "an", "array"].length will return 4 since \
  there are 4 elements in the array. "Manicure".length would return 8 since there are 8 characters in the string "Manicure."  Notice that length \
  is a property of an array or string rather than a method being called so you do not need parentheses at the end of length.  Just .length by itself \
  does the job.  \
  <br>Back your nail polish collection.  In the editor, there is an array of nail polish colors.  Call .length on the array to count up \
  all of your magnificent colors.',
  'content': 'var shades = ["A Woman\'s Prague-ative", "A Grape Fit!", "All Sparkly and Gold", "Barre My Soul", "Be Magentale With Me" \
  "Berlin There Done That", "Brains and Bronze", "Call Me Gwen-ever", "Cement The Deal", "Chillin\' Like a Villian" \
  "Desperately Seeking Sequins", "Don\'t Bossa Nova Me Around", "Teal The Cows Come Home", "Turquoise and Caicos"]; \
  \n\nvar numberOfShades = //insert your code here \
  \n\n ',
  'testCode': 7,
  'pointValue': 100,
  'hint1': 'Did you add ".length" to the end of the shades array?',
  'hint2': 'Your answer should be of the form: ArrayVariableName.length'

}



var lengthTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "Congratulations! You deserve that new shade.  Treat Your-selfy Teal, perhaps?"
 }
 if(typeof(numberOfShades) !== "number"){
   result.pass = false;
   result.message = "Your variable numberOfShades is not returning a number.  Did you call .length on the shades array?"
   return result;
 }  
 if(numberOfShades !== 14){
    result.pass = false;
    result.message = "Your count is not quite right.  Make sure you are calling .length on the shades array."
 }
 return result;
}

//for key in object (object loop)


{
  'title': 'Snowboarding Time',
  'instructons': 'You are packing your bag to go snowboarding and you want to make sure you packed everything.  \
  Being the awesome coder that you are, you created an object called "bag" to keep track of your packed items.  All of the properties of "bag" are the \
  items you want to pack.  As you packed, you set the property of the item being packed to true.  For instance, when you packed your gloves, you set the gloves property \
  to true with "bag.gloves = true".  So, the keys in your object are the names of the items to pack and the value assigned to each key is either true or false.  \
  You are almost done packing and you want to know which properties are still false.  \
  <br>JavaScript has a loop called a "for in loop" that would do the trick here.  With a "for in loop" you can loop through all of \
  object keys and access their values.  The format is: \
  <br> var obj = {}; \
  <br> for(var key in obj){ \
    <br> var property = obj[key] \
    <br> DO STUFF WITH EACY OBJECT PROPERTY HERE \
    <br> } \
    Instead of "key" above you can use any variable name.  You could use x, you could use peanutButter.  It does not matter.  You just \
    need something to stand in for every key name in the object.  Then by calling obj[key] within the brackets you can interact with each property of obj.  \
    For instance, you can check whether obj[key] is assigned to true for each property of obj. \
    <br>Back to packing.  In the editor is the bag object.  Loop through the bag object and if a property of bag is false, push the key of that property into the \
    stillNeedToPack array.  That way stillNeedToPack will just contain the items you still need to pack.',
  'content': 'var bag = {"gloves": true, "goggles": false, "helmet": true, "jacket": true, "lip balm": true, "sunscreen": false, "boots":true, "snowboard": true}\
  \n\n var checkBag = function(){ \
  \n\n var stillNeedToPack = []; \
  \n\n 
  \n\n //insert your for in loop here\
  \n\n


  \n\n return stillNeedtoPack;  
  }',
  'testCode': 7,
  'pointValue': 500,
  'hint1': 'To add the unpacked items to the stillNeedToPack array, within your for in loop you would write: \
  <br>if(bag[key] === false){ \
  <br>  stillNeedToPack.push(key)\
  <br> }',
  'hint2': 'Make sure your for in loop matches the format above: \
  <br> for(var key in bag){ \
  <br> DO STUFF \
  <br> }'

}



var objLoopTest = function(userCode){
 eval(userCode);
 var result = {
   pass: true,
   message: "You got it!  Let\'s hit the slopes!"
 }
 if(checkBag().indexOf("sunscreen") < 0){
   result.pass = false;
   result.message = "Don\'t forget your sunscreen!"
   return result;
 }  
 if(checkBag().indexOf("goggles") < 0){
    result.pass = false;
    result.message = "Don\'t forget your goggles!"
 }
 return result;
}






{
  title: "Contacts object",
  content: 'var contactList = {\n  "Annabelle": 5103238231,\n  "Beth": 4253839832,\n  "Courtney": 2023948221,\n  "Dalia": 9176241223,\n  "Erica": 2124450339]\n}',
  instructions: "Remember in a previous challenge we stored a list of friends' names in an array, which looked like\
  `var friends = ['Annabelle', 'Beth', 'Courtney', 'Dalia', 'Erica']`. An array is a good method for keeping track of lists\
  like this, but what if we wanted to store a phone number for each of our friends? To associate each name with another\
  piece of data, we'd want to use a different structure, called an object.\n\nTake a look at the code in the editor. You'll\
  notice that each entry in the `contactList` object has two components: a key and a value. The key, in this case a friends'\
  name, is a unique identifier used to access the corresponding value. And as you can see, the values in `contactList` are \
  the friends' phone numbers).\n\nLooking up a value in an object is similar to accessing an element in an array, except that\
  instead of passing in an integer that represents the element's index, we pass in the key in order to access the value. For \
  example, to retrieve Beth's phone number, we would write `contactList['Beth']`, which would return 4253839832. Object keys \
  can be numbers, but note that unlike arrays, objects are not ordered. Even if you had an object with numeric keys, the keys \
  don't give order to the key/value pairs in the object. So if you had `var myObject = {0: 'zero', 1: 'one'}`, it is incorrect\
  to think of 1 as coming before 2. The concept of order simply doesn't apply to objects.\n\nOk, enough talking, let's try it \
  out. How would you get Courtney's phone number from `contactList`? Given it a try on line 9." 
  hints: ["Accessing values in an object will follow the form `objectName[key]`",
  "Make sure you're using brackets [] rather than parentheses!"],
  testCode: 7,
  pointValue: 50
}

{
  title: "Hooray for Arrays!",
  content: 'var friends = ["Annabelle", "Beth", "Courtney", "Dalia", "Erica"]',
  instructions: "Take a look at the editor. We've added a list of friends' names in a specific format. This type of 
                  list, of the form ['element1', 'element2', 'element3', ...] is called an array. Arrays are ordered, and each 
                  element has an 'index' that demonstrates its position in the list. \n\n 

                  One thing to note about array order and indexes is that programmers often like to start counting at 0 rather than 1. 
                  This means that 'Annabelle,' the first element in our array of friends, is actually at index 0. 'Beth' is at index 1, 
                  'Courtney' is at index 1, and so on. \n\n

                  Let's pull an element out of our array. If I wanted the first element in the array, typing `friends[0]` 
                  will return the element in 'friends' at index 0. Give it a try - write a statement below the 'friends' array 
                  that will return 'Dalia' from the array.", 
  hints: ["Your code should look like `friends[x]`, where x is the index that indicates Dalia's position in the array.",
          "Remember, the index of the first element in the array is 0, not 1. This means Dalia is at index 3."],
  testCode: 5,
  pointValue: 50
}

{
  title: 'While loop party'

  instructions: "It's Friday night and you're at a party thrown by your crush! Your romantic rival Bianca is at the party too (oh no!)! You decide to go toe to toe 
  with her the whole night. Soon, you're the life of the party! You're dancing the night away, making new friends, and catching the eye of a certain someone. 
  Except there's one problem- you overhear Bianca saying that she's going to wait until the end of the night to swoop in and steal your crush! You decide to wait 
  even longer than her! \n \nA while loop is a loop that takes in a conditional and will only run if that condition is met. \n \n Write a function that takes in the number 
  of people at the party as an argument. Use a while loop to count down until everyone has left (that is, until the number of people left at the party = 0). While there 
  are people, you should let people know you're not leaving the party by console logging it. After everyone is gone, you should shout that you win (take that, Bianca!) 
  by returning 'I win!'.",

  content: "var partyMonster = function(guests){ \n //we have provided the skeleton of a while loop, to help \n while(SOME_CONDITION){\n //do some work\n //make 
      sure to change your condition in some way (eg: decrement the count if you're waiting until it hits 0)\n}\n}",

  testCode: 3,

  pointvalue: 100
}




//pop



{
  "title": 'Pop that dirt off your shoulder'

  "instructions": "You recently became acquaintences (sp) with your classmate Rebecca. She came up to you and asked to borrow your calculator\
  and you never saw that calculator again. Rebecca always seemed nice, so you hung out with her few times, but after a while you noticed that she\
  was into some bad habits. She was disrespectful to her parents, smoked during breaks, and would take your things and never give them back. After talking\
  to your guidance counseler, your parents, and your friends, you decide that you're going to try talking to Rebecca and voicing your concerns. Unfortunately, she\
  doesn't want to change her ways and instead tries to pressure you into following her example. Not cool! Maybe it's time to remove the negativity in your life and \
  end your friendship with Rebecca. It's time to pop out her name from your friends list! \n\nArrays have another native function (also known as a method) called pop. Just as push adds a value to the \
  end of an array, pop will remove the last value. \n\n Complete the function so that you remove Rebecca's name from your list of friends.",

  "content": "var friends = ['Addison', 'Ethan', 'Morgan', 'Garrett', 'Lauren', 'Mark', 'Dave', 'Rebecca']\n\n// enter the method that will remove the last item of the array here!",

  "testCode": "3",

  "pointvalue": "100",

  "hint1": "Are you calling the method on the array? Think back to how you did push!",

  "hint2": "The pop method is very similiar to the push method, except that it takes no arguments. So if you wanted to add a friend, you would do friends.push('Melissa')\
  If you want to remove a friend, you would....."
}


tests: 

var test = function(userCode){
  eval(userCode);
  var result = {
    pass: true,
    message: "Congratulations! You passed!"
  }
  if(friends.pop() ==="Rebecca"){
    result.pass = false;
    result.message = "Oh no! Looks like Rebecca is still your friend. Are you sure you removed her?"
    return result;
  } else if (friends.length < 7){
    result.pass = false;
    result.message = "Oh no! You removed more friends than just Rebecca!"
    return result;
  }
  return result
}




//each

{
  title: "Feeling each-y"

  instructions: "You're a senior! Congratulations! But that means it's time to start thinking about colleges and filling out applications. Your guidance counseler suggested that
  you keep a log of all the colleges you're applying to and mark down when you complete the application. This was going really well until one day when you filled out fifty applications
  but forgot to mark them off as you went. Now you have to sit there and change 50 logs! 

  But wait! You're a JavaScript wizard! And wizards don't do anything by hand if they can help it! Time to put those programming skills to use!! 

  At first you decide to use a for loop, but what if there was(were?) an easier way?........Enter forEach!

  You've worked with arrays and some of their native functions. Now it's time to use another function. forEach is similiar to the for loop in the sense that it will loop through
  the array. However, at every item in the array, the forEach funtion allows you to do some work based on a function that you define (MAGIC). The callback function get three arguments at every
  item- the item, the index of the item, and the whole array. 

  Use the example in the editor as a template and fill out the forEach function so that you can change the value of 'completed' to true'. We're going to test out the forEach with the first 5 colleges
  you applied to!",

  content: "var collegeApplications = [{school: 'Princeton', applied: false}, \n 
  {school: 'Harvard', applied: false},\n 
  {school: 'CalTech', applied: false},\n 
  {school: 'MIT', applied: false},\n 
  {school: 'Columbia', applied: false} ]\n \n var exampleArray = [1, 4, 8, 10]\n exampleArray.forEach(function(item, index, array){\n  
    item = item * 2 // this will double the value of every item in the array\n}) // exampleArray will now be [2, 8, 16, 20]\n\n\n 
  collegeApplications.forEach(function(college){\n // write your code here!\n})",

  testCode: 3,

  pointvalue: 100,

  hints: [
  "the forEach function is able to work on every item in the array. In this case, the item is an object. How do you access values in an object?", 
  "since you're only doing work on the values of each item in the array, make sure you're not returning anything from inside the callback function"

  ]
}


tests: 

var test = function(userCode){
  var result = {
    pass: true,
    message: "Congratulations! You passed!"
  }
  eval(userCode);
  if(collegeApplications.length !== 5){
    result.pass= false;
    result.message= 'It looks like you altered the length of array. Did you add or remove any values?'
    return result
  }
  collegeApplications.forEach(function(college){
    if(!college.applied){
      result.pass = false;
      result.message = "It looks like you didn't apply to "+ college.school + ". Make sure your forEach is changing the value of applied to the boolean true"
      return result; 
    }
  })
  return result;
}





