import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { useEffect } from 'react';
import github from '../public/static/img/github.png';
import linkedin from '../public/static/img/linkedin.png';
import react from '../public/static/img/react.png';
import typescript from '../public/static/img/typescript.png';
import nextjs from '../public/static/img/nextjs.svg';
import ImageLink from '../components/ImageLink';
export default function Home({ isConnected }) {
	return (
		<div
			className="container"
			style={{
				display: 'Flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
			}}
		>
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
			<ImageLink image={react} title="React.js" url="https://reactjs.org/" />
			<ImageLink
				image={react}
				title="React Native"
				url="https://reactnative.dev/"
				colored={true}
			/>
			<ImageLink
				image={typescript}
				title="TypeScript"
				url="https://www.typescriptlang.org/"
			/>
			<ImageLink image={nextjs} title="Next.js" url="https://nextjs.org/" />
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
