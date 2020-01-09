'use strict';
//alert('I am working just fine');

/*
//// Questions I'm going to ask
        Your name
        Am I over 30?
        Am I a cat or dog person?
        Was I in the military?
        Do I enjoy eating bacon?
        Do I fly planes?

        /// Extending

        - Create a Top 10. Could be a top 10 of anything we like.
        - 6th question: 
            -numeric input 
            - indicate if too high, too low, or correct.
            - 4 guesses (up to 4 guesses) After all 4 or correct, display correct answer. (use loop)

        - Convert work experience / education summary to an unordered list (already did thta in v1)

        - 7th question:
            - many possible answers that are stored in an array.
            - guesses end once a correct answer is chosen or fail on the 6th try.
            - once failed or won display all possible correct answers
            - use a loop

        - Display final score

        -refactor firs 5 yes/no questions into an array / loop.
            try this using a 'for loop'


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
/*
// Variables
var score = 0;



// Questions
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


*/

// Question 6
var guessesRemaining = 4;

for (var a = 0; a < 4; a++) {
    var guessAge = prompt('How old do you think I am?');
    
        switch(true){
           
            case (isNaN(guessAge)):
                console.log('Seriousy, that is not a number. That guess diddn\'t count.');
                //alert('Seriousy, that is not a number. That guess diddn\'t count.'); 
                a = 0;               
                break;

            case (guessAge == 0):
                console.log('Come on, really?\n\n If I took the time to code this, the least you could do is type in two digits.\n\nThis won\'t go away until you actually make 4 real guesses.');
                //alert('Come on, really?\n\n If I took the time to code this, the least you could do is type in two digits.\n\nThis won\'t go away until you actually make 4 real guesses.');
                a = 0;
                break;
            
            case (guessAge <= 25):
                console.log('Aww, you\'re so nice. But ' + guessAge +' is too low.');
                 //alert('Aww, you\'re so nice. But' + guessAge +' is too low.');
                break;

            case (guessAge < 34): 
                console.log('You\'re getting closer. Your next guess should be just a little higher than ' + guessAge + '. Let\s not get too crazy.');
                //alert('You\'re getting closer. Your next guess should be just a little higher than ' + guessAge + '. Let\s not get too crazy.');
                break;

            case (guessAge > 34):
                console.log('Ouch. Nope, try gussing lower than ' + guessAge + '.');
                break;

            case (guessAge == 34):                
                console.log('Great guess. I am ' + guessAge + '. No need to keep guessing.');
                a = a+4;
                break; 
            }               



        }

//alert('Thank you, ' + name +'. I appreciate you taking a moment to get to know about me. \nI can\'t wait to get to know more about you.');