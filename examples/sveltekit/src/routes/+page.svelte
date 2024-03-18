<script lang="ts">
	import { defineCustomElements } from 'bitcoin-qr/loader';
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/atom-one-dark.css';

	import { onMount } from 'svelte';

	defineCustomElements();
	onMount(() => {
		hljs.highlightAll();
	});
</script>

<div class="flex flex-col lg:flex-row">
	<div class="flex-1">
		<bitcoin-qr
			id="qr"
			class="w-1/3"
			bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
			module-color="#ff5000"
			position-center-color="#cc4100"
			position-ring-color="#9f3200"
			img-src="./assets/voltage.svg"
			is-polling="true"
			interval="3000"
		/>
	</div>
	<div class="flex-1">
		<form class="flex flex-col gap-2" />
		<div class="flex flex-col items-center">
			<pre>
				<code>
&lt;bitcoin-qr
		id="qr"
		class="w-1/3"
		bitcoin="BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U"
		module-color="#ff5000"
		position-center-color="#cc4100"
		position-ring-color="#9f3200"
		img-src="./assets/voltage.svg"
		is-polling="true"
		interval="3000"
	/&gt;	
			</code>
			</pre>
		</div>
	</div>
</div>
