import React, { FC, useEffect } from 'react';
import { ProjectProps } from '../../../components/Project';
import projects from '../../../data/Projects';

interface Props extends ProjectProps {
	id: number;
}
const project: FC<Props> = ({
	id,
	title,
	description,
	repo_link,
	live_link,
	technologies,
	repoNewTab,
	demoNewTab,
}) => {
	useEffect(() => {
		console.log('props', title);
	}, []);
	return <div>test</div>;	
};
export async function getStaticProps(context) {
	const {
		params: { id },
	} = context;
	return {
		props: {
			id,
			...projects[id],
		},
	};
}
export async function getStaticPaths() {
	return {
		paths: projects.map((p, x) => {
			return {
				params: {
					id: x.toString(),
				},
			};
		}),
		fallback: false, // false or 'blocking'
	};
}

export default project;
