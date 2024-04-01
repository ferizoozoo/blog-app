<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	export let logoSrc: string;

	let scrolled = false;
	const handleScroll = () => {
		scrolled = window.scrollY > 10;
	};

    onMount(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onDestroy(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<div
	on:scroll={handleScroll}
	id="header"
	class="flex items-center place-content-between px-5 {scrolled ? 'py-1' : 'py-[1rem]'} bg-white shadow-md shadow-gray-200 sticky top-0 z-50"
>
	<div class="items-center">
		<a href="/">
			<img
				src={logoSrc}
				alt="logo"
				class="h-[3rem] w-[3rem] hover:drop-shadow-[0_4px_0px_rgba(255,62,0,1)]"
			/>
		</a>
	</div>
	<div class="flex flex-row">
		<slot />
	</div>
</div>
