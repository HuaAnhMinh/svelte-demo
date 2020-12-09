<script>
	let notes = [{
		id: '1',
		title: 'Learn React',
	}, {
		id: '2',
		title: 'Learn Vue',
	}, {
		id: '3',
		title: 'Learn Svelte',
	}]
</script>

<div>
	{#each notes as note}
		<p>{note.title}</p>
	{/each}
	
	<br>
	
	{#each notes as note, index}
		<p>{index}. {note.title}</p>
	{/each}
</div>