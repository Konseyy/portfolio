import { NextApiRequest, NextApiResponse } from 'next';
import { gql, ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { connectToDatabase } from '../../lib/mongodb';
import corsImport from 'micro-cors';
const cors = corsImport();

const handler = cors(async (req: NextApiRequest, res: NextApiResponse) => {
	const { db } = await connectToDatabase();
	const typeDefs = gql`
		"Query"
		type Query {
			"Returns an array of projects retrieved from the GitHub API"
			projects(
				"Page of the results you want to retrieve"
				page: Int
				"Number of projects you want to retrieve per page"
				items_per_page: Int
			): ProjectsResult!
		}
		type Pager {
			"Page of results retrieved"
			current_page: Int!
			"Number of projects retrieved in the page"
			items_per_page: Int!
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
		type ProjectsResult {
			data: [Project]!
			pager: Pager!
		}
	`;
	const resolvers = {
		Query: {
			projects: async (_parent, arg, _context) => {
				const page = arg.page ?? 1;
				const per_page = arg.items_per_page
					? arg.items_per_page >= 100
						? 100
						: arg.items_per_page
					: 10;
				const res = await fetch(
					`https://api.github.com/users/Konseyy/repos?page=${page}&per_page=${per_page}`
				);
				if (!res) return [];
				const data = await res.json();
				return {
					data: data.map((d) => {
						return {
							name: d.name,
							github_link: d.html_url,
							description: d.description,
							mainly_used_language: d.language,
							started_at: d.created_at,
						};
					}),
					pager: {
						current_page: page,
						items_per_page: per_page,
					},
				};
			},
		},
	};
	const server: ApolloServer = new ApolloServer({
		typeDefs,
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
	if (req.method === 'OPTIONS') {
		res.end();
		return false;
	}

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
