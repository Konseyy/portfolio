export const openInBrowser = (url: string, inNewTab = true) => {
	window.open(url, inNewTab ? '_blank' : '_self').focus();
};
