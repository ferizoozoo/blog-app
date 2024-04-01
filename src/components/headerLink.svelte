<script lang="ts">
    import { page } from '$app/stores';

    export let href: string;
    export let text: string;

    export let active: boolean;
</script>

<div class="mx-5 hover:text-black {active ? 'font-bold text-black' : ''}">
    <a {href}>{text}</a>
</div>