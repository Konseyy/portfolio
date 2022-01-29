import react from '../public/static/img/react.png';
import typescript from '../public/static/img/typescript.png';
import nextjs from '../public/static/img/nextjs.svg';
import mongodb from '../public/static/img/mongodb.png';
import graphql from '../public/static/img/graphql.png';
import actions from '../public/static/img/actions.png';
import git from '../public/static/img/git.png';
import nodejs from '../public/static/img/nodejs.png';
import vuejs from '../public/static/img/vuejs.png';
import { ProjectProps } from '../components/Project';
const projects: ProjectProps[] = [
	{
		title: 'This Website',
		description:
			'My portfolio website meant for displaying information about me as well as showcasing some of my projects',
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
			},
			{
				image: typescript,
				title: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		title: 'Shift Log',
		description:
			'A mobile app meant for tracking work shifts. Has the ability to create and import backups as well as generate .csv files. Repository includes automatic uploading to the Google Play Store',
		repo_link: 'https://github.com/Konseyy/ShiftLog',
		live_link: 'https://play.google.com/store/apps/details?id=com.shiftlog',
		technologies: [
			{
				image: react,
				title: 'React Native',
				url: 'https://reactnative.dev/',
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
		],
	},
	{
		title: 'Quiz WebApp',
		description:
			'A quiz webapp made with a Vue.js frontend and optional Express.js backend. This webapp fetches data about quizes, questions and checks answers using either a public REST API or calls to a locally running Express.js server',
		repo_link: 'https://github.com/Konseyy/printful-assignment',
		live_link: 'https://www.quiz.valdis.me/',
		demoNewTab: false,
		technologies: [
			{
				image: vuejs,
				title: 'Vue.js',
				url: 'https://vuejs.org/',
			},
			{
				image: nodejs,
				title: 'Node.js',
				url: 'https://nodejs.org/en/',
			},
		],
	},
	{
		title: 'Minesweeper',
		description: 'A Minesweeper clone made with React.js and TypeScript',
		repo_link: 'https://github.com/Konseyy/react_minesweeper',
		live_link: 'https://www.minesweeper.valdis.me/',
		demoNewTab: false,
		technologies: [
			{
				image: react,
				title: 'React.js',
				url: 'https://reactjs.org/',
			},
			{
				image: typescript,
				title: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		title: 'GraphQL Endpoint',
		description:
			'A GraphQL endpoint that fetches data about all my public repositories from the GitHub api. Integration with MongoDB and different mutations coming later',
		repo_link:
			'https://github.com/Konseyy/portfolio/blob/main/pages/api/graphql.ts',
		live_link: '/api/graphql',
		demoNewTab: false,
		technologies: [
			{
				image: graphql,
				title: 'GraphQL',
				url: 'https://graphql.org/',
			},
			{
				image: nextjs,
				title: 'Next.js',
				url: 'https://nextjs.org/',
			},
			{
				image: typescript,
				title: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
			},
		],
	},
];
export default projects;
