<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let text: string;

	export let active: boolean;
</script>

<div
	class="mx-2 py-1 hover:text-[var(--accent-color)] hover:underline hover:underline-offset-8 {active
		? 'font-bold text-[var(--primary-color)] underline underline-offset-8'
		: ''}"
>
	<a {href}>{text}</a>
</div>
