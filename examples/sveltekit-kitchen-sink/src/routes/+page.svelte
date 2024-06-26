<script lang="ts">
	import Input from '$components/Input/Input.svelte';
	import dracula from 'svelte-highlight/styles/dracula';
	import { Highlight, HighlightAuto } from 'svelte-highlight';
	import Capsule from '$components/Capsule.svelte';
	import { typescript } from 'svelte-highlight/languages';
	import QrCode from '$components/QrCode/QrCode.svelte';
	import {Button, Toast} from 'flowbite-svelte'
	import { CheckCircleSolid } from 'flowbite-svelte-icons';



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
		'bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?lightning=LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6&amount=0.00001&label=payjoin.org&message=Donation to payjoin.org';
	let address = 'BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U';
	let invoice =
		'LNBC10U1P3PJ257PP5YZTKWJCZ5FTL5LAXKAV23ZMZEKAW37ZK6KMV80PK4XAEV5QHTZ7QDPDWD3XGER9WD5KWM36YPRX7U3QD36KUCMGYP282ETNV3SHJCQZPGXQYZ5VQSP5USYC4LK9CHSFP53KVCNVQ456GANH60D89REYKDNGSMTJ6YW3NHVQ9QYYSSQJCEWM5CJWZ4A6RFJX77C490YCED6PEMK0UPKXHY89CMM7SCT66K8GNEANWYKZGDRWRFJE69H9U5U0W57RRCSYSAS7GADWMZXC8C6T0SPJAZUP6';
	let parameters = 'amount=0.00001&label=payjoin.org&message=Donation to payjoin.org';
	let image = './assets/bitcoin.svg';
	let width = 300;
	let height = 300;
	let cornersSquareColor = '#000';
	let cornersDotColor = '#000';
	let cornersSquareType = 'extra-rounded';
	let dotsType = 'classy-rounded';
	let dotsColor = '#000';
	let debug = true;
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
		dotsColor ||
		debug
			? `
<bitcoin-qr
	id="qr"
	unified="${unified}"
	width="${width}"
	height="${height}"
	bitcoin="${address}"
	lightning="${invoice}"
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
	debug="${debug}"
	poll-callback={callbackExample}
/>`
			: '';

	async function callbackExample() {
		pollCount += 1;
		if (pollCount >= 5) {
			isPolling = false;
			paid = true;
			return;
		}
	}

	function reset() {
		paid = false;
		pollCount = 0;
		isPolling = false;
	}
</script>

<svelte:head>
	{@html dracula}
</svelte:head>

<div class="my-12 flex flex-col items-center mb-4">
	<h2 class="text-4xl font-bold">&ltbitcoin-qr/&gt;</h2>
	<span class="text-lg my-6 text-center w-[400px]">
		A QR code web component for Bitcoin on-chain, Lightning, and unified BIP-21 payments.</span>
	
</div>

<div class="flex flex-col gap-4 flex-1 items-center mb-12">
	{#if !paid && (unified || address || invoice)}
			<QrCode
				id="qr"
				{unified}
				bitcoin={address}
				lightning={invoice}
				{parameters}
				{width}
				{height}
				{image}
				{type}
				{cornersDotColor}
				{cornersSquareColor}
				{cornersSquareType}
				{dotsColor}
				{dotsType}
				{debug}
				{isPolling}
				pollCallback={callbackExample}
			/>
			{#if isPolling}
				<Capsule bgColor="bg-yellow-500">Polling...</Capsule>
				<span>{pollCount}</span>
			{:else}
				<div class="flex gap-4">
					<Button on:click={() => (isPolling = true)}>Start Polling for Payment</Button>
				</div>
			{/if}
		{:else if paid}
		<Toast class="bg-slate-800" color="green" >
			<svelte:fragment slot="icon">
			  <CheckCircleSolid class="w-5 h-5" />
			  <span class="sr-only">Check icon</span>
			</svelte:fragment>
			Payment Success!
		  </Toast>
		{:else}
			<strong>
				Must provide a value for one of the following: Unified, Bitcoin Address, or Lightning
				Invoice
			</strong>
		{/if}
		{#if paid || isPolling}
			<Button on:click={reset}>Reset</Button>
		{/if}
</div>

<div class="flex flex-col gap-4 lg:flex-row mb-12">
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
	<div class="ml-4 flex flex-1 flex-col items-center gap-4 max-h-fit">
		<form class="mr-4 flex flex-col gap-2 overflow-y-scroll rounded bg-orange-200 p-4 mb-4">
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
			<span>Corners Square Type</span>
			<select name="Corners Square Type" bind:value={cornersSquareType}>
				<option value="square">Square</option>
				<option value="extra-rounded">Extra Rounded</option>
				<option value="Dot">Dot</option>
			</select>
			<span>Dots Type</span>
			<select name="Dots Type" bind:value={dotsType}>
				<option value="square">Square</option>
				<option value="dots">Dots</option>
				<option value="rounded">Rounded</option>
				<option value="classy">Classy</option>
				<option value="classy-rounded">Classy Rounded</option>
				<option value="extra-rounded">Extra Rounded</option>
			</select>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col items-start gap-2">
					<label for="is-polling">Is Polling</label>
					<input id="is-polling" type="checkbox" bind:checked={isPolling} />
				</div>
				<div class="flex flex-col">
					<Input bind:value={pollInterval} label="Poll Interval (milliseconds)" />
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col items-start gap-2">
					<label for="debug">Debug Mode</label>
					<input id="debug" type="checkbox" bind:checked={debug} />
				</div>
			</div>
		</form>
		<span
		>For remaining options, see <a class="" href="https://qr-code-styling.com/" target="_blank"
			>qr-code-styling</a
		></span
	>
	</div>
</div>

<style>
	a {
		@apply text-blue-500 underline;
	}
</style>
