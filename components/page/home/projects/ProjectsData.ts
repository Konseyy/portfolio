import react from '@/img/react.png';
import typescript from '@/img/typescript.png';
import nextjs from '@/img/nextjs.svg';
import graphql from '@/img/graphql.png';
import actions from '@/img/actions.png';
import nodejs from '@/img/nodejs.png';
import vuejs from '@/img/vuejs.png';
import portfolio from '@/img/preview/portfolio.png';
import quiz_site from '@/img/preview/quiz_site.png';
import graphql_preview from '@/img/preview/graphql.png';
import minesweeper from '@/img/preview/minesweeper.png';
import status_component from '@/img/preview/status-comp.png';
import shiftlog from '@/img/preview/shiftlog.png';
import { ProjectProps } from './Project';
const projects: ProjectProps[] = [
	{
		title: 'This Website',
		description:
			'My portfolio website. Also provides backend endpoints for some of my other projects',
		repo_link: 'https://github.com/Konseyy/portfolio',
		preview: portfolio,
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
		title: 'Status Changer',
		description:
			'Website featuring a Vue.js status selector component. Component uses browser drag-and-drop API for status reordering functionality',
		repo_link: 'https://github.com/Konseyy/vue-status',
		live_link: 'https://status-component.valdis.me/',
		preview: status_component,
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
		title: 'Shift Log',
		description:
			'A mobile app meant for tracking work shifts. Provides backups and generating .csv files. Uses GitHub Actions for automatic Play Store uploads',
		repo_link: 'https://github.com/Konseyy/ShiftLog',
		live_link: 'https://play.google.com/store/apps/details?id=com.shiftlog',
		preview: shiftlog,
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
		title: 'Minesweeper',
		description: 'A Minesweeper clone made with React.js and TypeScript',
		repo_link: 'https://github.com/Konseyy/react_minesweeper',
		live_link: 'https://www.minesweeper.valdis.me/',
		preview: minesweeper,
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
		description: 'GraphQL Endpoint serving as a backend for other projects',
		repo_link:
			'https://github.com/Konseyy/portfolio/blob/main/pages/api/graphql/index.ts',
		live_link: '/api/graphql',
		preview: graphql_preview,
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
			'Vue.js quiz site with an optional Express.js backend, featuring network question fetching and answer validation',
		repo_link: 'https://github.com/Konseyy/printful-assignment',
		live_link: 'https://www.quiz.valdis.me/',
		preview: quiz_site,
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
