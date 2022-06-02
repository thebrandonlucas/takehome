function makeDeck() {
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    var suits = ['♦', '♣', '♥', '♠'];
    console.log(suits);
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
var deck = makeDeck();
console.log(deck);
console.log(deck.length);
