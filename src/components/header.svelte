<script lang="ts">
	export let logoSrc: string;
</script>

<div id="header" class="flex items-center place-content-between px-5 py-[1rem] bg-white shadow-md shadow-gray-200">
	<div class="items-center">
		<a href="/">
            <img src={logoSrc} alt="logo" class="h-[3rem] w-[3rem]" />
        </a>
	</div>
	<div class="flex flex-row">
		<slot />
	</div>
</div>
