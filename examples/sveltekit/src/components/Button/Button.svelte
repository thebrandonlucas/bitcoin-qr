<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let wide = false;
</script>

<button class:wide {type} on:click>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply relative select-none border border-orange-600 transition-colors;
		@apply rounded-lg bg-orange-600 px-4 py-3 font-medium text-white;
	}

	button:hover,
	button:focus-visible,
	button:active {
		@apply border-orange-700 bg-orange-700;
	}

	.wide {
		@apply w-full;
	}
</style>
