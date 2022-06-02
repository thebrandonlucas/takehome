import { makeDeck, shuffle, type Card, getTop5Cards } from "../deck";

describe('Deck', () => {
  let deck: Card[];
  const originalDeck = makeDeck();

  beforeEach(() => {
    // Start with a fresh deck
    deck = makeDeck();
  })

  it('should still have 52 cards after shuffling', () => {
    shuffle(deck);
    expect(deck.length).toBe(52);
  });

  it('should have all the same cards as original deck after shuffle', () => {
    shuffle(deck);

    expect(deck.every((card) => {
      return originalDeck.some(originalCard => originalCard.rank === card.rank && originalCard.suit === card.suit)
    })).toBe(true);

  });

  it('should return top 5 cards from deck', () => {
    const top5Original = originalDeck.slice(-5);
    expect(getTop5Cards(deck)).toEqual(top5Original);
  });
});