<script lang="ts">
	import Input from '$components/Input/Input.svelte';
	import { defineCustomElements } from 'bitcoin-qr/loader';
	import dracula from 'svelte-highlight/styles/dracula';
	import { Highlight, HighlightAuto } from 'svelte-highlight';
	import Capsule from '$components/Capsule.svelte';
	import { onMount } from 'svelte';
	import { typescript } from 'svelte-highlight/languages';
	import Button from '$components/Button/Button.svelte';
	import QrCode from '$components/QrCode/QrCode.svelte';

	defineCustomElements();

	const pollFunctionJs = `
// After the QR code is scanned, the callback function will be called every {interval} milliseconds
// This trivial example sets paid = true after 5 intervals.
async function callbackExample() {
	pollCount += 1;
	if (pollCount >= 5) {
		isPolling = false;
		paid = true;
	}
};`;

	let unified =
		'bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U&lightning=LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6&amount=0.00001&label=payjoin.org&message=Donation%20to%20payjoin.org';
	let address = 'BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U';
	let invoice =
		'LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6';
	let parameters = '?amount=0.00001&label=payjoin.org&message=Donation%20to%20payjoin.org';
	let image = 'https://voltage.imgix.net/Team.png?fm=webp&w=160';
	let width = 300;
	let height = 300;
	let cornersSquareColor = '#b23c05';
	let cornersDotColor = '#e24a04';
	let cornersSquareType = 'extra-rounded';
	let dotsType = 'classy-rounded';
	let dotsColor = '#ff5000';
	let type = 'svg';
	let isPolling = false;
	let pollInterval = 1000;

	let pollCount = 0;
	let paid = false;

	$: component =
		unified ||
		address ||
		invoice ||
		parameters ||
		image ||
		cornersSquareColor ||
		cornersDotColor ||
		cornersSquareType ||
		dotsType ||
		dotsColor
			? `
<bitcoin-qr
	id="qr"
	width="${width}"
	height="${height}"
	bitcoin="${address}"
	parameters="${parameters}"
	image="${image}"
	is-polling="${isPolling}"
	poll-interval="${pollInterval}"
	type="${type}"
	corners-square-color="${cornersSquareColor}"
	corners-dot-color="${cornersDotColor}"
	corners-square-type="${cornersSquareType}"
	dots-type="${dotsType}"
	dots-color="${dotsColor}"
/>`
			: '';

	const pollFunction = async function callbackExample() {
		const qr = document.getElementById('qr') as any;
		pollCount += 1;
		if (pollCount >= 5) {
			isPolling = false;
			if (qr) {
				paid = true;
			}

			return;
		}
	};

	function reset() {
		paid = false;
		pollCount = 0;
		isPolling = false;
	}

	onMount(() => {
		const qr = document.getElementById('qr') as any;
		qr.callback = pollFunction; // must set the callback function as a property of the element, NOT as an attribute
	});
</script>

<svelte:head>
	{@html dracula}
</svelte:head>

<div class="my-12 flex flex-col items-center">
	<h2 class="text-4xl font-bold">&ltbitcoin-qr/&gt;</h2>
</div>

<div class="flex flex-col gap-4 lg:flex-row">
	<div class="ml-4 flex flex-1 flex-col items-center gap-4">
		{#if !paid && (unified || address || invoice)}
			<QrCode id="qr" {unified} bitcoin={address} lightning={invoice} {parameters} {image} />
			{#if isPolling}
				<Capsule bgColor="bg-yellow-500">Polling...</Capsule>
				<span>{pollCount}</span>
				<Button on:click={reset}>Reset</Button>
			{:else}
				<div class="flex gap-4">
					<Button on:click={() => (isPolling = true)}>Start Polling for Payment</Button>
				</div>
			{/if}
		{:else if paid}
			<Capsule bgColor="bg-green-500">Paid!</Capsule>
		{:else}
			<strong>
				Must provide a value for one of the following: Unified, Bitcoin Address, or Lightning
				Invoice
			</strong>
		{/if}
		<form class="flex flex-col gap-2">
			<div class="mt-8 flex flex-col gap-4">
				<div class="flex flex-col items-start gap-2">
					<label for="is-polling">Is Polling</label>
					<input id="is-polling" type="checkbox" bind:checked={isPolling} />
				</div>
				<div class="flex flex-col">
					<Input bind:value={pollInterval} label="poll-interval (milliseconds)" />
				</div>
			</div>
			<Input bind:value={unified} label="Unified (BIP-21)" />
			<Input bind:value={invoice} label="Lightning Invoice" />
			<Input bind:value={address} label="Bitcoin Address" />
			<Input bind:value={parameters} label="Parameters" />
			<Input
				bind:value={image}
				label="Image URL"
				placeholder="https://voltage.imgix.net/Team.png?fm=webp&w=160"
			/>
			<div class="flex gap-4">
				<div>
					<label for="cornersSquareColor">Corners Square Color ({cornersSquareColor})</label>
					<input bind:value={cornersSquareColor} placeholder="#b23c05" type="color" />
				</div>
				<div>
					<label for="cornersDotColor">Corners Dot Color ({cornersDotColor})</label>
					<input bind:value={cornersDotColor} placeholder="#e24a04" type="color" />
				</div>
				<div>
					<label for="dotsColor">Dots Color ({dotsColor})</label>
					<input bind:value={dotsColor} placeholder="#ff5000" type="color" />
				</div>
			</div>
		</form>
	</div>
	<div class="flex flex-1 flex-col gap-4">
		<div class="max-w-[800px]">
			<HighlightAuto code={component} />
		</div>
		<div class="max-w-[800px]">
			<span class="text-lg"
				>Sample Callback Function (Replace this with your function to check for payments)</span
			>
			<Highlight code={pollFunctionJs} language={typescript} />
		</div>
	</div>
</div>
