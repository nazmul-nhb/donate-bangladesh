import { getElementByID } from "./getElements";
import { getDonationData } from "./localStorage";

export const displaySpecificDonationAmount = (containerID: string) => {
	const donationContainer = getElementByID(containerID);

	const filteredDonation = getDonationData()?.filter(
		(donation) => donation.type === containerID
	);

	const totalAmount = filteredDonation?.reduce(
		(total, current) => total + current.amount,
		0
	);

	if (donationContainer) {
		donationContainer.innerText = totalAmount.toString();
	}
};
