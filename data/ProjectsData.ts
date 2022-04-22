import react from '../public/static/img/react.png';
import typescript from '../public/static/img/typescript.png';
import nextjs from '../public/static/img/nextjs.svg';
import graphql from '../public/static/img/graphql.png';
import actions from '../public/static/img/actions.png';
import nodejs from '../public/static/img/nodejs.png';
import vuejs from '../public/static/img/vuejs.png';
import { ProjectProps } from '../components/home_page/Project';
const projects: ProjectProps[] = [
	{
		title: 'This Website',
		description:
			'My portfolio website meant for displaying information about me as well as showcasing some of my projects. Also provides backend endpoints for some of my other projects',
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
		title: 'Status Changer',
		description:
			'A website meant for displaying a custom Vue.js component for task status tracking. Handles staying in viewport, status reorder and status change local caching',
		repo_link: 'https://github.com/Konseyy/vue-status',
		live_link: 'https://status-component.valdis.me/',
		demoNewTab: false,
		technologies: [
			{
				image: vuejs,
				title: 'Vue.js',
				url: 'https://vuejs.org/',
			},
			{
				image: typescript,
				title: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
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
		description: 'A GraphQL Endpoint serving as an api for other projects',
		repo_link:
			'https://github.com/Konseyy/portfolio/blob/main/pages/api/graphql/index.ts',
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
		],
	},
	{
		title: 'Quiz Site',
		description:
			'A quiz website made with a Vue.js frontend and optional Express.js backend. It fetches data about quizes, questions and checks answers using either a public REST API or calls to a locally running Express.js server',
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
];
export default projects;
