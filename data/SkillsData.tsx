import { skill } from '../components/Skills';
import typescript from '../public/static/img/typescript.png';
import javascript from '../public/static/img/javascript.png';
import react from '../public/static/img/react.png';
import reactn from '../public/static/img/reactn.png';
import laravel from '../public/static/img/laravel.png';
import graphql from '../public/static/img/graphql.png';
import css from '../public/static/img/css.png';
import sql from '../public/static/img/sql.png';
import nextjs from '../public/static/img/nextjs.svg';
import sass from '../public/static/img/sass.png';

const skills: skill[] = [
	{
		name: 'React.js',
		image: react,
		url: 'https://reactjs.org/',
		description: [
			<p>
				My main knowledge in development comes from using React, it's what I use
				for all of my frontend needs.
			</p>,
			<p>
				It was the first frontend framework I ever used professionally and I
				still love using it. Ever since I found out that{' '}
				<a href="https://reactjs.org/docs/components-and-props.html">
					function components
				</a>{' '}
				existed, I've become even more fond of it.
			</p>,
		],
	},
	{
		name: 'React Native',
		image: reactn,
		url: 'https://reactnative.dev/',
		description: [
			<p>
				When I found out that React can be used for things other than web design
				I knew I just had to try it.
			</p>,
			<p>
				I ran into a situation at work where I had to keep track of my work
				hours and what I had done for the day, but I couldn't find any app for
				doing this that suited my tastes, so I made my own{' '}
				<a href="https://play.google.com/store/apps/details?id=com.shiftlog">
					lightweight work tracking app
				</a>
				.
			</p>,
		],
	},
	{
		name: 'JavaScript',
		image: javascript,
		url: 'https://www.javascript.com/',
		description: [
			<p>
				JavaScript makes up most of my web development time, It's what allows my
				creations to come to life.
			</p>,
			<p>
				I've become very used to it's coding style and using its supported
				features like Arrow functions, the Promise API with async/await and the
				built in Array methods.
			</p>,
		],
	},
	{
		name: 'TypeScript',
		image: typescript,
		url: 'https://www.typescriptlang.org/',
		description: [
			<p>
				At first I wasn't really sure what the point of TypeScript was, but I
				decided to try it out when I was making my{' '}
				<a href="https://play.google.com/store/apps/details?id=com.shiftlog">
					first mobile application
				</a>
				. I was very surprised at how easy it made it to find mistakes in my
				code, just by trading in a bit of time beforehand stating what
				everything should be.
			</p>,
			<p>Nowadays, I use it in all of my projects that allow it.</p>,
		],
	},
	{
		name: 'CSS',
		image: css,
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		description: [
			<p>
				CSS was something that I definitely wasn't a fan of at first, but now
				I've realised that most likely was because I was just pretty bad at
				using it.
			</p>,
			<p>
				I wouldn't call myself a designer then or now by any means, but this
				wonderful piece of technology does give me the opportunity to make
				<span> my neon pink dreams</span> come true.
			</p>,
		],
	},
	{
		name: 'Sass',
		image: sass,
		url: 'https://sass-lang.com/',
		description: [
			<p>
				Sass, or rather, .scss files, were most likely the discovery that got me
				actually liking the process of styling my documents.
			</p>,
			<p>
				Even though CSS is slowly implementing some features that Sass offers, I
				still find it very beneficial to use in the hopes of keeping my code
				more readable and more easily refactorable.
			</p>,
		],
	},
	{
		name: 'Next.js',
		image: nextjs,
		url: 'https://nextjs.org/',
		description: [
			<p>
				Next.js is my most recent discovery in the frontend world. It's what I
				used for making this website and what I plan to continue using in the
				future
			</p>,
			<p>
				It takes everything I already loved about react and makes using it so
				much easier. The{' '}
				<a href="https://nextjs.org/docs/routing/introduction">
					integrated routing
				</a>{' '}
				as well as{' '}
				<a href="https://nextjs.org/docs/basic-features/built-in-css-support">
					integrated scss support and locally scoped styling
				</a>{' '}
				make my coding experience so much easier.
			</p>,
		],
	},
	{
		name: 'Laravel',
		image: laravel,
		url: 'https://laravel.com/',
		description: [
			<p>
				Laravel was my first introduction to a software framework, as part of my
				university Web Technologies II course, in which my final assignment was
				to make a{' '}
				<a href="https://github.com/Konseyy/WebTech2FinalProject">project</a>.
			</p>,
			<p>
				I also used Laravel as the main backend framework of the first project I
				was assigned to work on.
			</p>,
		],
	},
	{
		name: 'MySQL',
		image: sql,
		url: 'https://www.mysql.com/',
		description: [
			<p>Most of my experience with using databases is with MySQL.</p>,
			<p>
				I have also used <a href="https://www.postgresql.org/">PostgresSQL</a>{' '}
				and also minimal experience working in a NoSQL environment with{' '}
				<a href="https://www.mongodb.com/">MongoDB</a>.
			</p>,
		],
	},
	{
		name: 'GraphQL',
		image: graphql,
		url: 'https://graphql.org/',
		description: [
			<p>
				I only recently started experimenting with GraphQL and find it very
				interesting to work with.
			</p>,
			<p>
				So far I have managed to create a{' '}
				<a href="/api/graphql">simple endpoint</a> that connects with the GitHub
				api and returns data about my public repositories, but I am looking
				forward to do much more with it, especially on personal projects as it
				is significantly more simple to work with on the frontend side of
				things.
			</p>,
		],
	},
];
export default skills;
