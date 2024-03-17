<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { defineCustomElements } from 'bitcoin-qr/loader';

	export let parameters = '';
	export let address = '';
	export let invoice = '';
	export let imgSrc = './assets/voltage.svg';
	export let moduleColor = '#ff5000';
	export let positionCenterColor = '#cc4100';
	export let positionRingColor = '#9f3200';
	export let isPolling = false;
	export let interval = 3000; // Interval to poll in milliseconds
	export let pollCallback = () => {}; // FIXME: allow undefined without breaking TS
	export let clazz = '';

	onMount(() => {
		defineCustomElements();
		const qr = document.getElementById('qr') as any;
		if (qr) {
			qr.addEventListener('codeRendered', () => {
				qr.callback = pollCallback;
				qr.animateQRCode('MaterializeIn');
			});
		}
	});

	onDestroy(() => {
		const qr = document.getElementById('qr') as any;
		if (qr) {
			qr.removeEventListener('codeRendered', () => {
				qr.callback = undefined;
			});
		}
	});
</script>

<bitcoin-qr
	id="qr"
	class={clazz}
	bitcoin={address}
	lightning={invoice}
	{parameters}
	module-color={moduleColor}
	position-center-color={positionCenterColor}
	position-ring-color={positionRingColor}
	img-src={imgSrc}
	is-polling={isPolling}
	{interval}
/>
