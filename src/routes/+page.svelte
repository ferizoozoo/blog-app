<script>
	import Card from '../components/card.svelte';
	import Post from '../components/post.svelte';

	const posts = [{
		text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
		title: 'Exploring the New Features of React 18',
		date: 'April 5, 2023',
		image: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_08_Trending-Technologies-scaled.jpg',
		author: 'Alex Brown'
    }, {
        text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
		title: 'Exploring the New Features of React 18',
		date: 'April 5, 2023',
		image: 'https://deeptechstartups.in/wp-content/uploads/2022/09/Deep-Tech-1.jpg',
		author: 'Alex Brown'
    }, {
        text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
		title: 'Exploring the New Features of React 18',
		date: 'April 5, 2023',
		image: 'AB',
		author: 'Alex Brown'
    }, {
        text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
		title: 'Exploring the New Features of React 18',
		date: 'April 5, 2023',
		image: 'AB',
		author: 'Alex Brown'
    }, {
        text: `React 18 introduces several exciting features like concurrent rendering, new hooks, and more. In
                this post, we'll dive into what's new and how you can leverage these features in your
                projects...`,
		title: 'Exploring the New Features of React 18',
		date: 'April 5, 2023',
		image: 'AB',
		author: 'Alex Brown'
    }];
</script>

<div class="flex flex-col py-2">
	<div id="posts" class="flex items-center flex-col justify-center">
		{#each posts as post, i}
        <Card>
			<Post post={post} index={i} />
		</Card>
		{/each}
	</div>
</div>
