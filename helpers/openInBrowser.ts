export const openInBrowser = (url: string, inNewTab = false) => {
	window.open(url, inNewTab ? '_blank' : '_self').focus();
};
