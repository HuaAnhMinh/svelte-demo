<script>
  import inputStore from './stores/input.store';

  const setObject = () => {
    $inputStore = {};
  };
</script>

<div>
  <input type="text" bind:value={$inputStore} />
  <p>Current input is: {$inputStore}</p>

  <button on:click={setObject}>Set object to input</button>
</div>