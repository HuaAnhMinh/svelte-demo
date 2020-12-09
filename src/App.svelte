<script>
	import { Router, Route, Link } from 'svelte-routing';

	import Example1 from './Example-1.svelte';
	import Example2 from './Example-2.svelte';
	import Example3 from './Example-3.svelte';
	import Example4 from './Example-4.svelte';
	import Example5 from './Example-5.svelte';
	import Example6 from './Example-6.svelte';
	import Example7 from './Example-7.svelte';
	import Example8 from './Example-8.svelte';
	import Example9 from './Example-9.svelte';
	import Example10 from './Example-10.svelte';
	import Example11 from './Example-11.svelte';
	import Example12 from './Example-12.svelte';
	import Example13 from './Example-13.svelte';
</script>

<style>
	.app {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	.examples {
		width: 150px;
		height: 100%;
	}

	.contents {
		width: calc(100% - 150px);
		height: 100%;
	}
</style>

<Router url="">
	<div class="app">
		<div class="examples">
			<nav>
				<p><Link to="/1">Example 1</Link></p>
				<p><Link to="/2">Example 2</Link></p>
				<p><Link to="/3">Example 3</Link></p>
				<p><Link to="/4">Example 4</Link></p>
				<p><Link to="/5">Example 5</Link></p>
				<p><Link to="/6">Example 6</Link></p>
				<p><Link to="/7">Example 7</Link></p>
				<p><Link to="/8">Example 8</Link></p>
				<p><Link to="/9">Example 9</Link></p>
				<p><Link to="/10">Example 10</Link></p>
				<p><Link to="/11">Example 11</Link></p>
				<p><Link to="/12">Example 12</Link></p>
				<p><Link to="/13">Example 13</Link></p>
			</nav>
		</div>
		<div class="contents">
			<Route path="/1" component="{Example1}" />
			<Route path="/2" component="{Example2}" />
			<Route path="/3" component="{Example3}" />
			<Route path="/4" component="{Example4}" />
			<Route path="/5" component="{Example5}" />
			<Route path="/6" component="{Example6}" />
			<Route path="/7" component="{Example7}" />
			<Route path="/8" component="{Example8}" />
			<Route path="/9" component="{Example9}" />
			<Route path="/10" component="{Example10}" />
			<Route path="/11" component="{Example11}" />
			<Route path="/12" component="{Example12}" />
			<Route path="/13" component="{Example13}" />
		</div>
	</div>
</Router>