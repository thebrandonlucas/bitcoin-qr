<script lang="ts">
	import Input from '$components/Input/Input.svelte';
	import { defineCustomElements } from 'bitcoin-qr/loader';
	import dracula from 'svelte-highlight/styles/dracula';
	import { Highlight, HighlightAuto } from 'svelte-highlight';
	import Capsule from '$components/Capsule.svelte';
	import { onMount } from 'svelte';
	import { typescript } from 'svelte-highlight/languages';
	import Button from '$components/Button/Button.svelte';

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
	let moduleColor = '#ff5000';
	let positionCenterColor = '#cc4100';
	let positionRingColor = '#9f3200';
	let imgSrc = './assets/voltage.svg';
	let isPolling = false;
	let interval = 3000;

	let pollCount = 0;
	let paid = false;

	$: component =
		unified || address || invoice || moduleColor || positionCenterColor || positionRingColor
			? `
<bitcoin-qr
	id="qr"
	class="w-1/2"
	unified="${unified}"
	bitcoin="${address}"
	lightning="${invoice}"
	parameters="${parameters}"
	module-color="${moduleColor}"
	position-center-color="${positionCenterColor}"
	position-ring-color="${positionRingColor}"
	img-src="${imgSrc}"
	is-polling="${isPolling}"
	interval="${interval}"
/>
	`
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
		document.addEventListener('codeRendered', () => {
			const qr = document.getElementById('qr') as any;
			qr.callback = pollFunction; // must set the callback function as a property of the element, NOT as an attribute
		});
	});
</script>

<svelte:head>
	{@html dracula}
</svelte:head>

<div class="my-8 flex flex-col items-center">
	<h2 class="text-lg font-bold">&ltbitcoin-qr/&gt;</h2>
</div>

<div class="flex flex-col gap-4 lg:flex-row">
	<div class="ml-4 flex flex-1 flex-col items-center gap-4">
		{#if !paid && (unified || address || invoice)}
			<bitcoin-qr
				id="qr"
				class="w-1/2"
				{unified}
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
					<Input bind:value={interval} label="Interval" />
				</div>
			</div>
			<Input bind:value={unified} label="Unified (BIP-21)" />
			<Input bind:value={invoice} label="Lightning Invoice" />
			<Input bind:value={address} label="Bitcoin Address" />
			<Input bind:value={parameters} label="Parameters" />
			<div class="flex gap-4">
				<div>
					<label for="moduleColor">Module Color ({moduleColor})</label>
					<input bind:value={moduleColor} placeholder="#ff5000" type="color" />
				</div>
				<div>
					<label for="positionCenterColor">Position Center Color ({positionCenterColor})</label>
					<input bind:value={positionCenterColor} placeholder="#cc4100" type="color" />
				</div>
				<div>
					<label for="positionRingColor">Position Ring Color ({positionRingColor})</label>
					<input bind:value={positionRingColor} placeholder="#9f3200" type="color" />
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
