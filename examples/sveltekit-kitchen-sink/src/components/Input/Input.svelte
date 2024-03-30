<script lang="ts">
	export let id = '';
	export let value: string | number | undefined = '';
	export let label = '';
	export let placeholder = '';
	export let type = 'text';

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<label for={id}>{label}</label>
<input
	class="rounded-lg border-2 border-gray-300 p-3 text-gray-700 outline-gray-300"
	use:typeAction
	{id}
	{placeholder}
	bind:value
/>
