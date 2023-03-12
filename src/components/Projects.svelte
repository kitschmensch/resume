<script>
	export let projects;
</script>

<h2>Projects</h2>
<div>
	{#each projects as project}
		<div class="project">
			<div class="name">
				<a href={project.url}>{project.name}</a>
			</div>
			<div class="description">{project.description}</div>
			<div class="tech">{project.tech}</div>
		</div>
	{/each}
</div>

<style>
	.project {
		margin-bottom: 1rem;
	}
	.name {
		font-weight: bold;
	}
	.tech {
		font-style: italic;
		margin-top: 0.25rem;
	}
	.description {
		margin-top: 0.5rem;
		overflow-wrap: break-word;
		hyphens: manual;
	}
</style>
