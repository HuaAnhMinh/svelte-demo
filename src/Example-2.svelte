<script>
	let number = 0;
	$: squared = number * number
</script>

<div>
	<input bind:value={number} />
	<p>
		Squared of {number} is {squared}
	</p>
</div>