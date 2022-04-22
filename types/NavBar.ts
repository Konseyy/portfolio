export type NonEmptyArray<T> = [T, ...T[]];
export type NavItem = {
	displayTitle: string;
	pagePath: string;
	sections: NonEmptyArray<NavSection>;
};
export type NavSection = {
	sectionTitle: string;
	sectionId?: string;
	onClick?: () => void;
};
