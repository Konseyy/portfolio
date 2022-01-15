import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { useEffect } from 'react';
import styles from './index.module.css';
import LandingPageInitial from '../components/LandingPageInitial';
import socials from '../data/Socials';
import projects from '../data/Projects';
import ProjectsList from '../components/ProjectsList';
import AboutMe from '../components/AboutMe';
import NavBar from '../components/NavBar';
export default function Home({ isConnected }) {
	return (
		<div className={styles.root}>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap"
					rel="stylesheet"
				/>
				<title>Valdis - Developer</title>
			</Head>
			<NavBar
				navItems={[
					{
						displayTitle: 'Home',
						elemId: 'home',
					},
					{
						displayTitle: 'About me',
						elemId: 'aboutMe',
					},
					{
						displayTitle: 'My projects',
						elemId: 'projectList',
					},
					// {
					// 	displayTitle:"Contact",
					// 	elemId:""
					// }
				]}
			/>
			<LandingPageInitial id="home" scrollToId="aboutMe" />
			<AboutMe
				id="aboutMe"
				title="My name is Valdis"
				description={[
					<p className="test">
						I'm currently studying for my Bachelor's degree in Computer Science
						at the{' '}
						<a target="_blank" href="https://www.df.lu.lv/">
							University of Latvia
						</a>{' '}
						and also working as a Software Developer for Dhanvantari Solutions.
					</p>,
					<p>
						Most of my experience is as a frontend developer using technologies
						like{' '}
						<a target="_blank" href="https://reactjs.org/">
							React.js
						</a>{' '}
						and{' '}
						<a target="_blank" href="https://reactnative.dev/">
							React Native
						</a>{' '}
						but I also have experience with frameworks like{' '}
						<a target="_blank" href="https://laravel.com/">
							Laravel
						</a>{' '}
						and{' '}
						<a target="_blank" href="https://www.drupal.org/">
							Drupal
						</a>
						.
					</p>,
					<p>
						Constantly striving to learn new concepts as well as better my
						knowledge with already familiar technologies.
					</p>,
					<p>
						In my free time I like to workout in the gym as well as listen to
						and play music.
					</p>,
				]}
				socials={socials}
				scrollToId="projectList"
			/>
			<ProjectsList id="projectList" projects={projects} />
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
