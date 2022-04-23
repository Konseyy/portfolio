export const rest_list_req = `
{
	"module": <module_name : string>
}
`;
export const rest_list_resp = `
{
	"status": "OK",
	"statusCode": 200,
	"data": [
		{
			"project_id": number,
			"project_name": string,
			"status": string
		} , 
		...
	]
}
`;
export const rest_statuses_req = `
{
	"module": <module_name : string>
}
`;
export const rest_statuses_resp = `
{
	"status": "OK",
	"statusCode": 200,
	"data": [
		{
			"status_id": string,
			"status_name": string,
			"color": string,
			"module": string,
			"is_default": number(0 or 1)
		} ,
		...
	]
}
`;
export const gql_list_query = `
query {
	vue_status_component_list(module: <module_name : string>) {
		id : number
		name : string
		status : string
	}
}
`;
export const gql_statuses_query = `
query {
	vue_status_component_statuses(module: <module_name : string>) {
		status_id : string
		status_name : string
		color : string
		module : string
		is_default : number(0 or 1)
	}
}
`;
export const gql_github_projects_query = `
query {
	github_projects(page: <page_number : number>, items_per_page: <item_count_per_page : number>) {
		data {
			name : string
			description : string
			github_link : string
			mainly_used_language : string
			started_at : string
		}
		pager {
			current_page : number
			items_per_page : number
		}
	}
}
`;
