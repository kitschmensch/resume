<script>
	export let education;
</script>

<h2>Education</h2>
<div>
	<ul>
		{#each education as school}
			<li class="bigbullet">
				<div class="institution">{school.institution}</div>
				<div class="focus">{school.area}</div>
				<div class="dates">{school.degree} ({school.dates})</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.dates {
		font-style: italic;
		font-size: smaller;
	}

	.institution {
		font-weight: 500;
		vertical-align: top;
	}
</style>
