import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { useEffect } from 'react';
import styles from './index.module.css';
import LandingPageInitial from '../components/LandingPageInitial';
import socials from '../data/Socials';
import projects from '../data/Projects';
import Image from 'next/image';
import ProjectsList from '../components/ProjectsList';
import AboutMe from '../components/AboutMe';
export default function Home({ isConnected }) {
	return (
		<div className={styles.root}>
			<LandingPageInitial scrollToId="aboutMe" />
			<AboutMe
				id="aboutMe"
				title="My name is Valdis"
				description={[
					"I'm currently studying for my Bachelor's degree in Computer Science at the University of Latvia and also working as a Software Developer for Dhanvantari Solutions",
					'Always striving to learn new concepts as well as better my knowledge with already familiar technologies',
					'In my free time I also like to workout in the gym as well as listen to and play music',
				]}
				socials={socials}
			/>
			<ProjectsList projects={projects} />
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
