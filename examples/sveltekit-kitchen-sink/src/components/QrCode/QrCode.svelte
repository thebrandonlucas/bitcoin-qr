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
	export let debug = false;
	export let preferLightning = false;
	export let imageEmbedded = false;
	export let pollCallback = () => {}; // FIXME: allow undefined without breaking TS
	export { className as class };
	export { idName as id };

	// https://stackoverflow.com/questions/75896304/add-class-to-svelte-component
	let className = '';
	let idName = '';
	let qr: HTMLBitcoinQrElement; // TODO: how do I defined custom types on these?

	onMount(() => (qr.callback = pollCallback));

	defineCustomElements();

	// FIXME: is this necessary?
	onDestroy(() => {
		if (browser) {
			qr.callback = undefined;
		}
	});

</script>

<bitcoin-qr
	bind:this={qr}
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
	{debug}
	prefer-lightning={preferLightning}
	image-embedded={imageEmbedded}
/>
