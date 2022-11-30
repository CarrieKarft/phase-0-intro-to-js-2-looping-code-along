// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let gift of gifts) {
        console.log(`Wrapped ${gift} and added a bow!`);
    }
}
wrapGifts(gifts);

function writeCards(names, event) {
    const cardMessages = []
    for(let i = 0; i < names.length; i++) {
        cardMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return cardMessages;
}

function countDown() {
    let i = 10;
    while(i > -1) {
        console.log(i)
        i--;
    }
}

countDown()