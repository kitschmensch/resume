<script>
	import '../global.css';
	import Work from '../components/Work.svelte';
	import Education from '../components/Education.svelte';
	import Proficiencies from '../components/Proficiencies.svelte';
	import Projects from '../components/Projects.svelte';
	import PrintMe from '../components/PrintMe.svelte';
	import resume from '../resume.json';
</script>

<div>
	<div class="container">
		<div>
			<h1>{resume.basics.firstName} {resume.basics.lastName}</h1>
			<h3>{resume.basics.title}</h3>
		</div>
		<div class="contact">
			<div>
				<a href="mailto:{resume.basics.email}">{resume.basics.email}</a>
			</div>
			<div>
				<a href={resume.basics.linkedin}>LinkedIn</a>
			</div>
			<div>
				<a href={resume.basics.github}>GitHub</a>
			</div>
		</div>
	</div>
	<div class="container blurb">
		<p>
			Hey there! I'm Jake Mecham, currently a Developer & API Consultant at Vineskills. I'm a driven
			autoditact and a tenacious problem solver ready to take on any technical challenge. I have
			experience in almost every dimension of the software business, including on-site
			implementations, customer support, technical writing, product design, backlog management,
			agile team leadership, feature development, and quality assurance.
		</p>
	</div>
	<div class="container wide">
		<div>
			<Work work={resume.work} />
		</div>
		<div class="narrow">
			<Education education={resume.education} />
			<Proficiencies proficiencies={resume.proficiencies} />
			<Projects projects={resume.projects} />
		</div>
	</div>
	<div class="container blurb">
		<div>
			<h2>What else am I into?</h2>
			<ul class="interest">
				{#each resume.interests as interest}
					<li>{interest}</li>
				{/each}
			</ul>
		</div>
	</div>
	<PrintMe />
</div>

<style>
	.interest {
		columns: 2;
	}

	.contact {
		text-align: right;
		font-family: 'IBM Plex Mono', monospace;
		font-size: 1.2rem;
		position: relative;
		margin: auto 0;
	}
</style>
