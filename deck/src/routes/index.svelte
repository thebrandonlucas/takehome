<script lang="ts">
	// TODO: fix ts error
	import type { Card } from '../scripts/deck';
	import Card from '../components/card.svelte';

	import { onMount } from 'svelte';

	let cards: Card[] | undefined;
	let pokerHand: string = '';

	async function getCards() {
		try {
			const response = await fetch('/deck');
			const top5Cards: Card[] = (await response.json()).top5Cards;
			return top5Cards;
		} catch (e) {
			console.error(e);
		}
	}

	function isPair(cards: Card[]) {
		// Check if cards has duplicates
		const set = new Set();

		cards.forEach((card) => {
			set.add(card.rank);
		});

    console.log(set.size)
    console.log(cards.length)
		if (set.size < cards.length) {
			return true;
		}

		return false;
	}

	function getBestPokerHand(cards: Card[]) {
    // TODO: Refactor, place in dedicated file
    // if (isRoyalFlush(cards)) {
    //   pokerHand = 'Two Pair';
    //   return
    // }

    // if (isStraightFlush(cards)) {
    //   pokerHand = 'Two Pair';
    //   return
    // }

    // if (isFourOfAKind(cards)) {
    //   pokerHand = 'Two Pair';
    //   return
    // }

    // if (isStraight(cards)) {
    //   pokerHand = 'Two Pair';
    //   return
    // }

    // if (isStraight(cards)) {
    //   pokerHand = 'Two Pair';
    //   return
    // }

    // if (isThreeOfKind(cards)) {
    //   pokerHand = 'Two Pair';
    //   return
    // }

    // if (isTwoPair(cards)) {
    //   pokerHand = 'Two Pair';
    //   return
    // }

    if (isPair(cards)) {
			pokerHand = 'Pair';
      return;
		}

		pokerHand = 'High Hand';
	}

	onMount(async () => {
		cards = await getCards();

    if (cards) {
      getBestPokerHand(cards)
    }
	});

  // $: if (cards) {
  //   console.log('test')
  //   getBestPokerHand(cards);
  // }
</script>

<div />

<h1 class="text-4xl">Cards!</h1>

<div class="flex flex-col items-center my-5 md:flex-row md:justify-around">
	{#if cards}
		{#each cards as card}
			<Card {card} />
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<h1 class="text-3xl">Poker Hand: {pokerHand}</h1>
