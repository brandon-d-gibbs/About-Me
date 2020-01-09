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

        - Create a Top 10. Could be a top 10 of anything we like. ** DONE **
        - 6th question:  ** DONE **
            -numeric input 
            - indicate if too high, too low, or correct.
            - 4 guesses (up to 4 guesses) After all 4 or correct, display correct answer. (use loop)

        - Convert work experience / education summary to an unordered list (already did thta in v1)  ** Done **

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
var yourScore = score + '/7';


// Questions

var name = prompt('Hi, what is your name?');
//console.log(name);

alert('Hey there ' + name + '. My name is Brandon.\n\nLet\s play a game. I will ask 5 questions to help you get to know me. Get as many right as possible.');

var question1 = prompt('I had an online business.\n\nWas it a website that sold rodeo equipment?');

    switch(question1.toLowerCase()) {
        case 'y':
            //console.log('No, I'm sorry. That would be funy though.');
            alert('No, I\'m sorry. That would be funy though.');
             break;
        case 'yes':
            //console.log('No, I'm sorry. That would be funy though.');
            alert('No, I\'m sorry. That would be funy though.');
             break;
        case 'n':
            //console.log('Correct. It was actually an online binary options trading group.');
            alert('Correct. It was actually an online binary options trading group.');
            score++;
            break;
        case 'no':
            //console.log('Correct. It was actually an online binary options trading group.');
            alert('Correct. It was actually an online binary options trading group.');
            score++;
            break;
        default: 
            //console.log('Sorry, ' + question1 + ' was not a valid response.');
            alert('Sorry, ' + question1 + ' is not a valid response.');
            break;
    }
console.log(score + '/7');

var animals = prompt('Am I a cat person');

    switch(animals.toLowerCase()) {
        case 'y':
        //console.log('Yes, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        alert('Yes, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        score++;
        break;
        case 'yes':
        //console.log('Yes, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        alert('Yes, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        score++;
        break;
        case 'n':
        //console.log('Actually, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        alert('Actually, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        break;
        case 'no':
        //console.log('Actually, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        alert('Actually, I am. But I also love dogs, and pretty much all animals. Ants kinda suck though.');
        break;
        default:
        //console.log('Sorry, ' + animals + ' is not a valid response.');
        alert('Sorry, ' + animals + ' is not a valid response.');
        break;
    }

console.log(score + '/7');

var military = prompt('Was I in the military?');

    switch(military.toLowerCase()) {
        case 'y':
            //console.log('Yes. I spent 4 years in the Marine Corps.');
            alert('Yes. I spent 4 years in the Marine Corps.');
            score++;
            break;
        case 'yes':
            //console.log('Yes. I spent 4 years in the Marine Corps.');
            alert('Yes. I spent 4 years in the Marine Corps.');
            score++;
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
    console.log(score + '/7');

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
            score++;
            break;
        case 'no':
            //console.log('Great job! I am actually a vegetarian, so no real bacon for me.');
            alert('Great job! I am actually a vegetarian, so no real bacon for me.');
            score++;
            break;
        default:
            //console.log('Sorry, ' + bacon + 'is not a valid response');
            alert('Sorry, ' + bacon + ' is not a valid response');
            break;

    }
    console.log(score + '/7');


    
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
        score++;
        break;
    case 'no':
        //console.log('Correct. But, I do plan on getting a pilot\s license.');
        alert('Correct. But, I do plan on getting a pilot\s license.');
        score++;
        break;
    default:
        //console.log('Sorry, ' + planes + 'is not a valid response');
        alert('Sorry, ' + planes + ' is not a valid response');
        break;

}
console.log(score + '/7');

*/
///////    Question 6     ///////
// not used yet // var guessesRemaining = 4;
/*
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
                score++;
                break; 
            }               



        }
        console.log(score + '/7');

alert('Thank you for playing. You got ' + score + '/7 right.');
        
*/   



// prompt a user to input a correct answer to a single question 
        //array with possible answers
        // search through this array
        // if correct alert 'correct...' - incriment score - break
        // if incorrect alert 'incorrect...' and continue loops until....
// 6 attempts to get a correct answer
        // loop to prompt multiple guesses
        
// if correct or runs out of attemtps, display array (possible correct answers)

function checkArray(foodArray, guess){
    for(var f = 0; f < foodArray.length; f++) {
        if(guess.toLowerCase() === foodArray[f].toLowerCase()) {
            alert('Yes! These are my top 5 favorite foods: ' + foodArray.join(', ') +'.');
           // score++;
           return true;
        }
} 
        return false;
}

var food = ['curry', 'tacos', 'lasagna', 'thai', 'mexican'];
foodQuestion:
for(var i = 0; i < 6; i++) {
    var foodGuess = prompt('What is one of my top favorite foods?');
    console.log('worked' + i);
    if (checkArray(food, foodGuess)) {
        break foodQuestion;
   }
   alert('Sorry, that\'s not one of my favorites.');
    
    // arrayChecker:for(var f = 0; f < food.length; f++) {
    //     if(foodGuess.toLowerCase() === food[f].toLowerCase()) {
    //         alert('Yes! These are my top 5 favorite foods: ' + food.join(', ') +'.');
    //        // score++;
    //        break foodQuestion;
    //     }
    if(i === 5) {
    
    alert('Sorry you didn\'t get one right. Here is a list of my top 5 favorite foods: \n\n' + food.join(', ') );
    }
    }
    //alert('Sorry, that\'s not one of my favorites.');
    // if(i === 5) {
    //     alert('Sorry you didn\'t get one right. Here is a list of my top 5 favorite foods: \n\n' + food.join(', ') );
    // }












/*
// //////    Question 7    //////
// var favFoods = ['Tacos', 'Curry', 'Lasagna', ''];
// var foodResponse = '';
// var foodGuess = '';



// for (var i = 0; i < 5; i++){

//     console.log(foodResponse + 'FR')
//     foodGuess = favFoods.toLowerCase().includes(foodResponse);
//     console.log(foodGuess + 'FG');
//     // favFoods.includes(prompt('What is one of my favorte foods?'));
//     // console.log(foodResponse + 'FR'); 


while(x<6){
    var question7 = prompt('What are my favorite cars?');
    x++;
    if(answers.includes(question7)){ alert('Good job! You win! Here are the acceptable answers ' +answers+'.');
      x=6;
      correctanswers++;
    }else if(x===4){alert('Try an older Nissan sports car.');
    }else if(x===6){alert('Sorry, try again sometime here are the correct answers ' +answers+'.');
    }else{alert('Try again');
    }
  }
  alert('Congrats! You got ' +correctanswers+ ' out of 7 questions correct.');
    
    

    

   // switch (true) {
    //     case (foodGuess):
    //     alert('Yep!');
    //     i = 7;
    //     break;
    
// *********** For some reason anything put into the prompt evaluates to true??????? **************
   


    switch(true){
        case (foodResponse.toLowerCase() == favFoods.includes(prompt('What is one of my top 10 favorite foods?').toLowerCase())):
            console.log('Yep, I love ' + foodResponse + '.');
            alert('Great guess. Some of my favorite foods include ' + favFoods.join(" , ").toLowerCase() + '.');  // ****** come back and make sure that all possible answer are given to the user ******
            i=7;
            break;
        default: 
            console.log('I\'m not really a picky eater, but that is not in my top10.');
            alert('I\'m not really a picky eater, but that is not in my top10.');
            break;

    }
    
    }
***************
    /*
    switch(true){
        case (foodResponse.toLowerCase() === favFoods[i].toLowerCase()):
        console.log('Oh yeah, I love ' + foodResponse + '!');
        //alert('Oh yeah, I love' + foodResponse + '!');
        i = 7;
        break;
    }

*/

//alert('Thank you, ' + name +'. I appreciate you taking a moment to get to know about me. \nI can\'t wait to get to know more about you.');