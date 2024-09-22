export const getElementByID = (id: string) => {
	const element = document.getElementById(id);
	return element;
};

export const getNumberInputValue = (id: string) => {
	return Number((getElementByID(id) as HTMLInputElement).value);
};
