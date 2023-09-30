let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');


const quotes = [{
    quote: `The only way to do great work is to love what you do.`,
    person: `- Steve Jobs`
}, {
    quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    person: `- Robert Frost`    
}, {
    quote: `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.`,
    person: `- Ralph Waldo Emerson`
}, {
    quote: `The only thing we have to fear is fear itself.`,
    person: `- Franklin D. Roosevelt`
}, {
    quote: `Success is not final, failure is not fatal: It is the courage to continue that counts.`,
    person: `- Winston Churchill`
}, {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    person: `- Albert Einstein`
}, {
    quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
    person: `- Nelson Mandela`
}, {
    quote: `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.`,
    person: `- Ralph Waldo Emerson`
}, {
    quote: `The only thing necessary for the triumph of evil is for good men to do nothing.`,
    person: `- Edmund Burke`
}, {
    quote: `In the end, we will remember not the words of our enemies, but the silence of our friends.`,
    person: `- Martin Luther King Jr.`
},];


btn.addEventListener('click',function() {
    
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})