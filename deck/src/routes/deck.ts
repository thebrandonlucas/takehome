import { getTop5Cards, makeDeck, shuffle } from "../scripts/deck";

// TODO: fix typescript (don't use "any"!)
export async function get(request: any) {
  try {
    const deck = makeDeck();
    shuffle(deck);

    const top5Cards = getTop5Cards(deck);
  
    return {
      status: 200,
      body: {
        top5Cards
      }
    }
  } catch(e) {
    console.error(e)
  }
}