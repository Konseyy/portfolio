const scrollIdIntoView = (id: string) => {
	const elem = document.getElementById(id);
	if (!elem) return;
	elem.scrollIntoView();
};
export default scrollIdIntoView;
