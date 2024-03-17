<script lang="ts">
	export let bgColor: string; // tailwind class
</script>

<div class={`rounded-2xl p-2 ${bgColor}`}>
	<slot></slot>
</div>
