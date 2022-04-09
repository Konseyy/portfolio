import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const params = req.query;
	if (!params.type) {
		res.status(200).json({
			message: 'Please provide a type.',
		});
	}
	console.log('query is', params);
	switch (params.type) {
		case 'tasks':
			try {
				const tasksResponse = await fetch(
					'https://homeassignment.scoro.com/api/v2/tasks/list',
					{
						method: 'POST',
						body: JSON.stringify({
							lang: 'eng',
							company_account_id: process.env.LIST_COMPANY_ID,
							apiKey: process.env.LIST_API_KEY,
							request: {},
						}),
					}
				);
				const tasksResponseJSON = await tasksResponse.json();
				if (tasksResponseJSON.statusCode === 200) {
					res.status(200).json({
						message: 'Success',
						data: tasksResponseJSON.data.map((t) => ({
							id: t.event_id,
							title: t.event_name,
							status: t.status,
						})),
					});
				} else {
					console.error(
						`error fetching task data, received status code ${tasksResponseJSON.statusCode}`
					);
					res.status(500).json({
						message: 'Error fetching task data.',
						data: [],
					});
				}
			} catch (e) {
				console.error('error fetching task data', e);
				res.status(500).json({
					message: 'Error fetching task data.',
					data: [],
				});
			}
			break;
		case 'projects':
			try {
				const projectsResponse = await fetch(
					'https://homeassignment.scoro.com/api/v2/projects/list',
					{
						method: 'POST',
						body: JSON.stringify({
							lang: 'eng',
							company_account_id: process.env.LIST_COMPANY_ID,
							apiKey: process.env.LIST_API_KEY,
							request: {},
						}),
					}
				);
				const projectsResponseJSON = await projectsResponse.json();
				if (projectsResponseJSON.statusCode === 200) {
					res.status(200).json({
						message: 'Success',
						data: projectsResponseJSON.data.map((p) => ({
							id: p.project_id,
							title: p.project_name,
							status: p.status,
						})),
					});
				} else {
					console.error(
						`error fetching project data, received status code ${projectsResponseJSON.statusCode}`
					);
					res.status(500).json({
						message: 'Error fetching project data.',
						data: [],
					});
				}
			} catch (e) {
				console.error('error fetching project data', e);
				res.status(500).json({
					message: 'Error fetching project data.',
					data: [],
				});
			}
			break;
		default:
			res.status(200).json({
				message: 'type not recognized',
			});
			break;
	}
}
