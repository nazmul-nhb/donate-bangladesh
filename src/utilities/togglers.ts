import { TElement } from "../types/types";

export const toggleTabs = (tabToShow: TElement, tabToHide: TElement) => {
	if (tabToShow && tabToHide) {
		tabToShow.classList.remove("hidden");
		tabToShow.classList.add("block");
		tabToHide.classList.remove("block");
		tabToHide.classList.add("hidden");
	}
};

export const toggleButtonState = (
	activeButton: TElement,
	inactiveButton: TElement
) => {
	if (activeButton && inactiveButton) {
		activeButton.classList.add("active-tab-btn");
		activeButton.classList.remove("inactive-tab-btn");
		inactiveButton.classList.add("inactive-tab-btn");
		inactiveButton.classList.remove("active-tab-btn");
	}
};
