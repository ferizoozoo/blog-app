<script>
	export let shadowDisabled = false;
</script>

<article
	class="max-w-2xl mb-8 rounded-lg bg-white p-6 my-4 {shadowDisabled ? '' : 'hover:shadow-md'}"
>
	<slot />
</article>
