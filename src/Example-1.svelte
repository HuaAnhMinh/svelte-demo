<script>
  let name = 'Hello, world';
  const changeName = () => {
		name = 'You have clicked the button';
	}
</script>

<button on:click={changeName}>Click me</button>
<h1>{name}</h1>