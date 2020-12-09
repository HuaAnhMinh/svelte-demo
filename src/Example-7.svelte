<script>
	import { onDestroy } from 'svelte';
	
	let num = 0;
	let random;
	
	let randomInterval = setInterval(() => {
		random = Math.floor(Math.random() * 11);
	}, 1000);
	
	onDestroy(() => {
		clearInterval(randomInterval);
		randomInterval = null;
	});
</script>

<div>
	<button on:click={() => ++num}>
		Increase num
	</button>
	
	{#if random > 5}
		<p>1. Random is greater than 5: {random}</p>
	{/if}
	
	<br>
	
	<p>Num: {num}</p>
	
	{#if num % 2 === 0}
		<p>Num is even</p>
	{:else}
		<p>Num is odd</p>
	{/if}
	
	<br>
	
	{#if num % 2 === 0}
		<p>Num can be divided by 2</p>
	{:else if num % 3 === 0}
		<p>Num can be divided by 3</p>
	{:else if num % 5 === 0}
		<p>Num can be divided by 5</p>
	{:else}
		<p>To be continue...</p>
	{/if}
</div>