import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/index.js";
const global = "";
const Work_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".dates.svelte-zalyla{font-style:italic;font-size:smaller}.role.svelte-zalyla{font-weight:500;vertical-align:top}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { work: work2 } = $$props;
  if ($$props.work === void 0 && $$bindings.work && work2 !== void 0)
    $$bindings.work(work2);
  $$result.css.add(css$5);
  return `<h2>Experience</h2>
<div class="${"work"}"><ul>${each(work2, (job) => {
    return `<li class="${"bigbullet"}"><div class="${"role svelte-zalyla"}">${escape(job.title)}</div>
				<div class="${"company"}"><a${add_attribute("href", job.url, 0)} target="${"_blank"}" rel="${"noreferrer"}">${escape(job.company)}</a></div>
				${job.dates ? `<div class="${"dates svelte-zalyla"}">${escape(job.dates)}</div>` : ``}
				<ul>${each(job.description, (desc) => {
      return `<li class="${"desc"}">${escape(desc)}</li>`;
    })}</ul>
			</li>`;
  })}</ul>
</div>`;
});
const Education_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".dates.svelte-728wpg{font-style:italic;font-size:smaller}.institution.svelte-728wpg{font-weight:500;vertical-align:top}",
  map: null
};
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { education: education2 } = $$props;
  if ($$props.education === void 0 && $$bindings.education && education2 !== void 0)
    $$bindings.education(education2);
  $$result.css.add(css$4);
  return `<h2>Education</h2>
<div><ul>${each(education2, (school) => {
    return `<li class="${"bigbullet"}"><div class="${"institution svelte-728wpg"}">${escape(school.institution)}</div>
				<div class="${"focus"}">${escape(school.area)}</div>
				<div class="${"dates svelte-728wpg"}">${escape(school.degree)} (${escape(school.dates)})</div>
			</li>`;
  })}</ul>
</div>`;
});
const Proficiencies_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".skill_list.svelte-1wj6hsk{column-count:2}",
  map: null
};
const Proficiencies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { proficiencies: proficiencies2 } = $$props;
  if ($$props.proficiencies === void 0 && $$bindings.proficiencies && proficiencies2 !== void 0)
    $$bindings.proficiencies(proficiencies2);
  $$result.css.add(css$3);
  return `<h2>Proficiencies</h2>
<div><h4>Tech:</h4>
	<ul class="${"skill_list svelte-1wj6hsk"}">${each(proficiencies2.tech, (lang) => {
    return `<li>${escape(lang)}</li>`;
  })}</ul></div>
<div><h4>Tools:</h4>
	<ul class="${"skill_list svelte-1wj6hsk"}">${each(proficiencies2.tools, (tool) => {
    return `<li>${escape(tool)}</li>`;
  })}</ul>
</div>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".project.svelte-1mpiao7{margin-bottom:1rem}.name.svelte-1mpiao7{font-weight:bold}.tech.svelte-1mpiao7{font-style:italic;margin-top:0.25rem}.description.svelte-1mpiao7{margin-top:0.5rem;overflow-wrap:break-word;hyphens:manual}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects: projects2 } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects2 !== void 0)
    $$bindings.projects(projects2);
  $$result.css.add(css$2);
  return `<h2>Projects</h2>
<div>${each(projects2, (project) => {
    return `<div class="${"project svelte-1mpiao7"}"><div class="${"name svelte-1mpiao7"}"><a${add_attribute("href", project.url, 0)}>${escape(project.name)}</a></div>
			<div class="${"description svelte-1mpiao7"}">${escape(project.description)}</div>
			<div class="${"tech svelte-1mpiao7"}">${escape(project.tech)}</div>
		</div>`;
  })}
</div>`;
});
const PrintMe_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".printButton.svelte-1974zcd{background:red;border:3px double black;color:white;text-align:center;font-family:'IBM Plex Mono', monospace;font-size:larger;height:6rem;width:6rem;margin:5px;border-radius:100%;transform:rotate(-10deg);position:fixed;bottom:0;right:0;z-index:1}.printButton.svelte-1974zcd:hover{background:white;border:3px double red;color:black}",
  map: null
};
const PrintMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<button class="${"printButton svelte-1974zcd"}">Print me!</button>`;
});
const basics = {
  firstName: "Jake",
  lastName: "Mecham",
  phone: "208-403-6947",
  email: "jake@mecham.xyz",
  title: "Developer & API Consultant",
  linkedin: "https://www.linkedin.com/in/mechamjake/",
  github: "https://github.com/kitschmensch"
};
const work = [
  {
    company: "Vineskills",
    url: "https://vineskills.com",
    title: "Optimizer",
    dates: "Oct 2022 — Present",
    description: [
      "Developed a CLI tool in Python to modify customer's data in bulk using spreadsheets",
      "Consult with clients on API integrations and best practices"
    ]
  },
  {
    company: "Filevine",
    url: "https://filevine.com",
    title: "Product Owner",
    dates: "Jan 2020 — Sep 2022",
    description: [
      "Designed and led development on calendar UI, custom roles, admin tools, and API endpoints",
      "Run daily standup and manage priorities for a dev team of 7",
      "Manage feature requests and product backlog"
    ]
  },
  {
    company: "Filevine",
    url: "https://filevine.com",
    title: "API Support Engineer",
    dates: "May 2019 — Jan 2020",
    description: [
      "Helped engineers build integrations with our platform by troubleshooting their code",
      "Preformed code reviews and QA testing on new features",
      "Sole author and maintainer of Filevine's REST API documentation"
    ]
  },
  {
    company: "Filevine",
    url: "https://filevine.com",
    title: "Head of Support",
    dates: "Feb 2019 — Sep 2019",
    description: [
      "Served as the resident product expert, answering internal Sales and Implementations questions",
      "Investigated and verified platform issues and bugs to report to the development team"
    ]
  },
  {
    company: "Filevine",
    url: "https://filevine.com",
    title: "Implementation Consultant",
    dates: "Apr 2018 — May 2019",
    description: [
      "Implemented more than $1 million in ARR",
      "Migrated customer data using MS Power Query, Python API scripts, and in-house applications"
    ]
  },
  {
    company: "Vogelzang Law",
    url: "https://vogelzanglaw.com",
    title: "Information Technology Specialist",
    dates: "Jul 2017 — Apr 2018",
    description: [
      "Consolidated and migrated 15 years worth of settlement data stored in unformatted Excel files into a cohesive database"
    ]
  }
];
const education = [
  {
    institution: "University of Chicago",
    area: "Humanities",
    degree: "Master of Arts",
    dates: "2015—2016"
  },
  {
    institution: "BYU—Idaho",
    area: "Music Composition",
    degree: "Bachelor of Arts",
    dates: "2009—2013"
  }
];
const proficiencies = {
  tech: [
    "Python",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "Svelte",
    "React",
    "LAMP",
    "Node.js",
    "Django"
  ],
  tools: [
    "VS Code",
    "Postman",
    "Figma",
    "Balsamiq",
    "Adobe XD",
    "DataGrip",
    "GitLab",
    "Jira",
    "Confluence",
    "New Relic",
    "AWS"
  ]
};
const projects = [
  {
    name: "composers.fyi",
    url: "https://www.composers.fyi",
    description: "I used React and php to build a touch-enabled timeline of classical music composers. Smooth audio transitions should help give the user gain an intuitive understanding of the evolution of orchestral musical styles.",
    tech: "LAMP & React"
  },
  {
    name: "arcadian",
    url: "https://github.com/kitschmensch/arcadian",
    description: "I built this tool to help my partner and I manage our finances. The app uses Django REST framework to expose a Postgresdb to the Svelte frontend. It's currently installed on a Raspberry Pi and hosted on our home network. ",
    tech: "Django & Svelte"
  }
];
const interests = [
  "Chiptunes",
  "Photography",
  "Indian & Chinese cuisine",
  "Philosophical Doaism",
  "Hiking & travel",
  "Vintage keyboard collecting",
  "Kitschy art"
];
const resume = {
  basics,
  work,
  education,
  proficiencies,
  projects,
  interests
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".interest.svelte-1xjo85g{columns:2}.contact.svelte-1xjo85g{text-align:right;font-family:'IBM Plex Mono', monospace;font-size:1.2rem;position:relative;margin:auto 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><div class="${"container"}"><div><h1>${escape(resume.basics.firstName)} ${escape(resume.basics.lastName)}</h1>
			<h3>${escape(resume.basics.title)}</h3></div>
		<div class="${"contact svelte-1xjo85g"}"><div><a href="${"mailto:" + escape(resume.basics.email, true)}">${escape(resume.basics.email)}</a></div>
			<div><a${add_attribute("href", resume.basics.linkedin, 0)}>LinkedIn</a></div>
			<div><a${add_attribute("href", resume.basics.github, 0)}>GitHub</a></div></div></div>
	<div class="${"container blurb"}"><p>Hey there! I&#39;m Jake Mecham, currently a Developer &amp; API Consultant at Vineskills. I&#39;m a driven
			autoditact and a tenacious problem solver ready to take on any technical challenge. I have
			experience in almost every dimension of the software business, including on-site
			implementations, customer support, technical writing, product design, backlog management,
			agile team leadership, feature development, and quality assurance.
		</p></div>
	<div class="${"container wide"}"><div>${validate_component(Work, "Work").$$render($$result, { work: resume.work }, {}, {})}</div>
		<div class="${"narrow"}">${validate_component(Education, "Education").$$render($$result, { education: resume.education }, {}, {})}
			${validate_component(Proficiencies, "Proficiencies").$$render($$result, { proficiencies: resume.proficiencies }, {}, {})}
			${validate_component(Projects, "Projects").$$render($$result, { projects: resume.projects }, {}, {})}</div></div>
	<div class="${"container blurb"}"><div><h2>What else am I into?</h2>
			<ul class="${"interest svelte-1xjo85g"}">${each(resume.interests, (interest) => {
    return `<li>${escape(interest)}</li>`;
  })}</ul></div></div>
	${validate_component(PrintMe, "PrintMe").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
