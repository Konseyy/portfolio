import { NextApiRequest, NextApiResponse } from 'next';
import { gql, ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { connectToDatabase } from '../../lib/mongodb';
import corsImport from 'micro-cors';
import { mockProjectData } from '../../mock_data/projects';
import { mockTaskData } from '../../mock_data/tasks';
import {
	mockProjectStatuses,
	mockTaskStatuses,
} from '../../mock_data/statuses';
const cors = corsImport();

const handler = cors(async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	const { db } = await connectToDatabase();
	const typeDefs = gql`
		type GithubProjectsPager {
			"Page of results retrieved"
			current_page: Int!
			"Number of projects retrieved in the page"
			items_per_page: Int!
		}
		type GithubProjectsProject {
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
		type GithubProjectsResult {
			"The retrieved projects"
			data: [GithubProjectsProject]!
			"Information about the retrieved page and retrieved amount of items"
			pager: GithubProjectsPager!
		}
		type vueStatusListType {
			"The item's id"
			id: Int!
			"The item's title"
			name: String!
			"The item's status"
			status: String!
		}
		type vueStatusType {
			"The status's id"
			status_id: String!
			"The status's title"
			status_name: String!
			"The status's color"
			color: String!
			"The module which the status belongs to"
			module: vueStatusModule!
			"Whether this is the default status of the module"
			is_default: Boolean!
		}
		enum vueStatusModule {
			"The module's id"
			projects
			tasks
		}
		"Query"
		type Query {
			"Returns an array of projects retrieved from the GitHub API"
			github_projects(
				"Page of the results you want to retrieve"
				page: Int
				"Number of projects you want to retrieve per page"
				items_per_page: Int
			): GithubProjectsResult!
			"Returns an array of items retrieved from the database"
			vue_status_component_list(module: vueStatusModule!): [vueStatusListType]!
			"Returns an array of statuses retrieved from the database"
			vue_status_component_statuses(module: vueStatusModule!): [vueStatusType]!
		}
	`;
	const resolvers = {
		Query: {
			github_projects: async (_parent, arg, _context) => {
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
			vue_status_component_list: async (_parent, arg, _context) => {
				const module = arg.module;
				switch (module) {
					case 'projects':
						return mockProjectData.map((project) => ({
							id: project.project_id,
							name: project.project_name,
							status: project.status,
						}));
					case 'tasks':
						return mockTaskData.map((task) => ({
							id: task.event_id,
							name: task.event_name,
							status: task.status,
						}));
					default:
						return [];
				}
			},
			vue_status_component_statuses: async (_parent, arg, _context) => {
				const module = arg.module;
				switch (module) {
					case 'projects':
						return mockProjectStatuses;
					case 'tasks':
						return mockTaskStatuses;
					default:
						return [];
				}
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
