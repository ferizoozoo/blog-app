<script lang="ts">
	import Serie from './serie.svelte';
	import type { Serie as SerieInfo } from './types';

	let seriesHeaders: string[] = [];

	export const series: SerieInfo[] = [
		{
			name: 'Go'
		},
		{
			name: 'C'
		}
	];
	
	let currentIdx = -1;
	const handleToggle = (e: any, idx: number) => {
		console.log(e)
		if (currentIdx === idx) {
			return
		}
		currentIdx = idx;
	}
</script>

<div class="w-full justify-around flex flex-col gap-4">
	{#each series as serie, idx}
		<Serie name={serie.name} />
	{/each}
</div>

<style>
</style>
