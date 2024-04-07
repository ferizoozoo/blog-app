<script lang="ts">
	import { afterUpdate, createEventDispatcher } from 'svelte';
	
	export let name = 'hello';
	export let isOpen = false;
	let result: string[] = [];
	
	const dispatcher = createEventDispatcher();
	
	// TODO: make an HTTP Request
	const handleToggle = async (name: string) => {
		return new Promise<string[]>((resolve) => {
			if (result.length === 0) {
				setTimeout(() => {
					result.push(name + ' #1', name + ' #2', name + ' #3');
					resolve(result);
				}, 2000);
			} else {
				resolve(result);
			}
		});
	};

	afterUpdate(() => {
		if (isOpen){
			dispatcher("opened", {name: name, open: isOpen})
		}
	})

</script>

<details
	bind:open={isOpen}
	class="group w-full rounded-md bg-gray-50 px-3 py-1"
>
	<summary
		class="w-full rounded-md px-3 py-1 group-open:border-b-2 group-open:border-gray-200 group-open:bg-gray-100 hover:cursor-pointer"
		>{name}</summary
	>
	<div class="w-full justify-around flex flex-col gap-4">
		{#if isOpen}
			{#await handleToggle(name)}
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
			{:then headers}
				<ul>
					{#each headers as header, idx}
						<li class="my-1">
							{idx + 1}- <a href="/blog/{header}" class="text-gl underline underline-offset-4">{header}</a>
						</li>
					{/each}
				</ul>
			{:catch someError}
				{console.log(someError)}
				<p>{someError.message}</p>
			{/await}
		{/if}
	</div>
</details>

<style>
</style>
