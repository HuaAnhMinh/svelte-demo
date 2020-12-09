<script>
  let count = 0;
  const increaseCount = () => ++count;

  let position = { x: 0, y: 0 };
  const handleMouseMove = (e) => {
    position = { x: e.clientX, y: e.clientY };
  };
</script>

<div on:mousemove={handleMouseMove} style="height: 100%">
  <button on:click={increaseCount}>You have clicked the button {count} times</button>

  <p>Mouse position: X = {position.x}, Y = {position.y}</p>
</div>