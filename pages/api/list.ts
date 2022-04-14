import { NextApiRequest, NextApiResponse } from 'next';
import { mockProjectData } from '../../mock_data/projects';
import { mockTaskData } from '../../mock_data/tasks';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Max-Age', '3600');
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	if (req.method !== 'POST') {
		console.error('Method not allowed', req.method);
		res.status(405).json({
			statusCode: 405,
			message: 'Only POST method allowed',
		});
		return;
	}
	const body = req.body;
	if (!body.module) {
		console.error('Module not found in req body', JSON.stringify(body));
		res.status(400).json({
			statusCode: 400,
			message: "Please provide 'module' in the request body.",
		});
		return;
	}
	const module = body.module;
	const availableModules = ['tasks', 'projects'];
	if (!availableModules.includes(module)) {
		console.error('Module not found', module);
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
				data: mockTaskData,
			});
			break;
		case 'projects':
			res.status(200).json({
				status: 'OK',
				statusCode: 200,
				data: mockProjectData,
			});
			break;
	}
}
