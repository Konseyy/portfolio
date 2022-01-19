import React, { FC, useEffect } from 'react';
import NavBar from './NavBar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import scrollIdIntoView from '../functions/scrollIdIntoView';
const Layout: FC = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		let scroll = new URLSearchParams(window.location.search).get('scroll');
		if (scroll) {
			scrollIdIntoView(scroll);
			router.replace(location.pathname, undefined, { shallow: true });
		}
		const handleRouteChange = () => {
			const params = new URLSearchParams(window.location.search);
			const scrollTo = params.get('scroll');
			if (scrollTo) {
				scrollIdIntoView(scrollTo);
				router.replace(location.pathname, undefined, { shallow: true });
			}
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<title>Valdis - Developer</title>
			</Head>
			<NavBar
				navItems={[
					{
						displayTitle: 'Home',
						pagePath: '/',
						sections: [
							{
								sectionTitle: 'home',
								sectionId: 'home',
							},
							{
								sectionTitle: 'about me',
								sectionId: 'aboutMe',
							},
							{
								sectionTitle: 'projects',
								sectionId: 'projectList',
							},
						],
					},
					// {
					// 	displayTitle: 'contact me',
					// 	pagePath: '/contact',
					// 	sections: [
					// 		{
					// 			sectionTitle: 'Email me',
					// 			sectionId: 'contact',
					// 			onClick: () => {
					// 				router.push('mailto:vgbukalders@gmail.com');
					// 			},
					// 		},
					// 	],
					// },
				]}
			/>
			<div style={{ paddingTop: 105 }}>{children}</div>
		</>
	);
};

export default Layout;
