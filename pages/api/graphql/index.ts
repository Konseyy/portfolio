import { NextApiRequest, NextApiResponse } from 'next';
import { gql, ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { connectToDatabase } from '../../../lib/mongodb';
import corsImport from 'micro-cors';
import githubProjects from './endpoints/githubProjects';
import vueStatusComponent from './endpoints/vueStatusComponent';
const cors = corsImport();

const handler = cors(async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	const { db } = await connectToDatabase();
	const typeDefs = gql`
		type Query
	`;
	const resolvers = {
		Query: {
			...githubProjects.resolvers,
			...vueStatusComponent.resolvers,
		},
	};
	const server: ApolloServer = new ApolloServer({
		typeDefs: [typeDefs, vueStatusComponent.typeDefs, githubProjects.typeDefs],
		resolvers,
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground({
				endpoint:
					process.env.VERCEL_ENV === 'production'
						? `https://www.valdis.me/api/graphql`
						: '/api/graphql',
			}),
		],
		introspection: true,
	});
	const startServer = server.start();
	await startServer;

	return server.createHandler({
		path: '/api/graphql',
	})(req, res);
});

export default handler;
export const config = {
	api: {
		bodyParser: false,
	},
};
