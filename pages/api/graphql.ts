import { NextApiRequest, NextApiResponse } from 'next';
import { gql, ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { connectToDatabase } from '../../lib/mongodb';
const cors = require('micro-cors')();
export const config = {
	api: {
		bodyParser: false,
	},
};
export default cors(async (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD'
	);
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://www.valdis.me https://valdis.me'
	);
	const { db } = await connectToDatabase();
	const typeDefs = gql`
		"Query"
		type Query {
			"Returns an array of projects retrieved from the GitHub API"
			projects: [Project]!
		}
		type Project {
			"Name of the project's GitHub repository"
			name: String!
			"Project description"
			description: String
			"Link to project's GitHub repository"
			github_link: String!
			"The most used programming language in the project"
			mainly_used_language: String
			"Date when the project was initialised on GitHub"
			started_at: String!
		}
	`;
	const resolvers = {
		Query: {
			projects: async (_parent, arg, _context) => {
				const res = await fetch('https://api.github.com/users/Konseyy/repos');
				if (!res) return [];
				const data = await res.json();
				return data.map((d) => {
					return {
						name: d.name,
						github_link: d.html_url,
						description: d.description,
						mainly_used_language: d.language,
						started_at: d.created_at,
					};
				});
			},
		},
	};
	const server: ApolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
		introspection: true,
	});
	const startServer = server.start();
	if (req.method === 'OPTIONS') {
		res.end();
		return;
	}
	await startServer;
	await server.createHandler({
		path: '/api/graphql',
	})(req, res);
});
