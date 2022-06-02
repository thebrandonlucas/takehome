type Rank = 2|3|4|5|6|7|8|9|10|'J'|'Q'|'K'|'A'
type Suit = '♦' | '♣' | '♥' | '♠'

type Card = {
  rank: Rank;
  suit: Suit;
}


function makeDeck(): Card[] {

  const ranks: Rank[] = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
  const suits: Suit[] = ['♦', '♣', '♥', '♠'];


  console.log(suits)
  let deck: Card[] = [];
  // Generate deck
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({rank,suit})
    }
  }
  
  return deck
}

const deck: Card[] = makeDeck()