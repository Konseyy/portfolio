import { NextApiRequest, NextApiResponse } from 'next';
import {
	mockProjectStatuses,
	mockTaskStatuses,
} from '../../mock_data/Statuses';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		res.status(405).json({
			statusCode: 405,
			message: 'Only POST method allowed',
		});
		return;
	}
	if (!req.body.module) {
		res.status(400).json({
			statusCode: 400,
			message: "Please provide 'module' in the request body.",
		});
		return;
	}
	const module = req.body.module;
	const availableModules = ['tasks', 'projects'];
	if (!availableModules.includes(module)) {
		res.status(404).json({
			statusCode: 404,
			message: `Module '${module}' not found. Please enter a module from the list of available modules`,
			availableModules: availableModules.map((i) => `'${i}'`).join(', '),
		});
		return;
	}
	switch (module) {
		case 'tasks':
			res.status(200).json({
				status: 'OK',
				statusCode: 200,
				data: mockTaskStatuses,
			});
			break;
		case 'projects':
			res.status(200).json({
				status: 'OK',
				statusCode: 200,
				data: mockProjectStatuses,
			});
			break;
	}
}
