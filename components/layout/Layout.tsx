import React, { FC, useEffect } from 'react';
import NavBar from '@/components/navbar/NavBar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import styles from './Layout.module.scss';
import scrollIdIntoView from '@/helpers/scrollIdIntoView';
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
				<meta
					property="og:title"
					content="Valdis Developer Portfolio"
					key="title"
				/>
				<meta
					name="description"
					content="My personal development portfolio, featuring information about me as well as showcasing my projects"
				/>
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, TypeScript, React, Next.js, React Native, Programming, Web development, Developer, Laravel, Drupal, PHP, SQL, GraphQL, Portfolio"
				/>
				<meta name="author" content="Valdis" />
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
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-MJSJXH851F"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-MJSJXH851F');`}
				</Script>
			</Head>
			<NavBar/>
			<div className={styles.root}>{children}</div>
		</>
	);
};

export default Layout;
