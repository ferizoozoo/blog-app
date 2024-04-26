<script lang="ts">
	import type { Tag } from './types';

	export let tags: Tag[] = [];
</script>

<div class="justify-between grid grid-cols-2 gap-4">
	{#each tags as tag}
		<a href="/tags/{tag.name}">
			<div
				class="flex flex-row justify-between bg-gray-100  hover:bg-gray-200 m-1 py-1 px-4 rounded-3xl"
			>
				<span class="text-bold px-2">#{tag.name}</span>
				<span >{tag.count} </span>
			</div>
		</a>
	{/each}
</div>
