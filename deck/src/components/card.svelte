<script lang="ts">
	import type { Card } from '../scripts/deck';

	export let card: Card;
</script>

<div
	class={`border flex flex-col justify-between rounded-lg shadow-md text-4xl w-1/4 
          h-60 text-center my-5 py-4 md:w-1/6 ${
		card.suit === '♦' || card.suit === '♥' ? 'text-red-500' : ''
	}`}
>
	<p>{card.suit}</p>
	<p>{card.rank}</p>
	<p>{card.suit}</p>
</div>
