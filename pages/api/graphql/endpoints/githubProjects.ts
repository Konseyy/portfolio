import { gql } from 'apollo-server-core';

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
	extend type Query{
		github_projects(
			page: Int
			items_per_page: Int
		): GithubProjectsResult!
	}
`;
const resolvers = {
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
};

const endpoint = {
	typeDefs,
	resolvers,
};
export default endpoint;
