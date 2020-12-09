<script>
  import { getContext } from 'svelte';

  const key = getContext('key');
  const setKey = getContext('setKey');
</script>

<div>
  <p>Shared key from child 2: {key}</p>

  <!-- <input bind:value={key} > -->

  <button on:click={setKey}>Set key</button>
</div>