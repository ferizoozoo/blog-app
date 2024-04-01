<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import HeaderLink from '../components/headerLink.svelte';
	import { page } from '$app/stores';
</script>

<div class="h-fit">
	<Header logoSrc="/favicon.png">
		<HeaderLink href="/about" text="About" active={$page.url.pathname.includes('/about')} />
		<HeaderLink href="/blog" text="Blog" active={$page.url.pathname.includes('/blog')} />
		<HeaderLink href="/tags" text="Tags" active={$page.url.pathname.includes('/tags')} />
	</Header>
  <div class="flex justify-center items-center my-5">
	<slot />
  </div>
</div>