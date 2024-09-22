import { balanceContainer } from "../main";
import { getElementByID } from "./getElements";

export const calculateDonation = (containerID: string, inputID: string) => {
	const donationContainer = getElementByID(containerID);
	const amount = Number((getElementByID(inputID) as HTMLInputElement).value);

	let currentBalance = Number(balanceContainer?.innerText);
	currentBalance -= amount;

	if (balanceContainer) {
		balanceContainer.innerText = currentBalance.toString();
		if (donationContainer) {
			let noakhaliNumberAmount = Number(donationContainer.innerText);
			noakhaliNumberAmount += amount;
			donationContainer.innerText = noakhaliNumberAmount.toString();
		}
		(getElementByID(inputID) as HTMLInputElement).value = "";
	}
};
