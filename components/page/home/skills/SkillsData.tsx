import { skill } from './Skills';
import typescript from '@/img/typescript.png';
import javascript from '@/img/javascript.png';
import react from '@/img/react.png';
import reactn from '@/img/reactn.png';
import drupal from '@/img/drupal.png';
import css from '@/img/css.png';
import nextjs from '@/img/nextjs.svg';
import sass from '@/img/sass.png';
import vuejs from '@/img/vuejs.png';

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
				still love using it. Especially since I found out that{' '}
				<a
					rel="noreferrer"
					href="https://reactjs.org/docs/components-and-props.html"
				>
					functional components
				</a>{' '}
				existed :)
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
				<a
					rel="noreferrer"
					href="https://play.google.com/store/apps/details?id=com.shiftlog"
				>
					lightweight work tracking app
				</a>
				.
			</p>,
			<p>
				Beyond that, I've spent about 6 months maintaining a React Native mobile
				app at work
			</p>,
		],
	},
	{
		name: 'Vue.js',
		image: vuejs,
		url: 'https://v3.vuejs.org/',
		description: [
			<p>
				I had known about Vue.js for a while since it was always showing up in
				videos i watched but I never really had a reason to try it.
			</p>,
			<p>
				That is, until an opportunity came up to make a{' '}
				<a rel="noreferrer" href="https://www.quiz.valdis.me/">
					small project
				</a>{' '}
				using it. While I do still prefer using React, I definitely see the
				advantage of Vue to get stuff working with less initial boilerplate.
			</p>,
			<p>
				I also ended up making another Vue.js{' '}
				<a rel="noreferrer" href="https://status-component.valdis.me/">
					project
				</a>{' '}
				using the new script setup and TypeScript
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
				I've become very used to it's coding style and using the ECMAScript
				goodies that come with it
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
				<a
					rel="noreferrer"
					href="https://play.google.com/store/apps/details?id=com.shiftlog"
				>
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
				<a rel="noreferrer" href="https://nextjs.org/docs/routing/introduction">
					integrated routing
				</a>{' '}
				as well as{' '}
				<a
					rel="noreferrer"
					href="https://nextjs.org/docs/basic-features/built-in-css-support"
				>
					integrated scss support and locally scoped styling
				</a>{' '}
				make my coding experience so much easier.
			</p>,
		],
	},
	{
		name: 'Drupal',
		image: drupal,
		url: 'https://www.drupal.org/',
		description: [
			<p>
				Most of my backend framework experience comes from my job, working with
				Drupal.
			</p>,
		],
	},
];
export default skills;
