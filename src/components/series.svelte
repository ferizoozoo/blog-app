<script lang="ts">
	import type { Serie } from './types';

	let seriesHeaders: string[] = [];

	export const series: Serie[] = [
		{
			name: 'Go'
		},
		{
			name: 'C'
		}
	];

	let isOpen = false;
	let waiting = false;
	let currentIdx = -1;

	const handleToggle = (idx: number) => {
		if (currentIdx === idx) {
			isOpen = !isOpen
		} else {
			isOpen = true
		}

		currentIdx = idx;
	}

	$: {
		if (isOpen) {
			waiting = true;
			setTimeout(() => {
				seriesHeaders.push('hello world!');
				waiting = false;
			}, 1000);
		}
	}
</script>

<div class="w-full justify-around flex flex-col gap-4">
	{#each series as serie, idx}
		<details
			open={(currentIdx == idx) && isOpen}
			on:toggle={() => handleToggle(idx)}
            class="group w-full rounded-md bg-gray-50 px-3 py-1"
		>
			<summary class="w-full rounded-md px-3 py-1 group-open:border-b-2 group-open:border-gray-200 group-open:bg-gray-100">{serie.name}</summary>
			{#if waiting && (currentIdx === idx) && isOpen}
				<div class="animate-pulse w-full h-full flex flex-col justify-between py-1">
					<ul>
						<li>
							<div class="border-b-2 border-gray-600 rounded-full w-full my-3"></div>
						</li>
						<li>
							<div class="border-b-2 border-gray-600 rounded-full w-11 my-3"></div>
						</li>
                        <li>
							<div class="border-b-2 border-gray-600 rounded-full w-full my-3"></div>
						</li>
                        <li>
							<div class="border-b-2 border-gray-600 rounded-full w-11 my-3"></div>
						</li>
					</ul>
				</div>
			{:else}
				<div class="flex w-full justify-between bg-gray-10 m-1 py-1 px-4">
					<span class="w-full text-bold">{serie.name}</span>
				</div>
			{/if}
		</details>
	{/each}
</div>

<style>
    
</style>