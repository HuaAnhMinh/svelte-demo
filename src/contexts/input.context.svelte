<script>
  import { setContext } from 'svelte';

  let sharedKey = 'This is my key';

  setContext('key', sharedKey);

  const setSharedKey = () => {
    sharedKey = 'key changed';
    console.log(sharedKey);
  };

  setContext('setKey', setSharedKey);
</script>

<div>
  <slot>
    <h1>Fallback</h1>
  </slot>
</div>

<!-- <div>
  {props.children}
</div> -->