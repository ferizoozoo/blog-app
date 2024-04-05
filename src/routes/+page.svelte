<script lang="ts">
	import Card from '../components/card.svelte';
	import Post from '../components/post.svelte';
	import Series from '../components/series.svelte';
	import Tags from '../components/tags.svelte';
	import type { Tag, Serie } from '../components/types';

	const posts = [
		{
			text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
			title: 'Exploring the New Features of React 18',
			date: 'April 5, 2023',
			image:
				'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_08_Trending-Technologies-scaled.jpg',
			author: 'Alex Brown'
		},
		{
			text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
			title: 'Exploring the New Features of React 18',
			date: 'April 5, 2023',
			image: 'https://deeptechstartups.in/wp-content/uploads/2022/09/Deep-Tech-1.jpg',
			author: 'Alex Brown'
		},
		{
			text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
			title: 'Exploring the New Features of React 18',
			date: 'April 5, 2023',
			image:
				'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_08_Trending-Technologies-scaled.jpg',
			author: 'Alex Brown'
		},
		{
			text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
			title: 'Exploring the New Features of React 18',
			date: 'April 5, 2023',
			image: 'https://deeptechstartups.in/wp-content/uploads/2022/09/Deep-Tech-1.jpg',
			author: 'Alex Brown'
		},
		{
			text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
			title: 'Exploring the New Features of React 18',
			date: 'April 5, 2023',
			image:
				'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_08_Trending-Technologies-scaled.jpg',
			author: 'Alex Brown'
		}
	];

	const tags: Tag[] = [
		{
			name: 'Go',
			count: 4
		},
		{
			name: 'C',
			count: 128
		}
	];

	const series: Serie[] = [
		{
			name: 'Go',
		},
		{
			name: 'C',
		}
	];
</script>

<div class="scrollable flex flex-col md:flex-row py-2 md:gap-6">
	<div id="posts" class="flex items-center flex-col justify-center flex-4">
		{#each posts as post, i}
			<Card>
				<Post {post} index={i} />
			</Card>
		{/each}
	</div>

	<div class="flex-1 hidden md:block">
		<Card shadowDisabled={true}>
			<Tags {tags} />
		</Card>
		<Card shadowDisabled={true}>
			<Series {series} />
		</Card>
	</div>
</div>