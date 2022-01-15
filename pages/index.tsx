import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { useEffect } from 'react';
import github from '../public/static/img/github.png';
import linkedin from '../public/static/img/linkedin.png';
import react from '../public/static/img/react.png';
import typescript from '../public/static/img/typescript.png';
import nextjs from '../public/static/img/nextjs.svg';
import mongodb from '../public/static/img/mongodb.png';
import graphql from '../public/static/img/graphql.png';
import git from '../public/static/img/git.png';
import ImageLink from '../components/ImageLink';
import Project from '../components/Project';
import styles from './index.module.css';
import LandingPageInitial from '../components/LandingPageInitial';
import Image from 'next/image';
export default function Home({ isConnected }) {
	return (
		<div className={styles.root}>
			<LandingPageInitial scrollToId="aboutMe" />
			<div id="aboutMe" className={styles.aboutMe}>
				Yes
			</div>
			<div className="socials">
				<ImageLink
					image={github}
					title="GitHub"
					url="https://github.com/Konseyy"
				/>
				<ImageLink
					image={linkedin}
					title="LinkedIn"
					url="https://www.linkedin.com/in/valdis-g-bukalders-a0b9a2168/"
				/>
			</div>
			<div className={styles.projectsContainer}>
				<Project
					title="This Website"
					description="A portfolio website to display my resume and projects"
					hoverColor="#f0f0f0"
					repo_link="https://github.com/Konseyy/portfolio"
					technologies={[
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
					]}
				/>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	try {
		// client.db() will be the default database passed in the MONGODB_URI
		// You can change the database by calling the client.db() function and specifying a database like:
		// const db = client.db("myDatabase");
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands
		await clientPromise;
		return {
			props: { isConnected: true },
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false },
		};
	}
}
