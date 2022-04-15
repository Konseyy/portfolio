import { gql } from 'apollo-server-core';
import { mockProjectData } from '../../../../mock_data/projects';
import {
	mockProjectStatuses,
	mockTaskStatuses,
} from '../../../../mock_data/statuses';
import { mockTaskData } from '../../../../mock_data/tasks';

export const typeDefs = gql`
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
	extend type Query {
		vue_status_component_list(module: vueStatusModule!): [vueStatusListType]!
		vue_status_component_statuses(module: vueStatusModule!): [vueStatusType]!
	}
`;
const resolvers = {
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
};
const endpoint = {
	typeDefs,
	resolvers,
};
export default endpoint;
