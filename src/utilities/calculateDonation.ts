import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { balanceContainer } from "../main";
import { getElementByID } from "./getElements";
import { IDonationInfo } from "../types/interfaces";
import { saveCurrentBalance, saveDonationData } from "./localStorage";
import { handleModal } from "./showModal";

export const calculateDonation = (
	containerID: string,
	inputID: string,
	titleID: string
) => {
	const donationContainer = getElementByID(containerID);
	const amount = Number((getElementByID(inputID) as HTMLInputElement).value);

	let currentBalance = Number(balanceContainer?.innerText);

	// Validation checks
	if (!amount) {
		return toastr.error("Amount Cannot Be Empty!");
	}

	if (amount > currentBalance) {
		return toastr.error("Insufficient Balance!");
	}

	if (amount < 0) {
		return toastr.error("Invalid Donation Amount!");
	}

	// Proceed with donation
	currentBalance -= amount;

	if (balanceContainer) {
		// Update balance on navbar
		balanceContainer.innerText = currentBalance.toString();

		// Update donation container with new donation amount in the campaign card
		if (donationContainer) {
			let previousAmount = Number(donationContainer.innerText);
			previousAmount += amount;
			donationContainer.innerText = previousAmount.toString();
		}

		// Reset the input field
		(getElementByID(inputID) as HTMLInputElement).value = "";

		const donationInfo: IDonationInfo = {
			amount,
			type: containerID,
			title: titleID,
			time: new Date(),
		};

		// Save the donation information and update balance
		saveDonationData(donationInfo);
		saveCurrentBalance(currentBalance);

		// Show success message
		toastr.success(`Donated BDT ${amount}`);

		// Show success message
		handleModal();
	}
};
