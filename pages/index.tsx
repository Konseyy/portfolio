import clientPromise from '../lib/mongodb';
import LandingPageInitial from '../components/home_page/LandingPageInitial';
import ProjectsList from '../components/home_page/ProjectsList';
import AboutMe from '../components/home_page/AboutMe';
import Skills from '../components/home_page/Skills';
import socialsData from '../data/SocialsData';
import projectsData from '../data/ProjectsData';
import skillsData from '../data/SkillsData';
import aboutMeData from '../data/AboutMeContent';
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
				description={aboutMeData}
				socials={socialsData}
				scrollToId="skillSection"
			/>
			<Skills id="skillSection" scrollToId="projectList" skills={skillsData} />
			<ProjectsList id="projectList" projects={projectsData} />
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
