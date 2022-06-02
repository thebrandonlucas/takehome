function makeDeck() {
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    var suits = ['♦', '♣', '♥', '♠'];
    var deck = [];
    // Generate deck
    for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
        var suit = suits_1[_i];
        for (var _a = 0, ranks_1 = ranks; _a < ranks_1.length; _a++) {
            var rank = ranks_1[_a];
            deck.push({ rank: rank, suit: suit });
        }
    }
    return deck;
}
function randomIntInRange(min, max) {
    // if min = 0 and max = 51,
    // (max - min + 1) + min 
    // = (51 - 0 + 1) + 0 
    // = 52
    // Math.random() is exclusive on the upper bound, will never return 52
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Fisher-Yates Shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var randomIndex = randomIntInRange(0, i);
        var temp = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temp;
    }
}
var deck = makeDeck();
shuffle(deck);
console.log(deck);
