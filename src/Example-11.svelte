<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  let data = 'Data is being fetched...'

  onMount(() => {
    console.log('onMount');
    
    setTimeout(() => {
      data = localStorage.getItem('data');
    }, 3000);
  });

  beforeUpdate(() => {
    console.log('beforeUpdate');
  });

  afterUpdate(() => {
    console.log('afterUpdate');
  });

  const fetchDataAgain = () => {
    data = localStorage.getItem('another-data');
  };

  onDestroy(() => {
    console.log('onDestroy');
  });
</script>

<style>
  li {
    margin: 10px 0;
  }
</style>

<div>
  <!-- <p>{data}</p>
  <button on:click={fetchDataAgain}>Fetch another data</button> -->

  <p>Order of lifecycle functions:</p>
  <p>When mount</p>
  <ol>
    <li>beforeUpdate</li>
    <li>DOM created</li>
    <li>onMount</li>
    <li>afterUpdate</li>
  </ol>

  <p>When update an already-mounted component</p>
  <ol>
    <li>beforeUpdate</li>
    <li>DOM updated</li>
    <li>afterUpdate</li>
  </ol>
</div>