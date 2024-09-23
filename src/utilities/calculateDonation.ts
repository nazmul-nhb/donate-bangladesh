import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { balanceContainer } from "../main";
import { getElementByID } from "./getElements";
import { IDonationInfo } from "../types/interfaces";
import { saveCurrentBalance, saveDonationData } from "./localStorage";

export const calculateDonation = (
	containerID: string,
	inputID: string,
	titleID: string
) => {
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
			let previousAmount = Number(donationContainer.innerText);
			previousAmount += amount;
			donationContainer.innerText = previousAmount.toString();
		}
		(getElementByID(inputID) as HTMLInputElement).value = "";

		const donationInfo: IDonationInfo = {
			amount,
			type: containerID,
			title: titleID,
			time: new Date(),
		};

		saveDonationData(donationInfo);
		saveCurrentBalance(currentBalance);
		toastr.success(`Donated BDT ${amount}`);
	}
};
