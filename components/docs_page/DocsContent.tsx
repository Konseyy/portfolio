import React from 'react';
import TextBlock from '../TextBlock';
import style from './DocsContent.module.scss';
import { test } from './docsTextBlocks';

const DocsContent = () => {

	return (
		<div className={style.root}>
			<div>
				Content here
			</div>
			<TextBlock title='Test query title' className={style.textBlock}>
				{test}
			</TextBlock>
		</div>
	);
};

export default DocsContent;
