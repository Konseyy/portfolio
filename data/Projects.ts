import react from '../public/static/img/react.png';
import typescript from '../public/static/img/typescript.png';
import nextjs from '../public/static/img/nextjs.svg';
import mongodb from '../public/static/img/mongodb.png';
import graphql from '../public/static/img/graphql.png';
import actions from '../public/static/img/actions.png';
import git from '../public/static/img/git.png';
const projects = [
	{
		title: 'This Website',
		description:
			'My portfolio website meant for displaying information about me as well as showcasing some of my projects',
		hoverColor: '#f0f0f0',
		repo_link: 'https://github.com/Konseyy/portfolio',
		technologies: [
			{
				image: nextjs,
				title: 'Next.js',
				url: 'https://nextjs.org/',
			},
			{
				image: react,
				title: 'React.js',
				url: 'https://reactjs.org/',
				colored: true,
			},
			{
				image: mongodb,
				title: 'MongoDB',
				url: 'https://www.mongodb.com/',
			},
			{
				image: graphql,
				title: 'GraphQL',
				url: 'https://graphql.org/',
				colored: true,
			},
			{
				image: typescript,
				title: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
			},
			{
				image: git,
				title: 'Git',
				url: 'https://git-scm.com/',
				colored: true,
			},
		],
	},
	{
		title: 'Shift Log',
		description:
			'A mobile app meant for tracking work shifts. Has the ability to create and import backups as well as generate .csv files. Repository includes automatic uploading to the Google Play Store',
		hoverColor: '#f0f0f0',
		repo_link: 'https://github.com/Konseyy/ShiftLog',
		live_link: 'https://play.google.com/store/apps/details?id=com.shiftlog',
		technologies: [
			{
				image: react,
				title: 'React Native',
				url: 'https://nextjs.org/',
			},
			{
				image: actions,
				title: 'GitHub Actions',
				url: 'https://github.com/features/actions',
			},
			{
				image: typescript,
				title: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
			},
			{
				image: git,
				title: 'Git',
				url: 'https://git-scm.com/',
				colored: true,
			},
		],
	},
];
export default projects;
