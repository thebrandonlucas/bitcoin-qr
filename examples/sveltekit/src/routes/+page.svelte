<script lang="ts">
	import {defineCustomElements} from 'bitcoin-qr/loader'

	defineCustomElements();
</script>

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