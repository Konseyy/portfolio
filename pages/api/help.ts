import { NextApiRequest, NextApiResponse } from 'next';
import { mockProjectStatuses, mockTaskStatuses } from '@/data/statuses';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log(req.query);
	res.status(203).end();
}
