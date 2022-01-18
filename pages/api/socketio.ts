import { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';

const ioHandler = (req: NextApiRequest, res) => {
	if (!res.socket?.server.io) {
		console.log('*First use, starting websocket');

		const io = new Server(res.socket.server);

		io.on('connection', (socket) => {
			const username = socket.handshake.auth?.username;
			console.log(`${username} has connected`);
			socket.emit('welcome', `welcome ${username}`);
			socket.on('chat-send', (s, cb) => {
				console.log(`received chat from user: "${username}" with content: "${s}"`);
				io.emit('chat-receive', {
					message: s,
					sender: socket.handshake.auth.username,
				});
				cb && cb(`received chat ${s}`);
			});
		});

		res.socket.server.io = io;
	}
	res.end();
};

export const config = {
	api: {
		bodyParser: false,
	},
};

export default ioHandler;
