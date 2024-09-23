import { getElementByID } from "./getElements";
import { getDonationData } from "./localStorage";

const historyTab = getElementByID("history-tab");

export const displayDonationHistory = () => {
	const donationData = getDonationData();

	if (historyTab) {
		historyTab.innerHTML = "";

		donationData?.forEach((donationInfo) => {
			const { amount, title, time } = donationInfo;

			const historyCard = document.createElement("div");

			historyCard.classList.add(
				"border",
				"border-donate-border",
				"p-8",
				"rounded-lg",
				"space-y-4"
			);

			const formattedTitle = getElementByID(title)?.innerText.trim();

			const donationDate = new Date(time);

			const formattedDate = donationDate.toString();

			historyCard.innerHTML = `
                <h3 class="font-bold text-xl">
                    ${amount} Taka is Donated for ${formattedTitle}!
                </h3>
                <h6 class="font-light text-donate-secondary">
                    Date: ${formattedDate}
                </h6>
            `;

			historyTab.appendChild(historyCard);
		});
	}
};
