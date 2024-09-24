import { getElementByID } from "./getElements";

export const handleModal = () => {
	const modal = getElementByID("success-modal");
	const close = getElementByID("close-modal");

	if (modal) {
		// Open the modal after donation
		modal.style.display = "flex";

		// When close (x) button is clicked, close the modal
		if (close) {
			close.onclick = () => {
				modal.style.display = "none";
			};
		}

		// When click anywhere outside of the modal, close it
		window.onclick = (e: MouseEvent) => {
			if (e.target == modal) {
				modal.style.display = "none";
			}
		};
	}
};
