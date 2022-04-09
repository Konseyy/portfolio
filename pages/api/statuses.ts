import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const params = req.query;
	if (!params.module) {
		res.status(200).json({
			message: 'Please provide a module.',
		});
	}
	console.log('query is', params);
	const availableModules = ['tasks', 'projects'];
	if (!availableModules.includes(params.module as string)) {
		res.status(200).json({
			message: `Module ${params.module} is not available.`,
		});
		return;
	}
	('https://homeassignment.scoro.com/api/v2/statuses/list');
	try {
		const statusResponse = await fetch(
			'https://homeassignment.scoro.com/api/v2/tasks/list',
			{
				method: 'POST',
				body: JSON.stringify({
					lang: 'eng',
					company_account_id: process.env.LIST_COMPANY_ID,
					apiKey: process.env.LIST_API_KEY,
					filter: {
						module: [params.module],
					},
				}),
			}
		);
		const statusResponseJSON = await statusResponse.json();
		if (statusResponseJSON.statusCode === 200) {
			res.status(200).json({
				message: 'Success',
				data: statusResponseJSON.data,
			});
		} else {
			console.error(
				`error fetching status data, received status code ${statusResponseJSON.statusCode}`
			);
			res.status(500).json({
				message: 'Error fetching status data.',
				data: [],
			});
		}
	} catch (e) {
		console.error('error fetching status data', e);
		res.status(500).json({
			message: 'Error fetching status data.',
			data: [],
		});
	}
}
