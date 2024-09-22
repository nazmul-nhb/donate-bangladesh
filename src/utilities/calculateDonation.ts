import { balanceContainer } from "../main";
import { getElementByID } from "./getElements";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const calculateDonation = (containerID: string, inputID: string) => {
	const donationContainer = getElementByID(containerID);
	const amount = Number((getElementByID(inputID) as HTMLInputElement).value);

	let currentBalance = Number(balanceContainer?.innerText);

	if (!amount) {
		return toastr.error("Amount Cannot Be Empty!");
	}

	if (amount > currentBalance) {
		return toastr.error("Insufficient Balance!");
	}

	if (amount < 0) {
		return toastr.error("Invalid Donation Amount!");
	}

	currentBalance -= amount;

	if (balanceContainer) {
		balanceContainer.innerText = currentBalance.toString();
		if (donationContainer) {
			let noakhaliNumberAmount = Number(donationContainer.innerText);
			noakhaliNumberAmount += amount;
			donationContainer.innerText = noakhaliNumberAmount.toString();
		}
		(getElementByID(inputID) as HTMLInputElement).value = "";
		toastr.success(`Donated BDT ${amount}`);
	}
};
