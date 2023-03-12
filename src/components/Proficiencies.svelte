<script>
	export let proficiencies;
</script>

<h2>Proficiencies</h2>
<div>
	<h4>Tech:</h4>
	<ul class="skill_list">
		{#each proficiencies.tech as lang}<li>{lang}</li>{/each}
	</ul>
</div>
<div>
	<h4>Tools:</h4>
	<ul class="skill_list">
		{#each proficiencies.tools as tool}<li>{tool}</li>{/each}
	</ul>
</div>

<style>
	.skill_list {
		column-count: 2;
	}
</style>
