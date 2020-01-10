'use strict'
//alert('I am working just fine');

/*
//// Questions I'm going to ask
        Your name
        Am I over 30?
        Am I a cat or dog person?
        Was I in the military?
        Do I enjoy eating bacon?
        Do I fly planes?

///// copy of highly repeated 

    //// Switch Statement
    switch() {
        case 'y':
        console.log();
        //alert();
            break;
        case 'yes':
        console.log();
        //alert();
            break;
        case 'n':
        console.log();
        //alert();
            break;
        case 'no':
        console.log();
        //alert();
            break;
        default:
        console.log('Sorry, ' + *var + 'is not a valid response');
        //alert('Sorry, ' + *var + 'is not a valid response');
    
    }
        
//////
*/

var myAge = 34;

var name = prompt('Hi, what is your name?');
console.log(name);

alert('Hey there ' + name + '. My name is Brandon.\n\nLet\s play a game. I will ask 5 questions to help you get to know me. Get as many right as possible.');

var age = prompt('Am I over 30?');

switch(age.toLowerCase()) {
case 'y':
  //console.log('Ouch. But, yes. I am ' + myAge + '.');
  alert('Ouch. But, yes. I am ' + myAge + '.');
  break;
case 'yes':
  //console.log('Ouch. But, yes. I am ' + myAge + '.');
  alert('Ouch. But, yes. I am ' + myAge + '.');
break;
case 'n':
  //console.log('Aww, thanks. I am actually ' + myAge + '.');
  alert('Aww, thanks. I am actually ' + myAge + '.');
  break;
case 'no':
  //console.log('Aww, thanks. I am actually ' + myAge + '.');
  alert('Aww, thanks. I am actually ' + myAge + '.');
  break;
default: 
  //console.log('Sorry, ' + age + ' was not a valid response.');
  alert('Sorry, ' + age + ' is not a valid response.');
  break;
}

var animals = prompt('Am I a cat person');

switch(animals.toLowerCase()) {
case 'y':
  //console.log('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  alert('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  break;
case 'yes':
  //console.log('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  alert('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  break;
case 'n':
  //console.log('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  alert('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  break;
case 'no':
  //console.log('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  alert('Sorry, trick question. I love pretty much all animals. Ants kinda suck though.');
  break;
default:
  //console.log('Sorry, ' + animals + ' is not a valid response.');
  alert('Sorry, ' + animals + ' is not a valid response.');
  break;
}

var military = prompt('Was I in the military?');

switch(military.toLowerCase()) {
case 'y':
  //console.log('Yes. I spent 4 years in the Marine Corps.');
  alert('Yes. I spent 4 years in the Marine Corps.');
  break;
case 'yes':
  //console.log('Yes. I spent 4 years in the Marine Corps.');
  alert('Yes. I spent 4 years in the Marine Corps.');
  break;
case 'n':
  //console.log('Sorry, that\s incorrect. I spent 4 years in the Marine Corps.');
  alert('Sorry, that\s incorrect. I spent 4 years in the Marine Corps.');
  break;
case 'no':
  //console.log('Sorry, that\s incorrect. I spent 4 years in the Marine Corps.');
  alert('Sorry, that\s incorrect. I spent 4 years in the Marine Corps.')
  break;
default:
  //console.log('Sorry, ' + military + 'is not a valid response');
  alert('Sorry, ' + military + ' is not a valid response');
  break;
}

var bacon = prompt('Do I love bacon?');

switch(bacon.toLowerCase()) {
case 'y': 
  //console.log('NOPE! I have been a vegetarian for about 2 years.');
  alert('NOPE! I have been a vegetarian for about 2 years.');
  break;
case 'yes':
  //console.log('NOPE! I have been a vegetarian for about 2 years.');
  alert('NOPE! I have been a vegetarian for about 2 years.');
  break;
case 'n':
  //console.log('Great job! I am actually a vegetarian, so no real bacon for me.');
  alert('Great job! I am actually a vegetarian, so no real bacon for me.');
  break;
case 'no':
  //console.log('Great job! I am actually a vegetarian, so no real bacon for me.');
  alert('Great job! I am actually a vegetarian, so no real bacon for me.');
  break;
default:
  //console.log('Sorry, ' + bacon + 'is not a valid response');
  alert('Sorry, ' + bacon + ' is not a valid response');
  break;
}
    
var planes = prompt('Do I fly panes in my spare time?');

switch(planes.toLowerCase()) {
case 'y':
  //console.log('No, but I really want to get my pilot\s license');
  alert('No, but I really want to get my pilot\s license');
  break;
case 'yes':
  //console.log('No, but I really want to get my pilot\s license');
  alert('No, but I really want to get my pilot\s license');
  break;
case 'n':
  //console.log('Correct. But, I do plan on getting a pilot\s license.');
  alert('Correct. But, I do plan on getting a pilot\s license.');
  break;
case 'no':
  //console.log('Correct. But, I do plan on getting a pilot\s license.');
  alert('Correct. But, I do plan on getting a pilot\s license.');
  break;
default:
  //console.log('Sorry, ' + planes + 'is not a valid response');
  alert('Sorry, ' + planes + ' is not a valid response');
  break;

}

alert('Thank you, ' + name +'. I appreciate you taking a moment to get to know about me. \nI can\'t wait to get to know more about you.');