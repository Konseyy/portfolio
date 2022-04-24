import { GetServerSideProps } from 'next';
import React from 'react';
import DocsContent from '@/components/page/docs/DocsContent';

const docs = ({ host }) => {
	return <DocsContent host={host} />;
};

export default docs;
interface Props {
	host: string;
}
export const getServerSideProps: GetServerSideProps<Props> = async ({
	req,
}) => {
	return {
		props: {
			host: req.headers.host,
		},
	};
};
