import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { IDonationInfo } from "../types/interfaces";

export const getDonationData = (): IDonationInfo[] => {
	const donationData = localStorage.getItem("donate-bangladesh");

	return JSON.parse(donationData || "[]");
};

export const saveDonationData = (donationInfo: IDonationInfo) => {
	const donationData = getDonationData();

	donationData.unshift(donationInfo);

	const newDonationData = JSON.stringify(donationData);

	localStorage.setItem("donate-bangladesh", newDonationData);

	toastr.info(`Donation Info Saved to History!`);
};

export const getCurrentBalance = () => {
	const currentBalance = localStorage.getItem("balance");
	if (currentBalance) {
		return Number(JSON.parse(currentBalance));
	} else {
		return null;
	}
};

export const saveCurrentBalance = (currentBalance: number) => {
	const newCurrentBalance = JSON.stringify(currentBalance);
	localStorage.setItem("balance", newCurrentBalance);
	toastr.info(`Current Balance is ${currentBalance}!`);
};
