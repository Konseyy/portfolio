export const rest_list_req = `
{
	"module": <var><module_name : <type>string</type>></var>
}
`;
export const rest_list_resp = `
{
	"status": "OK",
	"statusCode": 200,
	"data": [
		{
			"project_id": <type>number</type>,
			"project_name": <type>string</type>,
			"status": <type>string</type>
		} , 
		...
	]
}
`;
export const rest_statuses_req = `
{
	"module": <var><module_name : <type>string</type>></var>
}
`;
export const rest_statuses_resp = `
{
	"status": "OK",
	"statusCode": 200,
	"data": [
		{
			"status_id": <type>string</type>,
			"status_name": <type>string</type>,
			"color": <type>string</type>,
			"module": <type>string</type>,
			"is_default": <type>number (0 or 1)</type>
		} ,
		...
	]
}
`;
export const gql_list_query = `
query {
	vue_status_component_list(module: <var><module_name : <type>string</type>></var>) {
		id : <type>number</type>
		name : <type>string</type>
		status : <type>string</type>
	}
}
`;
export const gql_statuses_query = `
query {
	vue_status_component_statuses(module: <var><module_name : <type>string</type>></var>) {
		status_id : <type>string</type>
		status_name : <type>string</type>
		color : <type>string</type>
		module : <type>string</type>
		is_default : <type>number (0 or 1)</type>
	}
}
`;
export const gql_github_projects_query = `
query {
	github_projects(page: <var><page_number (optional): <type>number</type>></var>, items_per_page: <var><item_count_per_page (optional): <type>number</type>></var>) {
		data {
			name : <type>string</type>
			description : <type>string</type>
			github_link : <type>string</type>
			mainly_used_language : <type>string</type>
			started_at : <type>string</type>
		}
		pager {
			current_page : <type>number</type>
			items_per_page : <type>number</type>
		}
	}
}
`;
