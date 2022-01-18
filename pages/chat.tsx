import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
const chat = () => {
	const [socket, setSocket] = useState<Socket>();
	const [username, setUsername] = useState<string>();
	const [input, setInput] = useState<string>();
	const [connected, setConnected] = useState(false);
	const [room, setRoom] = useState<string>();
	const [messages, setMessages] = useState<message[]>([]);
	const usernameInput = useRef<HTMLInputElement>();
	const chatInput = useRef<HTMLInputElement>();
	type message = {
		message: string;
		sender: string;
	};
	useEffect(() => {
		fetch('/api/socketio');
		if (usernameInput.current) {
			if (usernameInput.current.value) {
				setUsername(usernameInput.current.value);
			}
		}
		if (chatInput.current) {
			if (chatInput.current.value) {
				setInput(chatInput.current.value);
			}
		}
	}, []);
	useEffect(() => {
		if (socket) {
			socket.on('welcome', (s) => {
				console.log(s);
				console.log('socket is', socket.id);
			});
			socket.on('chat-receive', (chat) => {
				console.log(`new chat: ${chat.sender}:${chat.message}`);
				setMessages((old) => [...old, chat]);
			});
			socket.on('disconnect', () => {
				console.log('disconnected');
			});
		}
	}, [socket]);
	return (
		<div>
			<div>
				<label>Username: </label>
				<input
					ref={usernameInput}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
				/>
				<button
					onClick={() => {
						if (!connected) {
							if (!socket) {
								if (!username) {
									console.error('enter username');
									return;
								}
								setSocket(
									io({
										reconnectionDelayMax: 10000,
										auth: { username: username },
									})
								);
							} else {
								socket.connect();
							}
							setConnected(true);
						} else {
							socket.disconnect();
							setSocket(null);
							setConnected(false);
						}
					}}
				>
					{connected ? 'Disconnect' : 'Connect'}
				</button>
			</div>
			<div>
				<label>Message: </label>
				<input
					ref={chatInput}
					onChange={(e) => setInput(e.target.value)}
					type="text"
				/>
				<button
					onClick={() => {
						if (!socket) {
							console.error('must set username to send chat');
							return;
						}
						if (input === '') {
							console.error('nothing inputted in chat');
							return;
						}
						console.log('emitting');
						socket.emit('chat-send', input, (res) => {
							console.log('response from server', res);
							setInput('');
							chatInput.current.value = '';
						});
					}}
				>
					Send chat
				</button>
			</div>
			<div key="messages">
				{messages.map((mes, x) => {
					return (
						<p key={`message${x}`}>
							<b style={{ fontWeight: 'bold' }}>{`${mes.sender}:`}</b>
							{` ${mes.message}`}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default chat;
