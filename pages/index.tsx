import clientPromise from '../lib/mongodb';
import LandingPageInitial from '../components/homepage/LandingPageInitial';
import socials from '../data/Socials';
import projects from '../data/Projects';
import ProjectsList from '../components/homepage/ProjectsList';
import AboutMe from '../components/homepage/AboutMe';
import Skills from '../components/homepage/Skills';
import skills from '../data/SkillsData';
import { aboutMeContent } from '../data/AboutMeContent';
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
				description={aboutMeContent}
				socials={socials}
				scrollToId="skillSection"
			/>
			<Skills id="skillSection" scrollToId="projectList" skills={skills} />
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
