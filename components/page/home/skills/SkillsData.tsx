import { skill } from './Skills';
import typescript from '@/img/typescript.png';
import javascript from '@/img/javascript.png';
import react from '@/img/react.png';
import reactn from '@/img/reactn.png';
import rust from '@/img/rust.png';
import css from '@/img/css.png';
import nextjs from '@/img/nextjs.svg';
import sass from '@/img/sass.png';
import webgl from '@/img/webgl.png';

const skills: skill[] = [
	{
		name: 'React.js',
		image: react,
		url: 'https://reactjs.org/',
		description: [
			<p>
				My main knowledge in development comes from using React, it's what I use
				for most of my frontend needs.
			</p>,
			<p>
				It was the first frontend framework I ever used professionally and I
				still love using it. Especially since I found out that{' '}
				<a rel="noreferrer" href="https://nextjs.org/">
					NextJS
				</a>{' '}
				existed :)
			</p>,
		],
	},
	{
		name: 'Electron',
		image: react,
		url: 'https://www.electronjs.org/',
		description: [
			<p>
				In my current workplace, a lot of my time is spent working with Electron
				based projects.
			</p>,
			<p>
				I{"'"}ve gotten very used to it by now, and learned a lot of new things
				about managing child processes as well as spawning other ones, working
				with the file system, app update management and other things that come
				with making desktop applications.
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
				Beyond that, I've spent about 8 months maintaining a React Native mobile
				app at my previous workplace
			</p>,
		],
	},
	{
		name: 'WebGL',
		image: webgl,
		url: 'https://get.webgl.org/',
		description: [
			<p>
				Working with graphics had always seemed intimidating to me, but since
				taking a university course on the subject I've found it to be
				fascinating. An opportunity came up at work to refactor an old
				library-based image editor to raw WebGL shaders, and I took it.
			</p>,
			<p>
				Besides the image editor, I{"'"}ve also worked on a project for
				measuring distances between points in space, based on a 3D LiDAR image.
				The measurement gets projected on top of the image with WebGL using
				raymarching and it{"'"}s been by far the most interesting project I{"'"}
				ve ever worked on.
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
				It{"'"}s what I used for making this website and what I plan to continue
				using in the future
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
				make my coding experience so much easier, and the vercel integrations
				and SSR performance is also a nice bonus :)
			</p>,
		],
	},
	{
		name: 'Rust',
		image: rust,
		url: 'https://www.rust-lang.org/',
		description: [
			<p>
				Rust is my most recent discovery in the programming space, and It{"'"}s
				the first time in a long time I{"'"}ve been this interested in something
				not front-end specific.
			</p>,
			<p>
				A lot of my time nowadays is being spent working with frontend
				technologies, so basically, JavaScript or TypeScript. In recent
				university semesters however, I{"'"}ve had to do multiple performance
				reliant projects, and choosing JavaScript is not very optimal in those
				cases :D
			</p>,
			<p>
				For me, rust has been a welcome fascination as well as a reason to
				explore technologies outside of frontend web development once again. I
				{"'"}ve used it for the previously mentioned university projects, and
				most notibly, my{' '}
				<a rel="noreferrer" href="https://github.com/Konseyy/depth-map-shading">
					university course paper project
				</a>
				.
			</p>,
		],
	},
];
export default skills;
