<script lang="ts">
	import Serie from './serie.svelte';
	import type { Serie as SerieInfo } from './types';
	export let series: SerieInfo[] = [
		{name: "Test"},
		{name: "test 2"}
	]

	let currnetlyOpen = "";

	function OpenHndler(e: CustomEvent) {
		currnetlyOpen = e.detail.name
	} 
</script>

<div class="w-full justify-around flex flex-col gap-4 ">
	{#each series as serie}
		<Serie on:opened={OpenHndler} name={serie.name} isOpen={serie.name === currnetlyOpen}/>
	{/each}
</div>

<style>
</style>
