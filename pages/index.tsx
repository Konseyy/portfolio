import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { useEffect } from 'react';
import styles from './index.module.css';
import LandingPageInitial from '../components/LandingPageInitial';
import Image from 'next/image';
import ProjectsList from '../components/ProjectsList';
import AboutMe from '../components/AboutMe';
export default function Home({ isConnected }) {
	return (
		<div className={styles.root}>
			<LandingPageInitial scrollToId="aboutMe" />
			<AboutMe id="aboutMe" />
			<ProjectsList />
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
