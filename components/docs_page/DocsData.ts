import {
	gql_github_projects_query,
	gql_list_query,
	gql_statuses_query,
	rest_list_req,
	rest_list_resp,
	rest_statuses_req,
	rest_statuses_resp,
} from './DocsTextBlocks';

type DocsEntry = {
	title?: string;
	description?: string;
	textBlock: string;
	id?: string;
};
type DocsSection = {
	id: string;
	title: string;
	description?: string;
	entries: DocsEntry[];
};
const statusModules = ['tasks', 'projects'];
export const DocsData: DocsSection[] = [
	{
		title: 'REST Documentation',
		description: 'Only accepts POST requests',
		id: 'restDocs',
		entries: [
			// Status items
			{
				title: `Request <a href="/api/list">/api/list</a>`,
				description: `
				Returns list of items for status changing that belong to the module specified in the JSON body,
				Available modules: ${statusModules.map((module) => `"${module}"`).join(', ')}
				`,
				textBlock: rest_list_req,
			},
			{
				title: `Response`,
				textBlock: rest_list_resp,
			},
			// Statuses
			{
				title: `Request <a href="/api/statuses">/api/statuses</a>`,
				description: `
				Returns list of statuses for the module specified in the JSON body,
				Available modules: ${statusModules.map((module) => `"${module}"`).join(', ')}
				`,
				textBlock: rest_statuses_req,
			},
			{
				title: `Response`,
				textBlock: rest_statuses_resp,
			},
		],
	},
	{
		title: 'GraphQL Documentation',
		id: 'gqlDocs',
		description: `
		Documentation for queries and mutations at <a href="/api/graphql">/api/graphql</a>
		`,
		entries: [
			{
				title: `Status items list`,
				description: `
				Returns list of items for status changing that belong to the module specified
				Available modules: ${statusModules.map((module) => `"${module}"`).join(', ')}
				`,
				textBlock: gql_list_query,
			},
			{
				title: `Status item statuses list`,
				description: `
				Returns list of statuses for the module specified
				Available modules: ${statusModules.map((module) => `"${module}"`).join(', ')}
				`,
				textBlock: gql_statuses_query,
			},
			{
				title: `GitHub Projects list`,
				description: `
				Returns list of public repositories from my GitHub profile using the GitHub API,
				Pager parameters are optional
				`,
				textBlock: gql_github_projects_query,
			},
		],
	},
];
