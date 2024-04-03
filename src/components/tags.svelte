<script lang="ts">
	import type { Tag } from './types';

	export const tags: Tag[] = [
		{
			name: 'Go',
			count: 4
		},
		{
			name: 'C',
			count: 128
		}
	];
</script>

<div class="w-full justify-around flex flex-row gap-4">
	{#each tags as tag, idx}
		<a href="/tags/{tag.name}">
			<div
				class="flex w-full gap-2 justify-between bg-gray-100 border-solid border-2 border-gray-200 hover:bg-gray-200 m-1 py-1 px-4 rounded-3xl"
			>
				<span class="w-full text-bold">#{tag.name}</span>
				<span class="w-full">{tag.count} </span>
			</div>
		</a>
	{/each}
</div>
