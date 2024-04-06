<script lang="ts">
	export let name = 'hello';
	let isOpen = false;
	let result: string[] = [];

	const handleToggle = async (name: string) => {
		return new Promise<string[]>((resolve, reject) => {
			if (result.length === 0) {
				setTimeout(() => {
					result.push('hello1', 'hello2', 'hello3');
                    resolve(result)
				}, 2000);
			} else {
                resolve(result)
            }
		});
	};
</script>

<details
	on:toggle={() => {
		isOpen = !isOpen;
	}}
    bind:open={isOpen}
	class="group w-full rounded-md bg-gray-50 px-3 py-1"
>
	<summary
		class="w-full rounded-md px-3 py-1 group-open:border-b-2 group-open:border-gray-200 group-open:bg-gray-100"
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
				<ol>
					{#each headers as header, idx}
						<li>
							{idx + 1}- <a href="#" class="text-2xl underline underline-offset-8">{header}</a>
						</li>
					{/each}
				</ol>
			{:catch someError}
                {console.log(someError)}
				<p>{someError.message}</p>
			{/await}
		{/if}
	</div>
</details>

<style>
</style>
