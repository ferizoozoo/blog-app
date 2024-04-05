<script lang="ts">
	import type { Serie } from './types';

	export const series: Serie[] = [
		{
			name: 'Go',
		},
		{
			name: 'C',
		}
	];
</script>

<div class="w-full justify-around flex flex-col gap-4">
	{#each series as serie, idx}
		<a href="/tags/{serie.name}">
			<div
				class="flex w-full justify-between bg-gray-10 m-1 py-1 px-4"
			>
				<span class="w-full text-bold">{serie.name}</span>
			</div>
		</a>
	{/each}
</div>
