<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { defineCustomElements } from 'bitcoin-qr/loader';
	import { browser } from '$app/environment';

	export let unified = '';
	export let bitcoin = '';
	export let lightning = '';
	export let parameters = '';
	export let width = 300;
	export let height = 300;
	export let image = '';
	export let isPolling = false;
	export let pollInterval = 1000;
	export let type = 'svg';
	export let cornersSquareColor = '#b23c05';
	export let cornersDotColor = '#e24a04';
	export let cornersSquareType = 'extra-rounded';
	export let dotsType = 'classy-rounded';
	export let dotsColor = '#ff5000';
	export let pollCallback = () => {}; // FIXME: allow undefined without breaking TS

	// https://stackoverflow.com/questions/75896304/add-class-to-svelte-component
	let className = '';
	let idName = '';
	export { className as class };
	export { idName as id };

	defineCustomElements();

	onMount(() => {
		const qr = document.getElementById('qr') as any;
		console.log({ qr });
		if (qr) {
			qr.callback = pollCallback;
		}
	});

	onDestroy(() => {
		if (browser) {
			const qr = document.getElementById('qr') as any;
			if (qr) {
				qr.callback = undefined;
			}
		}
	});
</script>

<bitcoin-qr
	id={idName}
	class={className}
	{width}
	{height}
	{unified}
	{bitcoin}
	{lightning}
	{parameters}
	{image}
	is-polling={isPolling}
	poll-interval={pollInterval}
	{type}
	corners-square-color={cornersSquareColor}
	corners-dot-color={cornersDotColor}
	corners-square-type={cornersSquareType}
	dots-type={dotsType}
	dots-color={dotsColor}
/>
