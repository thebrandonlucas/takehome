<script lang="ts">
	import type { Card } from '../scripts/deck';

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
{#if cards}
	{#each cards as card}
		<div>
			<p>{card.rank}</p>
			<p>{card.suit}</p>
		</div>
	{/each}
{:else}
	<p>Loading...</p>
{/if}
