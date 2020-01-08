//alert('I am working just fine');

/*
Your name
Am I over 30?
Am I a cat or dog person?
Was I in the military?
Do I enjoy eating bacon?

*/
var myAge = 34;

var name = prompt('Hi, what is your name?');
console.log(name);

alert('Hey there ' + name + '. My name is Brandon.\n\nLet\s play a game. I will ask 5 questions to help you get to know me. Get as many right as possible.');

var age = prompt('Am I over 30?');

    switch(age.toLowerCase()) {
        case 'y':
            console.log('Ouch. But, yes. I am' + myAge + '.');
            //alert('Ouch. But, yes. I am' + myAge + '.');
        break;
        case 'yes':
            console.log('Ouch. But, yes. I am' + myAge + '.');
            //alert('Ouch. But, yes. I am' + myAge + '.');
        break;
        case 'n':
            console.log('Aww, thanks. I am actually' + myAge + '.');
            //alert('Aww, thanks. I am actually' + myAge '.');
            break;
            case 'no':
            console.log('Aww, thanks. I am actually' + myAge + '.');
            //alert('Aww, thanks. I am actually' + myAge '.');
            break;
        default: 
            console.log('Sorry, ' + age + ' was not a valid response.');
            //alert('Sorry, ' + age + ' was not a valid response.');
    }
