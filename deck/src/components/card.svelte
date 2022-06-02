<script lang="ts">
	import type { Card } from '../scripts/deck';

	export let card: Card;
</script>

<div
	class={`border rounded-lg shadow-md text-4xl w-1/6 h-1/5 text-center my-5 ${
		card.suit === '♦' || card.suit === '♥' ? 'text-red-500' : ''
	}`}
>
	<p>{card.suit}</p>
	<p>{card.rank}</p>
	<p>{card.suit}</p>
</div>
