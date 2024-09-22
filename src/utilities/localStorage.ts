import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { IDonationInfo } from "../types/interfaces";

export const getDonationData = (): IDonationInfo[] => {
	const donationData = localStorage.getItem("donate-bangladesh");

	return JSON.parse(donationData || "[]");
};

export const saveDonationData = (donationInfo: IDonationInfo) => {
	const donationData = getDonationData();

	donationData.push(donationInfo);

	const newDonationData = JSON.stringify(donationData);

	localStorage.setItem("donate-bangladesh", newDonationData);

	toastr.info(`Donation Info Saved to History!`);
};
