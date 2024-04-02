<script lang="ts">
	import type { Tag } from "./types";

      export const tags: Tag[] = [
        {
            name: "Go",
            count: 4
        },
        {
            name: "C",
            count: 128
        }
      ]
</script>

<div class="md:p-3 hidden md:visible md:grid md:grid-cols-4 md:gap-4">
	{#each tags as tag,idx }
        <div class="flex justify-between bg-stale-400 w-3 h-3">
            <span class="text-bold">{tag.name}</span>
            <span>{tag.count}</span>
        </div>
    {/each}
</div>
