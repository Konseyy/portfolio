import clientPromise from '../lib/mongodb';
import LandingPageInitial from '@/components/page/home/landing_page_initial/LandingPageInitial';
import ProjectsList from '@/components/page/home/projects/ProjectsList';
import AboutMe from '@/components/page/home/about_me/AboutMe';
import Skills from '@/components/page/home/skills/Skills';
export default function Home({ isConnected }) {
	return (
		<div>
			<LandingPageInitial id="home" scrollToId="aboutMe" />
			<AboutMe
				id="aboutMe"
				title={
					<h1>
						My name is <span>Valdis</span>
					</h1>
				}
				scrollToId="skillSection"
			/>
			<Skills id="skillSection" scrollToId="projectList"/>
			<ProjectsList id="projectList"/>
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
