<script lang="ts">
	import type { Card } from '../scripts/deck';
	import Card from '../components/card.svelte';

	import { onMount } from 'svelte';

	let cards: Card[] | undefined;

	async function getCards() {
		try {
			const response = await fetch('/deck');
			const top5Cards: Card[] = (await response.json()).top5Cards;
			return top5Cards;
		} catch (e) {
			console.error(e);
		}
	}

	onMount(async () => {
		cards = await getCards();
		console.log(cards);
	});
</script>

<div />

<h1 class="text-4xl">Cards!</h1>

<div class="flex flex-col justify-around my-5 md:flex-row">
	{#if cards}
		{#each cards as card}
			<Card {card} />
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
