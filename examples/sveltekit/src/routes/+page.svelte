<script lang="ts">
	import Input from '$components/Input/Input.svelte';
	import { defineCustomElements } from 'bitcoin-qr/loader';
	import dracula from 'svelte-highlight/styles/dracula';
	import { HighlightAuto } from 'svelte-highlight';

	defineCustomElements();

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

	$: code =
		unified || address || invoice || moduleColor || positionCenterColor || positionRingColor
			? `
<bitcoin-qr
	id="qr"
	class="w-1/2"
	${unified}
	bitcoin=${address}
	lightning=${invoice}
	${parameters}
	module-color=${moduleColor}
	position-center-color=${positionCenterColor}
	position-ring-color=${positionRingColor}
	img-src=${imgSrc}
	is-polling=${isPolling}
	${interval}
/>
	`
			: '';
</script>

<svelte:head>
	{@html dracula}
</svelte:head>

<div class="my-8 flex flex-col items-center">
	<h2 class="text-lg font-bold">&ltbitcoin-qr/&gt;</h2>
</div>

<div class="flex flex-col lg:flex-row">
	<div class="flex flex-1 flex-col items-center">
		{#if unified || address || invoice}
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
		{/if}
		<div class="max-w-[800px]">
			<HighlightAuto {code} />
		</div>
	</div>
	<div class="flex-1">
		<form class="flex flex-col gap-2">
			<Input bind:value={unified} label="Unified (BIP-21)" />
			<Input bind:value={invoice} label="Lightning Invoice" />
			<Input bind:value={address} label="Bitcoin Address" />
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
</div>
