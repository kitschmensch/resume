<script>
	export let work;
</script>

<h2>Experience</h2>
<div class="work">
	<ul>
		{#each work as job}
			<li class="bigbullet">
				<div class="role">{job.title}</div>
				<div class="company">
					<a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
				</div>
				{#if job.dates}
					<div class="dates">{job.dates}</div>
				{/if}
				<ul>
					{#each job.description as desc}
						<li class="desc">{desc}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style>
	.dates {
		font-style: italic;
		font-size: smaller;
	}

	.role {
		font-weight: 500;
		vertical-align: top;
	}
</style>
