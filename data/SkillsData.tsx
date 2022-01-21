import { skill } from '../components/Skills';
import typescript from '../public/static/img/typescript.png';
import javascript from '../public/static/img/javascript.png';
import react from '../public/static/img/react.png';
import reactn from '../public/static/img/reactn.png';
import laravel from '../public/static/img/laravel.png';
import graphql from '../public/static/img/graphql.png';
import php from '../public/static/img/php.png';
import css from '../public/static/img/css.png';
import sql from '../public/static/img/sql.png';
import nextjs from '../public/static/img/nextjs.svg';

const skills: skill[] = [
	{
		name: 'React.js',
		image: react,
		url: 'text.com',
		description: [
			<p>this is Raect.jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>,
			<p>This is alos reactaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>,
		],
	},
	{
		name: 'React Native',
		image: reactn,
		url: 'text.com',
		description: [<p>React native for mobile</p>],
	},
	{
		name: 'JavaScript',
		image: javascript,
		url: 'text.com',
		description: [<p>Main web language</p>],
	},
	{
		name: 'TypeScript',
		image: typescript,
		url: 'text.com',
		description: [<p>This is typescript</p>],
	},
	{
		name: 'CSS',
		image: css,
		url: 'text.com',
		description: [<p>This is typescript</p>],
	},
	{
		name: 'Next.js',
		image: nextjs,
		url: 'text.com',
		description: [<p>This is typescript</p>],
	},
	{
		name: 'Laravel',
		image: laravel,
		url: 'text.com',
		description: [<p>React native for mobile</p>],
	},

	{
		name: 'PHP',
		image: php,
		url: 'text.com',
		description: [<p>This is typescript</p>],
	},
	{
		name: 'SQL',
		image: sql,
		url: 'text.com',
		description: [<p>This is typescript</p>],
	},

	{
		name: 'GraphQL',
		image: graphql,
		url: 'text.com',
		description: [<p>Main web language</p>],
	},
];
export default skills;
