<script>
	let array = [1, 2, 3];
	
	const updateArr = () => {
	  array.push(4);
	  console.log(array);
		
		// array = [...array, 4];
	};
</script>

<div>
	<p>{array.join('-')}</p>
	<button on:click={updateArr}>Update array</button>
</div>
