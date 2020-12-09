<script>
  import { getContext } from 'svelte';

  const key = getContext('key');
</script>

<div>
  <p>Shared key from child 1: {key}</p>
</div>