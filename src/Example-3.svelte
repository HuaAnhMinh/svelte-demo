<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
	
	$: {
		console.clear();
		console.log('The count is ' + count);
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>