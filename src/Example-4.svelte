<script>
	const obj = {
	  innerObj: {
	    num: 1,
	  }
	};
	const changeObj = () => {
	  const temp = obj.innerObj;
	  temp.num = 10;
	  console.log(obj);
		
	  // Must have the line below to update ref
	  // obj.innerObj = temp;
	}
</script>

<p>{obj.innerObj.num}</p>

<button on:click={changeObj}>
	Change number
</button>
