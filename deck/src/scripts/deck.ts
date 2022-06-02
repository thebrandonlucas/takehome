type Rank = '2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'J'|'Q'|'K'|'A'
type Suit = '♦' | '♣' | '♥' | '♠'

export type Card = {
  rank: Rank;
  suit: Suit;
}

// TODO: JSDoc for functions

export function makeDeck(): Card[] {
  const ranks: Rank[] = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const suits: Suit[] = ['♦', '♣', '♥', '♠'];
  const deck: Card[] = [];
  // Generate deck
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({rank,suit})
    }
  }
  return deck
}

function randomIntInRange(min: number, max: number) {
  // if min = 0 and max = 51,
  // (max - min + 1) + min 
  // = (51 - 0 + 1) + 0 
  // = 52
  // Math.random() is exclusive on the upper bound, will never return 52
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fisher-Yates Shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export function shuffle(deck: Card[]) {
  for (let i = 0; i < deck.length - 2; i++) {
    const randomIndex = randomIntInRange(i, 51);
    const temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
}

// Deck treated as "stack": top card is last index
export function getTop5Cards(deck: Card[]) {
  return deck.slice(-5);
}
