import { NavItem, NonEmptyArray } from '../types/NavBar';

export const NavBarContent: NonEmptyArray<NavItem> = [
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
			,
			{
				sectionTitle: 'skills',
				sectionId: 'skillSection',
			},
			{
				sectionTitle: 'projects',
				sectionId: 'projectList',
			},
		],
	},
	{
		displayTitle: 'API Docs',
		pagePath: '/docs',
		sections: [
			{
				sectionTitle: 'Status Component',
				sectionId: 'vueStatus',
			},
			{
				sectionTitle: 'GitHub Projects',
				sectionId: 'githubProjects',
			},
		],
	},
];
